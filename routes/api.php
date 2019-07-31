<?php

use Illuminate\Http\Request;

//jwt
Route::group(['middleware' => ['jwt-auth']], function () {
    // mapel
    Route::apiResource('mapel', 'API\MapelController');
    Route::get('mapel-req-list/{id}', 'API\MapelController@getRequest');
    Route::post('mapel-req-process', 'API\MapelController@processRequest');
    // profile
    Route::post('update-profile', 'API\UserController@updateProfile');
    Route::post('update-pp', 'API\UserController@updatePp');
    // mapel siswa
    Route::get('mapel-siswa', 'API\MapelController@siswa');
    Route::get('mapel-detail/{id}', 'API\MapelController@detailAktif');
    Route::post('mapel-action', 'API\MapelController@mapelAction');
    // materi
    Route::apiResource('materi', 'API\MateriController');
    //kuis - soal
    Route::apiResource('kuis', 'API\KuisController');
    Route::apiResource('soal', 'API\SoalController');
    Route::apiResource('kuis-soal', 'API\KuisSoalController');
    Route::get('soal/kuis/{id}', 'API\SoalController@soalByKuis');
    Route::post('add-soal', 'API\KuisController@addSoal');
    Route::delete('rem-soal/{id}', 'API\KuisController@removeSoal');
    // materi-mapel (p)
    Route::post('add-materi', 'API\MapelController@addMateri');
    Route::delete('rem-materi/{id}', 'API\MapelController@removeMateri');
    Route::get('materi/mapel/{id}', 'API\MapelController@materiByMapel');
    // materi-peserta (p)
    Route::get('materi/peserta/{id}', 'API\MapelController@pesertaByMapel');
    Route::put('mov-siswa', 'API\MapelController@moveSiswa');
    Route::delete('rem-siswa/{id}', 'API\MapelController@removeSiswa');
    //materi-kuis
    Route::get('materi/kuis/{id}', 'API\MapelController@kuisByMapel');
    Route::put('materi/kuis/{id}', 'API\MapelController@pengaturanKuis');
    Route::put('start-kuis/{id}', 'API\MapelController@startKuis');
    Route::get('materi/kuis-detail/{id}', 'API\MapelController@kuisMapelDetail');
    Route::post('add-kuis', 'API\MapelController@addKuis');
    Route::delete('rem-kuis/{id}', 'API\MapelController@removeKuis');
    // download file materi
    Route::get('get-materi-file/{type}/{name}', 'API\MateriController@downloadFile');

    // materi-mapel (s)
    Route::get('materi-siswa/mapel/{id}', 'API\MapelController@materiByMapelSiswa');
    // materi-kuis (s)
    Route::get('materi-siswa/kuis/{id}', 'API\MapelController@kuisTersedia');
    // materi (s)
    Route::get('materi-siswa/{id}', 'API\MateriController@materiSiswaDetail');

    // mengerjakan kuis
    Route::post('mulai-kuis', 'API\MulaiKuisController@start');
    Route::put('update-jawaban', 'API\MulaiKuisController@updateJawaban');

    //kuis detail
    Route::get('detail-kuis/{id}', 'API\HasilController@getDetail');
    Route::get('detail-hasil/{id}', 'API\HasilController@getDetailHasil');
    Route::put('koreksi/{id}', 'API\HasilController@koreksiHasil');
    Route::put('publish-hasil/{id}', 'API\HasilController@publishHasil');

    //hasil kuis siswa
    Route::get('kuis-selesai/{id}', 'API\HasilController@hasilSiswa');
    Route::get('detail-hasil-siswa/{id}', 'API\HasilController@getDetailHasilSiswa');

    //kategori
    Route::apiResource('kategori-admin', 'API\KategoriController');

    //excel
});
Route::get('excel-mapel-siswa/{id}', 'API\ExportController@excel_siswa_mapel');

Route::get('detail-hasil-test/{id}', 'API\HasilController@getDetailHasil');

Route::get('get-materi-file-test/{type}/{name}', 'API\MateriController@downloadFile');

//Route::get('mulai-kuis-test/{mkId}', 'API\MulaiKuisController@start');
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

Route::get('export-test', 'API\ExportController@export_test');
