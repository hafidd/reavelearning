INSERT INTO "roles" ("id", "name", "desc") VALUES (1, E'admin', E'admin sistem');
INSERT INTO "roles" ("id", "name", "desc") VALUES (2, E'siswa', E'siswa');
INSERT INTO "roles" ("id", "name", "desc") VALUES (4, E'pengajar', E'pengajar');

INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (2, E'testadmin', E'testadmin', E'TestAdmin', E'-', 1, 17, NULL, NULL, E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (3, E'testadmindua', E'testadmin2', E'TestAdmin2', E'1', 2, 17, NULL, NULL, E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (4, E'testsiswa', E'testsiswa', E'TestSiswa', E'-', 1, NULL, NULL, NULL, E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (8, E'All', E'all', E'All', E'-', 2, NULL, NULL, NULL, E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (17, E'Admin', E'#', NULL, E'-', 1, NULL, NULL, NULL, E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (43, E'Pengajar', E'#', E'', E'-', 1, NULL, E'fa-graduation-cap', NULL, E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (50, E'Mata Pelajaran', E'mapel', E'Mapel', E'pengelolaan mata pelajaran (pengajar)', 1, 43, NULL, E'["mapel","mapel-req-list","mapel-req-process","mov-siswa","rem-siswa","get-materi-file","add-materi","rem-materi","add-kuis","rem-kuis","start-kuis", "detail-kuis","detail-hasil","koreksi","publish-hasil"]', E'[{"path": "mapel/:mapelId", "component": "MapelSetting"}, {"path": "mapel/:mapelId/:materiId", "component": "ViewMateri"}, {"path": "hasil-kuis/:dataId", "component": "KuisHasil"}]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (59, E'Profile', E'profile', E'Profile', E'-', 1, NULL, E'fa-user', E'["update-profile", "update-pp"]', E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (68, E'Mata Pelajaran', E'mapel_siswa', E'MapelSiswa', E'browse mapel', 1, NULL, E'fa-book', E'["mapel-siswa","mapel-detail","mapel-action", "materi-siswa", "mulai-kuis", "update-jawaban", "selesai-kuis", "kuis-selesai", "detail-hasil-siswa"]', E'[{"path": "mapel_siswa/:mapelId", "component": "MapelSiswaDetail"},{"path": "mapel_siswa/:mapelId/:materiId", "component": "ViewMateri"}, {"path": "kuis_siswa", "component": "KuisSiswa"}, {"path": "mulai-kuis/:kuisId", "component": "MulaiKuis"}]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (78, E'Kelola Materi', E'materi', E'Materi', E'pengelolaan materi pelajaran', 2, 43, NULL, E'["materi"]', E'[{"path": "materi/mapel/:materiId/:dirId", "component": "Materi"}]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (79, E'Kelola Kuis', E'kuis', E'Kuis', E'pengelolaan kuis', 3, 43, E'', E'["kuis","soal","kuis-soal","soal-pertanyaan", "add-soal", "rem-soal"]', E'[]');
INSERT INTO "menus" ("id", "name", "path", "component", "desc", "order", "parent", "icon", "apiendpoints", "paths") VALUES (80, E'Kelola Kategori', E'kategori', E'Kategori', E'pengelolaan kuis', 1, NULL, E'fa-list', E'["kategori-admin"]', E'[]');

INSERT INTO "menu_role" ("role", "menu") VALUES (1, 80);
INSERT INTO "menu_role" ("role", "menu") VALUES (1, 3);
INSERT INTO "menu_role" ("role", "menu") VALUES (1, 8);
INSERT INTO "menu_role" ("role", "menu") VALUES (1, 17);
INSERT INTO "menu_role" ("role", "menu") VALUES (1, 59);
INSERT INTO "menu_role" ("role", "menu") VALUES (1, 2);
INSERT INTO "menu_role" ("role", "menu") VALUES (2, 68);
INSERT INTO "menu_role" ("role", "menu") VALUES (2, 59);
INSERT INTO "menu_role" ("role", "menu") VALUES (4, 59);
INSERT INTO "menu_role" ("role", "menu") VALUES (4, 79);
INSERT INTO "menu_role" ("role", "menu") VALUES (4, 78);
INSERT INTO "menu_role" ("role", "menu") VALUES (4, 43);
INSERT INTO "menu_role" ("role", "menu") VALUES (4, 50);


INSERT INTO "mapel_kategori" ("id", "nama") VALUES (1, E'Umum');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (3, E'Manajemen');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (2, E'Pemrograman');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (20, E'Coba');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (22, E'Kategori baru');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (23, E'Jaringan Komputer');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (24, E'Database');
INSERT INTO "mapel_kategori" ("id", "nama") VALUES (25, E'Bahasa');




