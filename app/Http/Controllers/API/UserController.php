<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Image;
use JWTAuth;

class UserController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function updateProfile(Request $request)
    {
        $data = User::findOrFail($this->user->id);
        // cek password
        if ($data && !\Hash::check($request->password, $data->password)) {
            return response()->json(['error' => 'password salah'], 401);
        }
        // validasi
        $rules = [
            'name' => 'required|max:100',
            'email' => 'required|email|unique:users,email,' . $this->user->id,
            'jk' => 'required|in:l,p',
            'password_baru' => 'nullable|min:6|confirmed',
        ];
        $this->validate($request, $rules, $this->errMsg());
        // update
        if (!empty($request->password_baru)) {
            $update_data = $request->only(['name', 'jk', 'email']);
            $update_data['password'] = \Hash::make($request->password_baru);
            $data->update($update_data);
        }
        $data->update($request->only(['name', 'jk', 'email']));
        return new UserResource($data);
    }

    public function updatePp(Request $request)
    {
        $data = User::findOrFail($this->user->id);

        $this->validate($request, ['img' => 'required|image64:jpg,jpeg,png'], $this->errMsg());

        $imageName = $this->user->id . '.jpg';
        Image::make($request->img)
            ->resize(300, 300)
            ->encode('jpg', 100)
            ->save(public_path('images/users/') . $imageName);
            
        return response()->json(['message' => 'foto berhasil diperbaharui'], 200);

        //$data->update();
        //return new UserResource($data);
    }

    private function errMsg()
    {
        return [
            'required' => ':attribute harus diisi',
            'in' => ':attribute salah',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maksimal :max karakter',
            'confirmed' => 'Konfirmasi password baru salah',
            'unique' => ':attribute sudah digunakan',
        ];
    }
}
