<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Kuis;
use App\KuisSoal;
////use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
//use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Storage;
use JWTAuth;

class KuisSoalController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = KuisSoal::with('kuis');
        return JsonResource::collection($data);
    }

    public function store(Request $request)
    {
        // validasi
        $this->validate($request, [
            'judul' => 'required|min:3|max:100',
            'kode' => 'max:20',
        ], $this->errMsg());
        // insert
        $data = Kuis::create([
            'user_id' => $this->user->id,
            'judul' => $request->judul,
            'kode' => $request->kode,
            'keterangan' => $request->keterangan,
        ]);
        return new JsonResource($data);
    }

    public function show($id)
    {
        $data = KuisSoal::with(['kuis' => function ($q) {
            $q->where('user_id', $this->user->id);
        }])->findOrFail($id);
        return new JsonResource($data);
    }

    public function update(Request $request, $id)
    {
        $data = KuisSoal::with(['kuis' => function ($q) {
            $q->where('user_id', $this->user->id);
        }])->findOrFail($id);

        // validasi 1
        $this->validate($request, [
            'type' => 'required|in:1,2',
            'nama' => 'required_if:type,1',
            'settings.bobot' => 'required|integer',
        ], $this->errMsg());

        // type
        if ($request->type == 1) {
            $settings = [
                'keterangan' => isset($request->settings['keterangan']) ? $request->settings['keterangan'] : '',
                'bobotPerSoal' => isset($request->settings['bobotPerSoal']) ? $request->settings['bobotPerSoal'] : false,
                'acakSoal' => isset($request->settings['acakSoal']) ? $request->settings['acakSoal'] : false,
                'bobot' => $request->settings['bobot'],
            ];
        } else {
            $settings = [
                'bobot' => $request->settings['bobot'],
            ];
        }
        // update
        $data->update([
            'nama' => $request->nama,
            'settings' => json_encode($settings),
        ]);
        return new JsonResource($data);
    }

    public function destroy($id)
    {
        $data = Kuis::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->firstOrFail();
        $data->delete();
        return response()->json(null, 204);
    }

    // tambah soal ke kuis
    public function addSoal(Request $request)
    {
        //validasi
        $this->validate($request, [
            'type' => 'required|in:1,2',
            'kuis_id' => 'required',
        ], $this->errMsg());
        $this->validate($request, ['soals' => 'required_if:type,2'], ['required_if' => 'soal belum dipilih']);
        $this->validate($request, ['dirName' => 'required_if:type,1'], ['required_if' => 'nama direktori harus diisi']);

        $insert = [
            'type' => $request->type,
            'kuis_id' => $request->kuis_id,
            'parent' => $request->parent == 0 ? null : $request->parent,
        ];

        // type
        if ($request->type == "1") {
            $insert["nama"] = $request->dirName;
            $data = KuisSoal::create($insert);
            return new JsonResource($data);
        } else {
            try {
                $records = [];
                foreach ($request->soals as $soal) {
                    $insert["soal_id"] = $soal;
                    array_push($records, $insert);
                }
                foreach ($records as $record) {
                    KuisSoal::firstOrCreate($record);
                }
                return response()->json('sukses', 201);
            } catch (Exception $e) {
                return response()->json('gagal menambahkan', 500);
            }
        }
    }

    // hapus soal dari kuis
    public function removeSoal($id)
    {
        $data = KuisSoal::with(['kuis' => function ($q) {
            $q->where('user_id', $this->user->id)->get();
        }])->withCount('childs')->where('id', $id)->firstOrFail();
        if ($data->childs_count > 0) {
            return response()->json('ono isine', 422);
        }
        $data->delete();
        return response()->json(null, 204);
    }

    private function errMsg()
    {
        return [
            'required' => ':attribute harus diisi',
            'in' => ':attribute salah',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maksimal :max karakter',
            'direktori' => 'nama direktori harus diisi',
        ];
    }
}
