<?php

namespace App\Http\Controllers\API;

use App\Hasil;
use App\HasilDetail;
use App\Http\Controllers\Controller;
use App\MapelKuis;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use JWTAuth;

class HasilController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function getDetail($id)
    {
        $kuis = MapelKuis::with(['kuis', 'mapel'])->findOrFail($id);

        $peserta = Hasil::with(['user'])
            ->withCount(['details as points' => function ($q) {
                $q->select(DB::raw('sum(point)'));
            }])
            ->withCount(['details as max_points' => function ($q) {
                $q->select(DB::raw('sum(max_point)'));
            }])
            ->withCount(['details as belum_dikoreksi' => function ($q) {
                $q->where('point', null);
            }])
            ->whereHas('mapel_kuis', function ($q) use ($kuis) {
                $q->where('group', $kuis->group);
            })->where('mapel_kuis_id', $kuis->id)->get();

        $data = [
            "kuis" => $kuis,
            "peserta" => $peserta,
        ];
        return new JsonResource($data);
    }

    public function getDetailHasil($id)
    {
        $hasil = Hasil::with([
            'mapel_kuis',
            'details' => function ($q) {
                $q->join('kuis_soal', 'hasil_detail.kuis_soal_id', '=', 'kuis_soal.id')
                    ->selectRaw('hasil_detail.*, kuis_soal.parent')
                    ->with(['soal'])
                    ->orderBy('parent', 'asc');
            },
        ])->findOrFail($id);

        $data = [
            "hasil" => $hasil,
        ];
        return new JsonResource($data);
    }

    public function koreksiHasil(Request $request, $id)
    {
        $points = $request->points;
        foreach ($points as $point) {
            $data = HasilDetail::findOrFail($point['id']);
            $data->point = $point['point'];
            $data->update();
        }
        return response()->json('', 204);
    }

    public function publishHasil(Request $request, $id)
    {
        $data = Hasil::where(['mapel_kuis_id' => $id])
            ->update(['published' => true]);
        return response()->json('', 204);
    }

    /*
     *SISWA
     */

    public function hasilSiswa($id)
    {
        $data = MapelKuis::selectRaw("*")->with(['kuis', 'mapel'])
            ->whereHas('mapel', function ($q) {
                $q->whereHas('joinedUser', function ($q) {
                    $q->where('user_id', $this->user->id)
                        ->whereRaw('coalesce("mapel_kuis"."group", ' . "''" . ') = coalesce("mapel_user"."group", ' . "''" . ')');
                });
            })
            ->where(['mapel_id' => $id, 'published' => true])->get();
        // filter
        $filtered_data = array_filter($data->toArray(), function ($d) {
            $mk_settings = json_decode($d['settings']);
            $ok = false;
            if ($mk_settings->type == 1) {
                $ok = false;
            } else if ($mk_settings->mulai == 1
                && (($mk_settings->started && (date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes", strtotime($mk_settings->start))) < date('Y-m-d H:i:s'))))
            ) {
                $ok = true;
            } else if ($mk_settings->mulai == 2
                && ((date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes", strtotime($mk_settings->start))) < date('Y-m-d H:i:s')))
            ) {
                $ok = true;
            }
            return $ok;
        });
        return new JsonResource($filtered_data);
    }

    public function getDetailHasilSiswa($id)
    {

        $hasil = Hasil::with([
            'mapel_kuis',
            'details' => function ($q) {
                $q->join('kuis_soal', 'hasil_detail.kuis_soal_id', '=', 'kuis_soal.id')
                    ->selectRaw('hasil_detail.*, kuis_soal.parent')
                    ->with(['soal'])
                    ->orderBy('parent', 'asc');
            },
        ])
            ->withCount(['details as points' => function ($q) {
                $q->select(DB::raw('sum(point)'));
            }])
            ->withCount(['details as max_points' => function ($q) {
                $q->select(DB::raw('sum(max_point)'));
            }])
            ->where([
                'mapel_kuis_id' => $id,
                'user_id' => $this->user->id,
            ])->firstOrFail();

        if (!$hasil->published) {
            return response()->json(null, 200);
        }
        $data = [
            "hasil" => $hasil,
        ];
        return new JsonResource($data);
    }

}
