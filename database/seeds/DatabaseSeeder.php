<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        // roles table
        $roles = [
            [ 'id' => 1, 'name' => 'admin', 'desc' => 'admin sistem'],
            [ 'id' => 2, 'name' => 'siswa', 'desc' => 'siswa'],
            [ 'id' => 4, 'name' => 'pengajar', 'desc' => 'pengajar/guru'],
        ];
        DB::table('roles')->insert($roles);

        // menus table
        $menus = [
            0 => [
              'id' => '2',
              'name' => 'testadmin',
              'path' => 'testadmin',
              'component' => 'TestAdmin',
              'desc' => '-',
              'order' => '1',
              'parent' => '17',
              'icon' => NULL,
              'apiendpoints' => NULL,
              'paths' => '[]',
            ],
            1 => [
              'id' => '3',
              'name' => 'testadmindua',
              'path' => 'testadmin2',
              'component' => 'TestAdmin2',
              'desc' => '1',
              'order' => '2',
              'parent' => '17',
              'icon' => NULL,
              'apiendpoints' => NULL,
              'paths' => '[]',
            ],
            2 => [
              'id' => '4',
              'name' => 'testsiswa',
              'path' => 'testsiswa',
              'component' => 'TestSiswa',
              'desc' => '-',
              'order' => '1',
              'parent' => NULL,
              'icon' => NULL,
              'apiendpoints' => NULL,
              'paths' => '[]',
            ],
            3 => [
              'id' => '8',
              'name' => 'All',
              'path' => 'all',
              'component' => 'All',
              'desc' => '-',
              'order' => '2',
              'parent' => NULL,
              'icon' => NULL,
              'apiendpoints' => NULL,
              'paths' => '[]',
            ],
            4 => [
              'id' => '17',
              'name' => 'Admin',
              'path' => '#',
              'component' => NULL,
              'desc' => '-',
              'order' => '1',
              'parent' => NULL,
              'icon' => NULL,
              'apiendpoints' => NULL,
              'paths' => '[]',
            ],
            5 => [
              'id' => '43',
              'name' => 'Pengajar',
              'path' => '#',
              'component' => '',
              'desc' => '-',
              'order' => '1',
              'parent' => NULL,
              'icon' => 'fa-graduation-cap',
              'apiendpoints' => NULL,
              'paths' => '[]',
            ],
            6 => [
              'id' => '50',
              'name' => 'Mata Pelajaran',
              'path' => 'mapel',
              'component' => 'Mapel',
              'desc' => 'pengelolaan mata pelajaran (pengajar)',
              'order' => '1',
              'parent' => '43',
              'icon' => NULL,
              'apiendpoints' => '["mapel","mapel-req-list","mapel-req-process","mov-siswa","rem-siswa","get-materi-file","add-materi","rem-materi","add-kuis","rem-kuis","start-kuis", "detail-kuis","detail-hasil","koreksi","publish-hasil"]',
              'paths' => '[{"path": "mapel/:mapelId", "component": "MapelSetting"}, {"path": "mapel/:mapelId/:materiId", "component": "ViewMateri"}, {"path": "hasil-kuis/:dataId", "component": "KuisHasil"}]',
            ],
            7 => [
              'id' => '59',
              'name' => 'Profile',
              'path' => 'profile',
              'component' => 'Profile',
              'desc' => '-',
              'order' => '1',
              'parent' => NULL,
              'icon' => 'fa-user',
              'apiendpoints' => '["update-profile", "update-pp"]',
              'paths' => '[]',
            ],
            8 => [
              'id' => '68',
              'name' => 'Mata Pelajaran',
              'path' => 'mapel_siswa',
              'component' => 'MapelSiswa',
              'desc' => 'browse mapel',
              'order' => '1',
              'parent' => NULL,
              'icon' => 'fa-book',
              'apiendpoints' => '["mapel-siswa","mapel-detail","mapel-action", "materi-siswa", "mulai-kuis", "update-jawaban", "selesai-kuis", "kuis-selesai", "detail-hasil-siswa"]',
              'paths' => '[{"path": "mapel_siswa/:mapelId", "component": "MapelSiswaDetail"},{"path": "mapel_siswa/:mapelId/:materiId", "component": "ViewMateri"}, {"path": "kuis_siswa", "component": "KuisSiswa"}, {"path": "mulai-kuis/:kuisId", "component": "MulaiKuis"}]',
            ],
            9 => [
              'id' => '78',
              'name' => 'Kelola Materi',
              'path' => 'materi',
              'component' => 'Materi',
              'desc' => 'pengelolaan materi pelajaran',
              'order' => '2',
              'parent' => '43',
              'icon' => NULL,
              'apiendpoints' => '["materi"]',
              'paths' => '[{"path": "materi/mapel/:materiId/:dirId", "component": "Materi"}]',
            ],
            10 => [
              'id' => '79',
              'name' => 'Kelola Kuis',
              'path' => 'kuis',
              'component' => 'Kuis',
              'desc' => 'pengelolaan kuis',
              'order' => '3',
              'parent' => '43',
              'icon' => '',
              'apiendpoints' => '["kuis","soal","kuis-soal","soal-pertanyaan", "add-soal", "rem-soal"]',
              'paths' => '[]',
            ],
            11 => [
              'id' => '80',
              'name' => 'Kelola Kategori',
              'path' => 'kategori',
              'component' => 'Kategori',
              'desc' => 'pengelolaan kuis',
              'order' => '1',
              'parent' => NULL,
              'icon' => 'fa-list',
              'apiendpoints' => '["kategori-admin"]',
              'paths' => '[]',
            ],
        ];
        DB::table('menus')->insert($menus);

        // menu_role table
        $menu_role =  [
            0 => [
              'role' => 1,
              'menu' => 80,
            ],
            1 => [
              'role' => 1,
              'menu' => 3,
            ],
            2 => [
              'role' => 1,
              'menu' => 8,
            ],
            3 => [
              'role' => 1,
              'menu' => 17,
            ],
            4 => [
              'role' => 1,
              'menu' => 59,
            ],
            5 => [
              'role' => 1,
              'menu' => 2,
            ],
            6 => [
              'role' => 2,
              'menu' => 68,
            ],
            7 => [
              'role' => 2,
              'menu' => 59,
            ],
            8 => [
              'role' => 4,
              'menu' => 59,
            ],
            9 => [
              'role' => 4,
              'menu' => 79,
            ],
            10 => [
              'role' => 4,
              'menu' => 78,
            ],
            11 => [
              'role' => 4,
              'menu' => 43,
            ],
            12 => [
              'role' => 4,
              'menu' => 50,
            ],
        ];
        DB::table('menu_role')->insert($menu_role);

        // mapel_kategori table
        $mapel_kategori = [
            0 => [
              'id' => 1,
              'nama' => 'Umum',
            ],
            1 => [
              'id' => 3,
              'nama' => 'Manajemen',
            ],
            2 => [
              'id' => 2,
              'nama' => 'Pemrograman',
            ],
            3 => [
              'id' => 20,
              'nama' => 'Coba',
            ],
            4 => [
              'id' => 22,
              'nama' => 'Kategori baru',
            ],
            5 => [
              'id' => 23,
              'nama' => 'Jaringan Komputer',
            ],
            6 => [
              'id' => 24,
              'nama' => 'Databas',
            ],
            7 => [
              'id' => 25,
              'nama' => 'Bahasa',
            ],
        ];
        DB::table('mapel_kategori')->insert($mapel_kategori);          

    }
}
