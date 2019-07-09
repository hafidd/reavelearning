<?php

namespace App\Http\Controllers\Api;

use App\Hasil;

//use App\Mapel;
use App\HasilDetail;
use App\Http\Controllers\Controller;
use App\KuisSoal;
use App\MapelKuis;
//use App\MapelMateri;
//use App\MapelUser;
//use App\MapelUserLog;
//use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use JWTAuth;

//use Validator;

class MulaiKuisController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function start(Request $request)
    {
        //get data mapel_kuis
        $mapel_kuis = MapelKuis::with(['kuis', 'mapel'])
            ->whereHas('mapel', function ($q) {
                $q->whereHas('joinedUser', function ($q) {
                    $q->where('user_id', $this->user->id)
                        ->whereRaw('coalesce("mapel_kuis"."group", ' . "''" . ') = coalesce("mapel_user"."group", ' . "''" . ')');
                });
            })
            ->where(['id' => $request->mkId, 'published' => true])->firstOrFail();

        $mk_settings = json_decode($mapel_kuis["settings"]);
        // cek tersedia?
        $ok = false;
        if ($mapel_kuis->published) {
            if ($mk_settings->type == 1) {
                // tipe latihan
                $ok = true;
            } else if ($mk_settings->mulai == 1
                && $mk_settings->started
                && (date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes", strtotime($mk_settings->start))) > date('Y-m-d H:i:s'))) {
                // tipe mulai manual + dimulai + waktu masih
                $ok = true;
            } else if ($mk_settings->mulai == 2
                && (date($mk_settings->start) <= date('Y-m-d H:i:s'))
                && (date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes", strtotime($mk_settings->start))) > date('Y-m-d H:i:s'))) {
                // tipe terjadwal + dimulai + waktu masih
                $ok = true;
            }
        }
        if (!$ok) {
            return response()->json('kuis tidak tersedia', 404);
        }
        // cek record
        $hasil = Hasil::where(["user_id" => $this->user->id, "mapel_kuis_id" => $request->mkId])->first();
        if ($hasil !== null) {
            return $this->returnDataKuis($mapel_kuis, $hasil->id);
        }
        //transaction
        DB::beginTransaction();
        try {
            //insert hasil
            $hasil = Hasil::create([
                "user_id" => $this->user->id,
                "mapel_kuis_id" => $request->mkId,
                "start" => $mk_settings->type == 1 ? date('Y-m-d H:i:s') : $mk_settings->start,
                "end" => $mk_settings->type == 2 ? date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes")) : null,
            ]);
            /**hasil detail**/
            // get list soalnya
            $soals = KuisSoal::select('id', 'soal_id')
                ->where(['kuis_id' => $mapel_kuis->kuis_id, 'type' => 2])->get();
            $records = array_map(function ($soal) use ($hasil) {
                return [
                    "hasil_id" => $hasil->id,
                    "kuis_soal_id" => $soal['id'],
                    "soal_id" => $soal['soal_id'],
                    "jawaban" => null,
                    "point" => null,
                ];
            }, $soals->toArray());
            //insert detail
            $details = HasilDetail::insert($records);
            //commit
            DB::commit();
            return $this->returnDataKuis($mapel_kuis, $hasil->id);
        } catch (\Illuminate\Database\QueryException $e) {
            //rollback
            DB::rollback();
            return response()->json($e, 500);
        }
    }

    private function returnDataKuis($mapel_kuis, $hasil_id = "", $hasil_details = [])
    {
        // daftar soal
        $soals = KuisSoal::with(['soal' => function ($q) {
            $q->select('id', 'type', 'pertanyaan', 'kode');
        }])->where(['kuis_id' => $mapel_kuis->kuis_id, 'type' => 2])->get();
        // daftar jawaban
        $data_jawaban = HasilDetail::select('soal_id', 'jawaban')
            ->where(['hasil_id' => $hasil_id])->get();
        $jawabans = [];
        foreach ($data_jawaban->toArray() as $val) {
            $jawabans[$val['soal_id']] = json_decode($val['jawaban']) ? json_decode($val['jawaban']) : [];
        }
        $data = [
            "mapel_kuis" => $mapel_kuis,
            "soals" => $soals,
            "jawabans" => json_encode($jawabans),
            "hasil_id" => $hasil_id,
        ];
        return new JsonResource($data);
    }

    public function updateJawaban(Request $request)
    {
        $jawaban = HasilDetail::where([
            'hasil_id' => $request->hId,
            'soal_id' => $request->sId,
        ])->firstOrFail();
        if ($request->bs) {
            $request->value = $request->value ? true : false;
        }
        $jawaban->jawaban = json_encode($request->value);
        $jawaban->update();
        return new JsonResource($jawaban);
    }
}
