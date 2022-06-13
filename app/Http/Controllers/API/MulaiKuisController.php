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
            return $this->returnDataKuis($mapel_kuis, $hasil);
        }
        //transaction
        DB::beginTransaction();
        try {
            //insert hasil
            $hasil = Hasil::create([
                "user_id" => $this->user->id,
                "mapel_kuis_id" => $request->mkId,
                "start" => $mk_settings->type == 1 ? date('Y-m-d H:i:s') : $mk_settings->start,
                "end" => $mk_settings->type == 2 ? date('Y-m-d H:i:s', strtotime("{$mk_settings->start} + {$mk_settings->waktu} minutes")) : null,
            ]);
            /**hasil detail**/
            // get list soalnya
            $soals = KuisSoal::select('id', 'type', 'soal_id', 'settings->bobot AS bobot')
                ->with(['soal' => function ($q) {
                    $q->select('id', 'type AS soalType');
                }])
                ->where(['kuis_id' => $mapel_kuis->kuis_id, 'type' => 2])->get();
            $records = array_map(function ($soal) use ($hasil) {
                return [
                    "hasil_id" => $hasil->id,
                    "kuis_soal_id" => $soal['id'],
                    "soal_id" => $soal['soal_id'],
                    "jawaban" => null,
                    "point" => in_array($soal['soal']['soalType'], [1, 2, 3]) ? 0 : null,
                    "max_point" => $soal['bobot'],
                ];
            }, $soals->toArray());
            //insert detail
            $details = HasilDetail::insert($records);
            //commit
            DB::commit();
            return $this->returnDataKuis($mapel_kuis, $hasil);
        } catch (\Illuminate\Database\QueryException $e) {
            //rollback
            DB::rollback();
            return response()->json($e, 500);
        }
    }

    private function returnDataKuis($mapel_kuis, $hasil = "", $hasil_details = [])
    {
        // daftar soal
        $soals = KuisSoal::with(['soal' => function ($q) {
            $q->select('id', 'type', 'pertanyaan', 'kode');
        }])->where(['kuis_id' => $mapel_kuis->kuis_id])->get();
        //print_r($soals->toArray()); exit;
        $soals_r = array_map(function ($data) {
            if ($data['soal'] && $data['soal']['type'] == 4) {
                $q = preg_replace('/\[\[(.*?)\]\]/i', "[[]]", json_decode($data['soal']['pertanyaan'])->q);
                $data['soal']['pertanyaan'] = json_encode(['q' => $q]);
            }
            return $data;
        }, $soals->toArray());
        // daftar jawaban
        $data_jawaban = HasilDetail::select('soal_id', 'jawaban')
            ->where(['hasil_id' => $hasil->id])->get();
        $jawabans = [];
        foreach ($data_jawaban->toArray() as $val) {
            //$jawabans[$val['soal_id']] = json_decode($val['jawaban']) ? json_decode($val['jawaban']) :  [];
            $jawabans[$val['soal_id']] = json_decode($val['jawaban']);
        }
        //sisa waktu
        $sisa = $hasil->end ? (strtotime($hasil->end) - strtotime(date("Y-m-d H:i:s"))) * 1000 : null;
        $data = [
            "TEST" => $hasil->end . ' ---- ' . date("Y-m-d H:i:s"),
            "mapel_kuis" => $mapel_kuis,
            "soals" => $soals_r,
            "jawabans" => json_encode($jawabans),
            "hasil" => $hasil,
            "sisa" => $sisa,
        ];
        return new JsonResource($data);
    }

    public function updateJawaban(Request $request)
    {
        $jawaban = HasilDetail::where([
            'hasil_id' => $request->hId,
            'soal_id' => $request->sId,
        ])->with(['soal' => function ($q) {
            $q->select('id', 'type', 'jawaban');
        }])->firstOrFail();
        if ($request->bs) {
            $request->value = $request->value ? true : false;
        }
        $jawaban->jawaban = json_encode($request->value);

        // cek
        $type_soal = $jawaban->soal->type;
        $kunci = json_decode($jawaban->soal->jawaban, true);
        $jawaban->point = 0;
        if ($type_soal == 1) {
            if (count(array_diff($kunci['a'], $request->value)) == 0
                && ($kunci['type'] == 1 || ($kunci['type'] == 2 && count($kunci['a']) == count($request->value)))) {
                $jawaban->point = $jawaban->max_point;
            }
        } else if ($type_soal == 2) {
            if ($kunci == $request->value) {
                $jawaban->point = $jawaban->max_point;
            }
        } else if ($type_soal == 3) {
            $count_soal = count($kunci);
            $tul = 0;
            foreach ($kunci as $k) {
                foreach ($request->value as $r) {
                    if ($r['q'] == $k['q'] && $r['a'] == $k['a']) {
                        $tul++;
                    }
                }
            }
            $jawaban->point = $tul / $count_soal * $jawaban->max_point;
        } else {
            $jawaban->point = null;
        }

        if ($jawaban->update()) {
            return response()->json('', 204);
        } else {
            return response()->json('gagal', 400);
        }

    }
}
