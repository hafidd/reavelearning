<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\KuisSoal;
use App\Soal;
//use App\Soal;
//use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
//use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Storage;
use JWTAuth;
use Validator;

class SoalController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = Soal::where('user_id', $this->user->id);
        //$data = $request->type === "waiting" ? $data->whereHas("waitings")->withCount('waitings') : $data;
        // filter
        $data = $request->kode ? $data->where('kode', 'ilike', '%' . $request->kode . '%') : $data;
        $data = $request->type ? $data->where('type', $request->type) : $data;
        $data = $request->pertanyaan ? $data->where('pertanyaan->q', 'LIKE', '%' . $request->pertanyaan . '%') : $data;
        $data = $data->paginate(20);
        return JsonResource::collection($data);
    }

    public function store(Request $request)
    {
        // validasi
        $this->validate($request, [
            'type' => 'required',
            'q' => 'required|min:5',
            'aType' => 'required_if:type,1',
        ], $this->errMsg());

        // type 1 pilgan
        if ($request->type == 1) {
            // pertanyaan, pilihan jawaban
            // validasi
            $data = [
                'jawaban' => json_decode($request->jawabans),
                'kunci' => json_decode($request->kunci),
            ];
            $validator = Validator::make($data, [
                'jawaban' => 'array|min:2',
                'jawaban.*' => 'distinct|required',
                'kunci' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->messages()], 422);
            }
            //insert
            $pertanyaan = [
                'type' => $request->aType,
                'q' => $request->q,
                'alist' => json_decode($request->jawabans),
            ];
            // kunci jawaban
            $jawaban = [
                'type' => $request->aType,
                'a' => json_decode($request->kunci),
            ];
        } else if ($request->type == 2) {
            //type2 b/s
            $pertanyaan = ['q' => $request->q];
            $jawaban = $request->kunci == 0 ? false : true;
        } else if ($request->type == 3) {
            //type3 menjodohkan
            // validasi
            $data = [
                'pertanyaan' => json_decode($request->pertanyaans),
                'jawaban' => json_decode($request->jawabans),
                'kunci' => json_decode($request->kunci),
                'pertanyaan_count' => count(json_decode($request->pertanyaans)),
                'jawaban_count' => count(json_decode($request->jawabans)),
                'kunci_count' => count(json_decode($request->kunci)),
            ];
            $validator = Validator::make($data, [
                'pertanyaan' => 'array|min:2',
                'jawaban' => "array|min:${data['pertanyaan_count']}",
                'kunci_count' => 'same:pertanyaan_count',
                'pertanyaan.*' => 'distinct|required',
                'jawaban.*' => 'distinct|required',
                'kunci.*' => 'distinct|required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->messages()], 422);
            }
            //insert
            $pertanyaan = [
                'q' => $request->q,
                'qlist' => json_decode($request->pertanyaans),
                'alist' => json_decode($request->jawabans),
            ];
            $jawaban = json_decode($request->kunci);
        } else if ($request->type == 4) {
            //type4 isian singkat
            // get kunci jawaban
            $request->q = str_replace("[[]]", "", $request->q); // rem [[]] kosong
            preg_match_all('/\[\[(.*?)\]\]/i', $request->q, $match); // cari [[something]]

            $kunci = array_filter($match[1], function ($value) {return $value !== '';});
            // validasi
            $data = [
                'kunci' => $kunci,
            ];
            $validator = Validator::make($data, [
                'kunci' => 'array|min:1',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->messages()], 422);
            }
            // insert data
            $pertanyaan = [
                'q' => $request->q,
                //'q' => preg_replace('/\[\[(.*?)\]\]/i', "[[]]", $request->q),
            ];
            $jawaban = $kunci;
        } else if ($request->type == 5) {
            // type5 essay ezpz
            $pertanyaan = ['q' => $request->q];
            $jawaban = $request->kunci;
        } else {
            return response()->json('tidak tersedia', 422);
        }
        // insert
        $data = Soal::create([
            'user_id' => $this->user->id,
            'type' => $request->type,
            'kode' => $request->kode,
            'pertanyaan' => json_encode($pertanyaan),
            'jawaban' => json_encode($jawaban),
        ]);
        return new JsonResource($data);
    }

    public function show($id)
    {
        $data = Soal::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->firstOrFail();
        return new JsonResource($data);
    }

    public function update(Request $request, $id)
    {
        $soal = Soal::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->firstOrFail();

        // validasi
        $this->validate($request, [
            'type' => 'required',
            'q' => 'required|min:5',
            'aType' => 'required_if:type,1',
        ], $this->errMsg());

        // type 1 pilgan
        if ($request->type == 1) {
            // pertanyaan, pilihan jawaban
            // validasi
            $data = [
                'jawaban' => json_decode($request->jawabans),
                'kunci' => json_decode($request->kunci),
            ];
            $validator = Validator::make($data, [
                'jawaban' => 'array|min:2',
                'jawaban.*' => 'distinct|required',
                'kunci' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->messages()], 422);
            }
            //insert
            $pertanyaan = [
                'type' => $request->aType,
                'q' => $request->q,
                'alist' => json_decode($request->jawabans),
            ];
            // kunci jawaban
            $jawaban = [
                'type' => $request->aType,
                'a' => json_decode($request->kunci),
            ];
        } else if ($request->type == 2) {
            //type2 b/s
            $pertanyaan = ['q' => $request->q];
            $jawaban = $request->kunci == 0 ? false : true;
        } else if ($request->type == 3) {
            //type3 menjodohkan
            // validasi
            $data = [
                'pertanyaan' => json_decode($request->pertanyaans),
                'jawaban' => json_decode($request->jawabans),
                'kunci' => json_decode($request->kunci),
                'pertanyaan_count' => count(json_decode($request->pertanyaans)),
                'jawaban_count' => count(json_decode($request->jawabans)),
                'kunci_count' => count(json_decode($request->kunci)),
            ];
            $validator = Validator::make($data, [
                'pertanyaan' => 'array|min:2',
                'jawaban' => "array|min:${data['pertanyaan_count']}",
                'kunci_count' => 'same:pertanyaan_count',
                'pertanyaan.*' => 'distinct|required',
                'jawaban.*' => 'distinct|required',
                'kunci.*' => 'distinct|required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->messages()], 422);
            }
            //insert
            $pertanyaan = [
                'q' => $request->q,
                'qlist' => json_decode($request->pertanyaans),
                'alist' => json_decode($request->jawabans),
            ];
            $jawaban = json_decode($request->kunci);
        } else if ($request->type == 4) {
            //type4 isian singkat
            // get kunci jawaban
            $request->q = str_replace("[[]]", "", $request->q); // rem [[]] kosong
            preg_match_all('/\[\[(.*?)\]\]/i', $request->q, $match); // cari [[something]]

            $kunci = array_filter($match[1], function ($value) {return $value !== '';});
            // validasi
            $data = [
                'kunci' => $kunci,
            ];
            $validator = Validator::make($data, [
                'kunci' => 'array|min:1',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->messages()], 422);
            }
            // insert data
            $pertanyaan = [
                'q' => $request->q,
                //'q' => preg_replace('/\[\[(.*?)\]\]/i', "[[]]", $request->q),
            ];
            $jawaban = $kunci;
        } else if ($request->type == 5) {
            // type5 essay ezpz
            $pertanyaan = ['q' => $request->q];
            $jawaban = $request->kunci;
        } else {
            return response()->json('tidak tersedia', 422);
        }

        // insert
        $soal->update([
            'kode' => $request->kode,
            'pertanyaan' => json_encode($pertanyaan),
            'jawaban' => json_encode($jawaban),
        ]);

        return new JsonResource($soal);
    }

    public function destroy($id)
    {
        $data = Soal::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->firstOrFail();
        $data->delete();
        return response()->json(null, 204);
    }

    public function soalByKuis($id)
    {
        $data = KuisSoal::with('soal')->where('kuis_id', $id)->get();
        return JsonResource::collection($data);
    }

    private function errMsg()
    {
        return [
            'pertanyaans.required_if' => 'daftar pertanyaan harus diisi',
            'q.required' => 'pertanyaan/perintah harus diisi',
            'kunci.required' => 'kunci jawaban harus diisi',
            'jawabans.required_if' => 'jawaban harus diisi',
            'q.min' => 'pertanyaan minimal :min karakter',

            'required' => ':attribute harus diisi',
            'in' => ':attribute salah',
            'max' => ':attribute maksimal :max karakter',
            'direktori' => 'nama direktori harus diisi',
        ];
    }
}
