<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\MapelKategori;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JWTAuth;

class KategoriController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = MapelKategori::withCount('mapel')->orderBy('nama');
        $data = $data->paginate(100);
        return JsonResource::collection($data);
    }

    public function show($id)
    {
        $data = MapelKategori::findOrFail($id);
        return new JsonResource($data);
    }

    public function store(Request $request)
    {
        // validasi
        $this->validate($request, [
            'nama' => 'required|max:50|unique:mapel_kategori',
        ], $this->errMsg());
        // insert
        $data = MapelKategori::create([
            'nama' => $request->nama,
        ]);
        return new JsonResource($data);
    }

    public function update(Request $request, $id)
    {
        $data = MapelKategori::findOrFail($id);
        // validasi
        $this->validate($request, [
            'nama' => 'required|max:50|unique:mapel_kategori,nama,' . $data->id,
        ], $this->errMsg());
        // update
        $data->update($request->only(['nama']));
        return new JsonResource($data);
    }

    public function destroy($id)
    {
        $data = MapelKategori::findOrFail($id);
        $data->delete();
        return response()->json(null, 204);
    }

    private function errMsg()
    {
        return [
            'required' => ':attribute harus diisi',             
            'unique' => 'nama sudah digunakan',             
        ];
    }
}
