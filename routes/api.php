<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::group(['middleware' => ['jwt.auth', 'api-header']], function () {
//all routes to protected resources are registered here
//    Route::get('usesrs/list', function () {
//        $users = App\User::all();
//        $response = ['success' => true, 'data' => $users];
//        return response()->json($response, 201);
//    });
//});

//Route::group(['middleware' => 'api-header'], function () {
// The registration and login requests doesn't come with tokens
// as users at that point have not been authenticated yet
// Therefore the jwtMiddleware will be exclusive of them
//Route::post('user/login', 'UserController@login');
//Route::post('user/register', 'UserController@register');
//});

Route::get('/tesdata', function () {
    $data = App\RoleMenu::with(['role', 'menu'])
        ->where('role', 1)
        ->get();
    return $data;
});

Route::post('user/register', 'AuthController@register');
Route::post('user/login', 'AuthController@login');

Route::apiResource('tesres', 'TabelTesController');

// menus
Route::get('app/menus', function () {
    //sleep(5);
    return App\Menu::with(['roles' => function ($query) {
        $query->get(['id']);
    }])->get();
});
