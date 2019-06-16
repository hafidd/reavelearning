<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use JWTAuthException;

class UserController extends Controller
{
    private function getToken($email, $password)
    {
        $token = null;
        try {
            if (!($token = JWTAuth::attempt(['email' => $email, 'password' => $password]))) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Email atau password salah',
                    'token' => $token,
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token error',
            ]);
        }
        return $token;
    }

    public function login(Request $request)
    {
        //return response()->json('err', 500);
        $user = \App\User::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) {
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = [
                'success' => true,
                'data' => [
                    'user' => $user,
                    'auth_token' => $user->auth_token,
                ],
            ];
        } else {
            $response = ['success' => false, 'data' => 'Emaixl atau password tidak terdaftar'];
        }
        return response()->json($response, 201);
    }

    public function register(Request $request)
    {
        $payload = [
            'password' => \Hash::make($request->password),
            'email' => $request->email,
            'name' => $request->name,
            'auth_token' => '',
        ];
        $user = new \App\User($payload);
        if ($user->save()) {
            $token = self::getToken($request->email, $request->password);
            if (!is_string($token)) {
                return response()->json(['succes' => false, 'data' => 'Generate token gagal ' . $token], 201);
            }

            $user = \App\User::where('email', $request->email)->get()->first();
            $user->auth_token = $token;
            $user->save();
            $response = [
                'success' => true,
                'data' => [
                    'name' => $user->name,
                    'id' => $user->id,
                    'email' => $request->email,
                    'auth_token' => $token,
                ],
            ];
        } else {
            $response = ['success' => false, 'data' => 'Registrasi gagal'];
        }
        return response()->json($response, 201);
    }

    public function logout()
    {

        return response()->json('x', 500);
    }
}
