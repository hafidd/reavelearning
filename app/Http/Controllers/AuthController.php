<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // validasi
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'type' => 'required|in:siswa,pengajar',
            'password' => 'required',
        ]);
        $role = $request->type == 'siswa' ? '2' : '4';
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $role,
            'password' => bcrypt($request->password),
        ]);

        return response()->json('akun berhasil dibuat. silahkan login', '201');

        //$token = auth()->login($user);

        //return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return $this->respondWithToken($token, null, true);
        }
        $user = User::select('id', 'name', 'email', 'jk')->where('email', $request->email)->first();
        return $this->respondWithToken($token, $user);
    }

    public function logout()
    {
        auth()->logout();
    }

    protected function respondWithToken($token, $user, $err = false)
    {
        return response()->json([
            'access_token' => $token,
            'user' => $user,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'err' => $err,
        ]);
    }
}
