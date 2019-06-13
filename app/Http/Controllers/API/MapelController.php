<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MapelResource;
use App\Mapel;
use Illuminate\Http\Request;
use JWTAuth;

class MapelController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = Mapel::with('kategori')->where('user_id', $this->user->id);
        // filter
        $data = $request->nama ? $data->where('nama', 'ilike', '%' . $request->nama . '%') : $data;
        $data = $request->kode ? $data->whereRaw("UPPER(kode) = '" . strtoupper($request->kode) . "'") : $data;
        $data = $request->kategori_id ? $data->where('kategori_id', $request->kategori_id) : $data;
        $data = $request->status ? $data->where('status', $request->status) : $data;
        $data = $request->akses ? $data->where('akses', $request->akses) : $data;
        //$data = $data->where('akses', 'x');

        $data = $data->paginate(10);
        return MapelResource::collection($data);
    }

    public function show($id)
    {
        $data = Mapel::with('kategori')
            ->where([
                'id' => $id,
                'user_id' => $this->user->id,
            ])->first();
        return new MapelResource($data);
    }

    public function store(Request $request)
    {
        // validasi
        $this->validate($request, [
            'nama' => 'required|min:5|max:100',
            'kode' => 'max:50',
            'kategori_id' => 'required',
            'akses' => 'required|in:public,private',
            'status' => 'required|in:aktif,nonaktif',
        ], $this->errMsg());
        // insert
        $data = Mapel::create([
            'user_id' => $this->user->id,
            'kategori_id' => $request->kategori_id,
            'nama' => $request->nama,
            'kode' => $request->kode,
            'status' => $request->status,
            'akses' => $request->akses,
            'keterangan' => $request->keterangan,
        ]);

        return new MapelResource($data);
    }

    public function update(Request $request, $id)
    {
        $data = Mapel::findOrFail($id);
        // cek user
        if ($this->user->id !== $data->user_id) {
            return response()->json(['error' => '403'], 403);
        }
        // validasi
        $this->validate($request, [
            'nama' => 'required|min:5|max:100',
            'kode' => 'max:50',
            'kategori_id' => 'required',
            'akses' => 'required|in:public,private',
            'status' => 'required|in:aktif,nonaktif',
        ], $this->errMsg());
        // update
        $data->update($request->only(['nama', 'kategori_id', 'kode', 'status', 'akses', 'keterangan']));

        return new MapelResource($data);
    }

    public function destroy($id)
    {
        $data = Mapel::findOrFail($id);
        // cek user
        if ($this->user->id !== $data->user_id) {
            return response()->json(['error' => '403'], 403);
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
        ];
    }
}
