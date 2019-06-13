<?php
namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Support\Facades\DB;
use JWTAuth;

class jwtMiddleware
{
    public function handle($request, Closure $next)
    {
        //return response()->json(['error' => 'unauthorized '], 500);
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['error' => 'ding dong your token is wrong'], 401);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(['error' => 'Token is Expired'], 401);
            } else {
                return response()->json(['error' => 'no token no party'], 401);
            }
        }
        $path = '/' . explode('/', $request->getPathInfo())[2];
        // get roles by path
        $roles = DB::table('menu_role')
            ->join('menus', 'menus.id', '=', 'menu')
            ->join('roles', 'roles.id', '=', 'role')
            ->select('role')
            ->where('path', '=', $path)
            ->pluck('role')
            ->toArray();
        // cek
        if (in_array($user->role, $roles)) {
            return $next($request);
        }
        return response()->json(['error' => 'unauthorized '], 401);
    }
}
