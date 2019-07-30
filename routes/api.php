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
    //kuis - soal
    Route::apiResource('kuis', 'Api\KuisController');
    Route::apiResource('soal', 'Api\SoalController');
    Route::apiResource('kuis-soal', 'Api\KuisSoalController');
    Route::get('soal/kuis/{id}', 'Api\SoalController@soalByKuis');
    Route::post('add-soal', 'Api\KuisController@addSoal');
    Route::delete('rem-soal/{id}', 'Api\KuisController@removeSoal');
    // materi-mapel (p)
    Route::post('add-materi', 'Api\MapelController@addMateri');
    Route::delete('rem-materi/{id}', 'Api\MapelController@removeMateri');
    Route::get('materi/mapel/{id}', 'Api\MapelController@materiByMapel');
    // materi-peserta (p)
    Route::get('materi/peserta/{id}', 'Api\MapelController@pesertaByMapel');
    Route::put('mov-siswa', 'Api\MapelController@moveSiswa');
    Route::delete('rem-siswa/{id}', 'Api\MapelController@removeSiswa');
    //materi-kuis
    Route::get('materi/kuis/{id}', 'Api\MapelController@kuisByMapel');
    Route::put('materi/kuis/{id}', 'Api\MapelController@pengaturanKuis');
    Route::put('start-kuis/{id}', 'Api\MapelController@startKuis');
    Route::get('materi/kuis-detail/{id}', 'Api\MapelController@kuisMapelDetail');
    Route::post('add-kuis', 'Api\MapelController@addKuis');
    Route::delete('rem-kuis/{id}', 'Api\MapelController@removeKuis');
    // download file materi
    Route::get('get-materi-file/{type}/{name}', 'Api\MateriController@downloadFile');

    // materi-mapel (s)
    Route::get('materi-siswa/mapel/{id}', 'Api\MapelController@materiByMapelSiswa');
    // materi-kuis (s)
    Route::get('materi-siswa/kuis/{id}', 'Api\MapelController@kuisTersedia');
    // materi (s)
    Route::get('materi-siswa/{id}', 'Api\MateriController@materiSiswaDetail');

    // mengerjakan kuis
    Route::post('mulai-kuis', 'Api\MulaiKuisController@start');
    Route::put('update-jawaban', 'Api\MulaiKuisController@updateJawaban');

    //kuis detail
    Route::get('detail-kuis/{id}', 'Api\HasilController@getDetail');
    Route::get('detail-hasil/{id}', 'Api\HasilController@getDetailHasil');
    Route::put('koreksi/{id}', 'Api\HasilController@koreksiHasil');
    Route::put('publish-hasil/{id}', 'Api\HasilController@publishHasil');

    //hasil kuis siswa
    Route::get('kuis-selesai/{id}', 'Api\HasilController@hasilSiswa');
    Route::get('detail-hasil-siswa/{id}', 'Api\HasilController@getDetailHasilSiswa');

    //kategori
    Route::apiResource('kategori-admin', 'Api\KategoriController');

    //excel
});
Route::get('excel-mapel-siswa/{id}', 'Api\ExportController@excel_siswa_mapel');

Route::get('detail-hasil-test/{id}', 'Api\HasilController@getDetailHasil');

Route::get('get-materi-file-test/{type}/{name}', 'Api\MateriController@downloadFile');

//Route::get('mulai-kuis-test/{mkId}', 'Api\MulaiKuisController@start');
Route::get('testxx', function () {
    $data_jawaban = App\HasilDetail::select('soal_id', 'jawaban')
        ->where([
            'hasil_id' => 24,
        ])->get();

    $jawabans = [];
    foreach ($data_jawaban->toArray() as $val) {
        $jawabans[$val['soal_id']] = $val['jawaban'];
    }

    print_r($jawabans);
});

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
Route::get('kategori', function () {return App\MapelKategori::orderBy('nama')->get();});

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

Route::get('export-test', 'Api\ExportController@export_test');
