<?php

use Illuminate\Http\Request;

//jwt
Route::group(['middleware' => ['jwt-auth']], function () {
    // mapel
    Route::apiResource('mapel', 'Api\MapelController');
    Route::get('mapel-req-list/{id}', 'Api\MapelController@getRequest');
    Route::post('mapel-req-process', 'Api\MapelController@processRequest');
    // profile
    Route::post('update-profile', 'API\UserController@updateProfile');
    Route::post('update-pp', 'API\UserController@updatePp');
    // mapel siswa
    Route::get('mapel-siswa', 'Api\MapelController@siswa');
    Route::get('mapel-detail/{id}', 'Api\MapelController@detailAktif');
    Route::post('mapel-action', 'Api\MapelController@mapelAction');
    // materi
    Route::apiResource('materi', 'Api\MateriController');
    // materi-mapel (p)
    Route::post('add-materi', 'Api\MapelController@addMateri');
    Route::delete('rem-materi/{id}', 'Api\MapelController@removeMateri');
    Route::get('materi/mapel/{id}', 'Api\MapelController@materiByMapel');
    // materi-peserta (p)
    Route::get('materi/peserta/{id}', 'Api\MapelController@pesertaByMapel');
    // download file materi
    Route::get('get-materi-file/{type}/{name}', 'Api\MateriController@downloadFile');
});
Route::get('get-materi-file-test/{type}/{name}', 'Api\MateriController@downloadFile');

Route::get('phpinfo', function () {
    $inipath = php_ini_loaded_file();
    if ($inipath) {
        echo 'Loaded php.ini: ' . $inipath;
    } else {
        echo 'A php.ini file is not loaded';
    }
    //dd(phpinfo()); exit;
});

Route::get('insert-test-materi', function () {
    /*
    App\Materi::insert([
    [
    'user_id' => 20,
    'kode' => 'MTKD0123', 'judul' => 'Materi insert test 1',
    'isi' => json_encode([
    'type' => 'text',
    'isi' => 'Ngetes tes pertama',
    ]),
    ],
    [
    'user_id' => 20,
    'kode' => 'MTKF0111', 'judul' => 'Ini contoh pdf',
    'isi' => json_encode([
    'type' => 'file',
    'ext' => 'pdf',
    'name' => 'contoh_pdf',
    ]),
    ],
    [
    'user_id' => 20,
    'kode' => 'MTKD0125', 'judul' => 'Materi insert test 2',
    'isi' => json_encode([
    'type' => 'text',
    'isi' => 'Ngetes tes kedua',
    ]),
    ],
    ]);
     */
    return App\Materi::get();
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
