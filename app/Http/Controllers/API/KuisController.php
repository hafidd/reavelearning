<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Kuis;
//use App\Soal;
//use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
//use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Storage;
use JWTAuth;

class KuisController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = Kuis::where('user_id', $this->user->id);
        //$data = $request->type === "waiting" ? $data->whereHas("waitings")->withCount('waitings') : $data;
        // filter
        $data = $request->judul ? $data->where('judul', 'ilike', '%' . $request->judul . '%') : $data;
        $data = $request->kode ? $data->where('kode', 'ilike', '%' . $request->kode . '%') : $data;
//        $data = $request->kode ? $data->whereRaw("UPPER(kode) = '" . strtoupper($request->kode) . "'") : $data;
        $data = $data->paginate(15);
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
        $data = Kuis::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->firstOrFail();
        return new JsonResource($data);
    }

    public function update(Request $request, $id)
    {
        $data = Kuis::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->firstOrFail();
        // validasi
        $this->validate($request, [
            'judul' => 'required|min:3|max:100',
            'kode' => 'max:20',
        ], $this->errMsg());
        // update
        $data->update([
            'judul' => $request->judul,
            'kode' => $request->kode,
            'keterangan' => $request->keterangan,
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
