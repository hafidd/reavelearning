<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = auth()->login($user);

        return $this->respondWithToken($token);
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
