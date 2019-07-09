<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MapelResource;
use App\Mapel;
use App\MapelKuis;
use App\MapelMateri;
use App\MapelUser;
use App\MapelUserLog;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Validator;

class MapelController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = Mapel::with('kategori')->where('user_id', $this->user->id);
        //
        $data = $request->type === "waiting" ? $data->whereHas("waitings")->withCount('waitings') : $data;
        // filter
        $data = $request->nama ? $data->where('nama', 'ilike', '%' . $request->nama . '%') : $data;
        $data = $request->kode ? $data->whereRaw("UPPER(kode) = '" . strtoupper($request->kode) . "'") : $data;
        $data = $request->kategori_id ? $data->where('kategori_id', $request->kategori_id) : $data;
        $data = $request->status ? $data->where('status', $request->status) : $data;
        $data = $request->akses ? $data->where('akses', $request->akses) : $data;
        $data = $data->paginate(10);
        return MapelResource::collection($data);
    }

    public function show($id)
    {
        $data = Mapel::with('kategori')
            ->where([
                'id' => $id,
                'user_id' => $this->user->id,
            ])->first();
        return new MapelResource($data);
    }

    public function store(Request $request)
    {
        // validasi
        $this->validate($request, [
            'nama' => 'required|min:5|max:100',
            'kode' => 'max:50',
            'kategori_id' => 'required',
            'akses' => 'required|in:public,private',
            'status' => 'required|in:aktif,nonaktif',
        ], $this->errMsg());
        // validasi kelompok
        $groups = ['groups' => json_decode($request->groups, true)];
        $validator = Validator::make($groups, [
            'groups.*.nama' => 'distinct|required',
            'groups.*.kode' => 'distinct',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }
        // insert
        $data = Mapel::create([
            'user_id' => $this->user->id,
            'kategori_id' => $request->kategori_id,
            'nama' => $request->nama,
            'kode' => $request->kode,
            'status' => $request->status,
            'akses' => $request->akses,
            'keterangan' => $request->keterangan,
            'groups' => $request->groups,
        ]);

        return new MapelResource($data);
    }

    public function update(Request $request, $id)
    {
        //print_r($request->only(['nama', 'kategori_id', 'kode', 'status', 'akses', 'keterangan', 'groups']));
        //exit;
        $data = Mapel::findOrFail($id);
        // cek user
        if ($this->user->id !== $data->user_id) {
            return response()->json(['error' => '403'], 403);
        }
        // validasi
        $this->validate($request, [
            'nama' => 'required|min:5|max:100',
            'kode' => 'max:50',
            'kategori_id' => 'required',
            'akses' => 'required|in:public,private',
            'status' => 'required|in:aktif,nonaktif',
        ], $this->errMsg());
        // update
        $data->update($request->only(['nama', 'kategori_id', 'kode', 'status', 'akses', 'keterangan', 'groups']));

        return new MapelResource($data);
    }

    public function destroy($id)
    {
        $data = Mapel::findOrFail($id);
        // cek user
        if ($this->user->id !== $data->user_id) {
            return response()->json(['error' => '403'], 403);
        }
        $data->delete();
        return response()->json(null, 204);
    }

    public function getRequest($id)
    {
        $siswa = MapelUserLog::with(['user' => function ($q) {
            $q->select('id', 'name');
        }])
            ->where(['mapel_id' => $id, 'action' => 1, 'status' => 1])
            ->get();
        return new JsonResource($siswa);
    }

    public function processRequest(Request $request)
    {
        //transaction
        DB::beginTransaction();
        try {
            //updatelogs
            $users = [];
            foreach ($request->selectedUsers as $user) {
                array_push($users, explode("|", $user)[0]);
            }
            MapelUserLog::where([
                'mapel_id' => $request->mapel_id,
                'action' => 1,
                'status' => 1,
            ])->whereIn('user_id', $users)
                ->update(['status' => 0]);

            //newlogs
            $log_records = [];
            foreach ($request->selectedUsers as $user) {
                array_push($log_records, [
                    'user_id' => explode("|", $user)[0],
                    'mapel_id' => $request->mapel_id,
                    'group' => explode("|", $user)[1] === 'null' ? null : explode("|", $user)[1],
                    'time' => Carbon::now()->toDateTimeString(),
                    'action' => $request->action === 'terima' ? 2 : 5, // diterima/ditolak
                ]);
            }
            MapelUserLog::insert($log_records);

            //insert jika diterima
            if ($request->action === 'terima') {
                $records = [];
                foreach ($request->selectedUsers as $user) {
                    array_push($records, [
                        'user_id' => explode("|", $user)[0],
                        'mapel_id' => $request->mapel_id,
                        'group' => explode("|", $user)[1] === 'null' ? null : explode("|", $user)[1],
                    ]);
                }
                MapelUser::insert($records);
            }
            //commit
            DB::commit();
            return response()->json(null, 201);
        } catch (\Exception $e) {
            //rollback
            DB::rollback();
            return response()->json(null, 500);
        }
    }

    public function siswa(Request $request)
    {
        $data = Mapel::with([
            'kategori',
            'user',
        ]);
        // type
        if ($request->type === 'waiting') {
            $data = $data->whereHas('waitings', function ($query) {
                $query->where('user_id', $this->user->id);
            })->whereDoesntHave('joinedUsers', function ($query) {
                $query->where('user_id', $this->user->id);
            });
        } else if ($request->type === 'joined') {
            $data = $data->whereHas('joinedUsers', function ($query) {
                $query->where('user_id', $this->user->id);
            });
        } else {
            $data = $data->whereDoesntHave('waitings', function ($query) {
                $query->where('user_id', $this->user->id);
            })->whereDoesntHave('joinedUsers', function ($query) {
                $query->where('user_id', $this->user->id);
            });
        }
        // filter
        $data = $request->nama ? $data->where('nama', 'ilike', '%' . $request->nama . '%') : $data;
        $data = $request->kode ? $data->whereRaw("UPPER(kode) = '" . strtoupper($request->kode) . "'") : $data;
        $data = $request->kategori_id ? $data->where('kategori_id', $request->kategori_id) : $data;
        $data = $data->where('status', 'aktif');
        $data = $data->paginate(10);
        return MapelResource::collection($data);
    }

    public function detailAktif($id)
    {
        $data = Mapel::with([
            'kategori', 'user',
            'waiting' => function ($q) {$q->select('mapel_id', 'group')->where('user_id', $this->user->id)->get();},
            'joinedUser' => function ($q) {$q->select('mapel_id', 'group')->where('user_id', $this->user->id)->get();},
        ])
        //->whereHas('waiting', function ($query) {$query->where('user_id', $this->user->id);
        //})->orWhereHas('joinedUser', function ($query) {$query->where('user_id', $this->user->id);
        //})
            ->where(['id' => $id, 'status' => 'aktif'])->firstOrFail();
        return new MapelResource($data);
    }

    public function mapelAction(Request $request)
    {
        // get mapel data
        $mapel = Mapel::findOrFail($request->mapel_id); // gagal = return 404
        // validasi
        $this->validate($request, [
            'group' => 'max:50',
            'mapel_id' => 'required',
        ], $this->errMsg());

        if ($request->action === "waiting") {
            // batalkan
            $mapel_request = MapelUserLog::where([
                'mapel_id' => $mapel->id,
                'user_id' => $this->user->id,
                'action' => 1,
            ])->firstOrFail();
            $mapel_request->delete();
            return response()->json(null, 200);
        } else if ($request->action === "joined") {
            // keluar
            DB::transaction(function () use ($mapel, $request) {
                $mapel_user = MapelUser::where([
                    'mapel_id' => $mapel->id,
                    'user_id' => $this->user->id,
                ])->firstOrFail();
                $mapel_user->delete();
                //update log
                MapelUserLog::where([
                    'user_id' => $this->user->id,
                    'mapel_id' => $mapel->id])->update(['status' => 0]);
                //newlog
                $dataLog = MapelUserLog::create([
                    'user_id' => $this->user->id,
                    'mapel_id' => $mapel->id,
                    'group' => $request->group,
                    'time' => Carbon::now()->toDateTimeString(),
                    'action' => 5, //keluar
                ]);
                return response()->json(null, 200);
            });
        } else {
            // cek public/private
            if ($mapel->akses === "public") {
                // insert
                DB::transaction(function () use ($request) {
                    $dataLog = MapelUserLog::create([
                        'user_id' => $this->user->id,
                        'mapel_id' => $request->mapel_id,
                        'group' => $request->group,
                        'time' => Carbon::now()->toDateTimeString(),
                        'action' => 2,
                    ]);
                    $data = MapelUser::create([
                        'user_id' => $this->user->id,
                        'mapel_id' => $request->mapel_id,
                        'group' => $request->group,
                    ]);
                    return new JsonResource($data);
                });
            } else {
                // insert
                $data = MapelUserLog::create([
                    'user_id' => $this->user->id,
                    'mapel_id' => $request->mapel_id,
                    'group' => $request->group,
                    'time' => Carbon::now()->toDateTimeString(),
                    'action' => 1,
                ]);
                return new JsonResource($data);
            }
        }

    }

    // tambah materi ke mapel
    public function addMateri(Request $request)
    {
        //validasi
        $this->validate($request, [
            'type' => 'required|in:1,2',
            'mapel_id' => 'required',
        ], $this->errMsg());
        $this->validate($request, ['materis' => 'required_if:type,2'], ['required_if' => 'materi belum dipilih']);
        $this->validate($request, ['dirName' => 'required_if:type,1'], ['required_if' => 'nama direktori harus diisi']);

        $insert = [
            'type' => $request->type,
            'mapel_id' => $request->mapel_id,
            'parent' => $request->parent == 0 ? null : $request->parent,
        ];

        // type
        if ($request->type == "1") {
            $insert["nama"] = $request->dirName;
            $data = MapelMateri::create($insert);
            return new JsonResource($data);
        } else {
            try {
                $records = [];
                foreach ($request->materis as $materi) {
                    $insert["materi_id"] = $materi;
                    array_push($records, $insert);
                }
                foreach ($records as $record) {
                    MapelMateri::firstOrCreate($record);
                }
                return response()->json('sukses', 201);
            } catch (Exception $e) {
                return response()->json('gagal menambahkan', 500);
            }
        }
    }

    // hapus materi dari mapel
    public function removeMateri($id)
    {
        $data = MapelMateri::with(['mapel' => function ($q) {
            $q->where('user_id', $this->user->id)->get();
        }])->withCount('childs')->where('id', $id)->firstOrFail();
        if ($data->childs_count > 0) {
            return response()->json('ono isine', 422);
        }
        $data->delete();
        return response()->json(null, 204);
    }

    public function materiByMapel($id)
    {
        $data = MapelMateri::with('materi')->where('mapel_id', $id)->get();
        return JsonResource::collection($data);
    }

    public function materiByMapelSiswa($id)
    {
        $data = MapelMateri::with(['materi'])
            ->whereHas(
                'mapel', function ($q) {
                    $q->whereHas('joinedUser', function ($q) {$q->where('user_id', $this->user->id);});
                }
            )->where('mapel_id', $id)->get();
        return JsonResource::collection($data);
    }

    // hapus siswa dari mapel
    public function removeSiswa($id)
    {
        try {
            DB::beginTransaction();
            //get data
            $data = MapelUser::whereHas('mapel', function ($q) {
                $q->where('user_id', $this->user->id);
            })->findOrFail($id);
            //update log
            $log = MapelUserLog::whereHas('mapel', function ($q) {
                $q->where('user_id', $this->user->id);
            })->where([
                'status' => 1,
                //'action' => 2,
                'user_id' => $data->user_id,
                'mapel_id' => $data->mapel_id,
                'group' => $data->group,
            ])->update(['status' => 0]);
            //new log
            $new_log = MapelUserLog::create([
                'status' => 1,
                'action' => 6, //ditendang
                'user_id' => $data->user_id,
                'mapel_id' => $data->mapel_id,
                'group' => $data->group,
                'time' => Carbon::now()->toDateTimeString(),
            ]);
            //delete data
            $data->delete();
            DB::commit();
            return response()->json(null, 204);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json('gagal menghapus', 422);
        }
    }

    // pindahkan kelmpok
    public function moveSiswa(Request $request)
    {
        // validasi
        $this->validate($request, [
            'group' => 'required',
        ], $this->errMsg());
        try {
            DB::beginTransaction();
            //get data
            $data = MapelUser::whereHas('mapel', function ($q) {
                $q->where('user_id', $this->user->id);
            })->findOrFail($request->dataId);
            //update log
            $log = MapelUserLog::whereHas('mapel', function ($q) {
                $q->where('user_id', $this->user->id);
            })->where([
                'status' => 1,
                //'action' => 2,
                'user_id' => $data->user_id,
                'mapel_id' => $data->mapel_id,
                'group' => $data->group,
            ])->update(['status' => 0]);
            //new log
            $new_log = MapelUserLog::create([
                'status' => 1,
                'action' => 4, //ubah group
                'user_id' => $data->user_id,
                'mapel_id' => $data->mapel_id,
                'group' => $request->group !== "umum" ? $request->group : null,
                'time' => Carbon::now()->toDateTimeString(),
            ]);
            //update data
            $data->update(['group' => $request->group !== "umum" ? $request->group : null]);
            DB::commit();
            return response()->json(null, 201);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json('gagal menghapus', 422);
        }
    }

    public function pesertaByMapel(Request $request, $id)
    {
        $data = MapelUser::with('user')->where(['mapel_id' => $id]);
        $data = $request->group ? $data->where('group', $request->group !== "umum" ? $request->group : null) : $data;
        $data = $data->get();
        return JsonResource::collection($data);
    }

    /** MAPEL KUIS */

    public function kuisByMapel(Request $request, $id)
    {
        $data = MapelKuis::with('kuis')->where(['mapel_id' => $id]);
        $data = $request->group ? $data->where('group', $request->group !== "umum" ? $request->group : null) : $data;
        $data = $data->get();
        return JsonResource::collection($data);
    }

    public function kuisTersedia(Request $request, $id)
    {
        $data = MapelKuis::selectRaw("*")->with(['kuis', 'mapel'])
            ->whereHas('mapel', function ($q) {
                $q->whereHas('joinedUser', function ($q) {
                    $q->where('user_id', $this->user->id)
                        ->whereRaw('coalesce("mapel_kuis"."group", ' . "''" . ') = coalesce("mapel_user"."group", ' . "''" . ')');
                });
            })
            ->where(['mapel_id' => $id, 'published' => true])->get();
        // filter
        $filtered_data = array_filter($data->toArray(), function ($d) {
            $mk_settings = json_decode($d['settings']);
            $ok = false;
            if ($mk_settings->type == 1) {
                // tipe latihan
                $ok = true;
            } else if ($mk_settings->mulai == 1
                && (!$mk_settings->started || ($mk_settings->started && (date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes", strtotime($mk_settings->start))) > date('Y-m-d H:i:s'))))
            ) {
                // tipe mulai manual -> ( belum dimulai or (dimulai + waktu masih) )
                $ok = true;
            } else if ($mk_settings->mulai == 2
                && ((date($mk_settings->start) >= date('Y-m-d H:i:s')) || (date($mk_settings->start) <= date('Y-m-d H:i:s')) && (date('Y-m-d H:i:s', strtotime("+{$mk_settings->waktu} minutes", strtotime($mk_settings->start))) > date('Y-m-d H:i:s')))
            ) {
                // tipe terjadwal -> ( belum dimulai or (dimulai + waktu masih) )
                $ok = true;
            }
            return $ok;
        });
        return new JsonResource($filtered_data);
    }

    public function kuisMapelDetail(Request $request, $id)
    {
        $data = MapelKuis::with('kuis')->findOrFail($id);
        return new JsonResource($data);
    }

    public function pengaturanKuis(Request $request, $id)
    {
        $data = MapelKuis::with('kuis')->findOrFail($id);
        // validasi 1
        $this->validate($request, [
            'type' => 'required|in:1,2',
        ], $this->errMsg());
        // data
        $settings = [
            'type' => $request->type,
            'keterangan' => $request->keterangan,
        ];
        // ujian?
        if ($request->type == 2) {
            $this->validate($request, [
                'waktu' => 'required|integer',
                'mulai' => 'required|in:1,2',
            ], $this->errMsg());
            $settings["waktu"] = $request->waktu;
            $settings["mulai"] = $request->mulai;
            if ($request->mulai == 1) {
                // mulai manual
                $settings["started"] = false;
                $settings["start"] = null;
            } else if ($request->mulai == 2) {
                // terjadwal
                $this->validate($request, [
                    'start' => 'required|date|date_format:Y-m-d H:i:s',
                ], $this->errMsg());
                $settings["start"] = $request->start;
            }
        }
        //print_r($request->published); exit;
        // update
        $data->update([
            'settings' => json_encode($settings),
            'published' => $request->published,
        ]);
        return new JsonResource($data);
    }

    // mulai kuis
    public function startKuis(Request $request, $id)
    {
        $data = MapelKuis::with('kuis')
            ->where([
                'published' => true,
                'settings->type' => 2,
                'settings->mulai' => 1,
            ])
            ->findOrFail($id);
        // update (mulai kuis)
        $data->update([
            'settings->started' => true,
            'settings->start' => date('Y-m-d H:i:s'),
        ]);
        return new JsonResource($data);
    }

    // tambah kuis ke mapel
    public function addKuis(Request $request)
    {
        //validasi
        $this->validate($request, [
            'group' => 'required',
            'mapelId' => 'required',
            'kuises' => 'required',
        ], $this->errMsg());

        $insert = [
            'group' => $request->group == 'umum' ? null : $request->group,
            'mapel_id' => $request->mapelId,
            'published' => false,
            'settings' => '{}',
        ];
        // insert
        try {
            $records = [];
            foreach ($request->kuises as $kuis) {
                $insert["kuis_id"] = $kuis;
                array_push($records, $insert);
            }
            foreach ($records as $record) {
                MapelKuis::create($record);
            }
            return response()->json('sukses', 201);
        } catch (Exception $e) {
            return response()->json('gagal menambahkan', 500);
        }
    }

    // hapus materi dari mapel
    public function removeKuis($id)
    {
        $data = MapelMateri::with(['mapel' => function ($q) {
            $q->where('user_id', $this->user->id)->get();
        }])->withCount('childs')->where('id', $id)->firstOrFail();
        if ($data->childs_count > 0) {
            return response()->json('ono isine', 422);
        }
        $data->delete();
        return response()->json(null, 204);
    }

    /** FU */
    private function errMsg()
    {
        return [
            'required' => ':attribute harus diisi',
            'in' => ':attribute salah',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maksimal :max karakter',
            'direktori' => 'nama direktori harus diisi',
        ];
    }
}
