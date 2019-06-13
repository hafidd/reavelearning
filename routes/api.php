<?php

use Illuminate\Http\Request;

//jwt
Route::group(['middleware' => ['jwt-auth']], function () {
    // mapel
    Route::apiResource('mapel', 'Api\MapelController');
});

// kategori
Route::get('kategori', function () {return App\MapelKategori::get();});

// uer
Route::post('user/register', 'AuthController@register');
Route::post('user/login', 'AuthController@login');
Route::get('user/logout', 'AuthController@logout');

// menus
Route::get('app/menus', function () {
    //sleep(5);
    return App\Menu::with(['roles' => function ($query) {
        $query->get(['id']);
    }])->orderBy('order', 'asc')->orderBy('name', 'asc')->get();
});

Route::apiResource('tesres', 'TabelTesController');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
