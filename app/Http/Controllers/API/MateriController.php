<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
//use App\Mapel;
use App\MapelMateri;
use App\Materi;
//use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
//use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use JWTAuth;

//use Validator;

class MateriController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = JWTAuth::user();
    }

    public function index(Request $request)
    {
        $data = Materi::where('user_id', $this->user->id);
        //
        //$data = $request->type === "waiting" ? $data->whereHas("waitings")->withCount('waitings') : $data;
        // filter
        $data = $request->judul ? $data->where('judul', 'ilike', '%' . $request->judul . '%') : $data;
        $data = $request->kode ? $data->whereRaw("UPPER(kode) = '" . strtoupper($request->kode) . "'") : $data;
        $data = $request->type ? $data->whereJsonContains('isi->type', $request->type) : $data;
        $data = $data->paginate(15);
        return JsonResource::collection($data);
    }

    public function store(Request $request)
    {
        // validasi
        $this->validate($request, [
            'judul' => 'required|min:5|max:100',
            'kode' => 'max:50',
            'type' => 'required',
            'isi' => 'required_if:type,text',
        ], $this->errMsg());
        $content = [
            'type' => $request->type,
        ];

        // content by type
        if ($request->type === 'text') {
            //TEXT
            $content['isi'] = $request->isi;
        } elseif ($request->type === 'file') {
            //FILE
            $this->validate($request, ['file' => 'file|mimes:pdf,doc,docx,ppt,pptx,xls,xlsx,txt,zip,rar,7z'], $this->errMsg());
            $uploadedFile = $request->file;

            $filename = $this->user->id . time() . '_' . $uploadedFile->getClientOriginalName();
            $ext = $uploadedFile->getClientOriginalExtension();

            Storage::disk('local')->putFileAs(
                'files/materi/',
                $uploadedFile,
                $filename
            );

            $content['ext'] = $ext;
            $content['name'] = $filename;
        } elseif ($request->type === 'video') {
            //VIDEO
            $this->validate($request, ['video' => 'file|mimes:mp4,avi'], $this->errMsg());
            $uploadedFile = $request->video;

            $filename = $this->user->id . time() . '_' . $uploadedFile->getClientOriginalName();
            $ext = $uploadedFile->getClientOriginalExtension();

            Storage::disk('local')->putFileAs(
                'files/materi/vid/',
                $uploadedFile,
                $filename
            );

            $content['ext'] = $ext;
            $content['name'] = $filename;
            $content['desc'] = $request->desc;
        }

        // insert
        $data = Materi::create([
            'user_id' => $this->user->id,
            'judul' => $request->judul,
            'kode' => $request->kode,
            'isi' => json_encode($content),
        ]);

        // insert mapelmateri
        if ($request->mapelId) {
            $mapelmateri = MapelMateri::create([
                'type' => 2,
                'mapel_id' => $request->mapelId,
                'parent' => $request->parent,
                'materi_id' => $data->id,
            ]);
            return new JsonResource($mapelmateri);
        }

        return new JsonResource($data);
    }

    public function show($id)
    {
        $data = Materi::where([
            'id' => $id,
            'user_id' => $this->user->id,
        ])->first();
        if ($data) {
            $content = json_decode($data->isi);
            if ($content->type === "file") {
                $data["file"] = Storage::disk('local')->exists('files/materi/' . $content->name) ? url("api/get-materi-file-test/file/{$content->name}") : false;
            } else if ($content->type === "video") {
                $data["file"] = Storage::disk('local')->exists('files/materi/vid/' . $content->name) ? url("api/get-materi-file-test/video/{$content->name}") : false;
            }
        }
        return new JsonResource($data);
    }

    public function update(Request $request, $id)
    {
        $data = Materi::findOrFail($id);
        // cek user
        if ($this->user->id !== $data->user_id) {
            return response()->json(['error' => '403'], 403); //unautorized
        }

        // validasi
        $this->validate($request, [
            'judul' => 'required|min:5|max:100',
            'kode' => 'max:50',
            'isi' => 'required_if:type,text',
        ], $this->errMsg());
        $content = [
            'type' => $request->type,
        ];

        // content by type
        $type = json_decode($data->isi)->type;
        if ($type === 'text') {
            //TEXT
            $content['isi'] = $request->isi;
        } elseif ($type === 'file') {
            //FILE
            if ($request->file) {
                $this->validate($request, ['file' => 'file|mimes:pdf,doc,docx,ppt,pptx,xls,xlsx,txt,zip,rar,7z'], $this->errMsg());
                $uploadedFile = $request->file;

                $filename = $this->user->id . time() . '_' . $uploadedFile->getClientOriginalName();
                $ext = $uploadedFile->getClientOriginalExtension();

                Storage::disk('local')->putFileAs(
                    'files/materi/',
                    $uploadedFile,
                    $filename
                );

                $link = Storage::disk('local')->exists('files/materi/' . $filename) ? url("api/get-materi-file-test/file/{$filename}") : false;
                $content['ext'] = $ext;
                $content['name'] = $filename;

                // delete file lama
                if (Storage::disk('local')->exists('files/materi/' . json_decode($data->isi)->name)) {
                    Storage::delete('files/materi/' . json_decode($data->isi)->name);
                }
            } else {
                $content['ext'] = json_decode($data->isi)->ext;
                $content['name'] = json_decode($data->isi)->name;
                $link = Storage::disk('local')->exists('files/materi/' . json_decode($data->isi)->name) ? url("api/get-materi-file-test/file/" . json_decode($data->isi)->name) : false;
            }
        } elseif ($type === 'video') {
            //VIDEO
            if ($request->video) {
                $this->validate($request, ['video' => 'file|mimes:mp4,avi'], $this->errMsg());
                $uploadedFile = $request->video;

                $filename = $this->user->id . time() . '_' . $uploadedFile->getClientOriginalName();
                $ext = $uploadedFile->getClientOriginalExtension();

                Storage::disk('local')->putFileAs(
                    'files/materi/vid/',
                    $uploadedFile,
                    $filename
                );

                $link = Storage::disk('local')->exists('files/materi/vid/' . $filename) ? url("api/get-materi-file-test/video/{$filename}") : false;
                $content['ext'] = $ext;
                $content['name'] = $filename;
                $content['desc'] = $request->desc;

                // delete file lama
                if (Storage::disk('local')->exists('files/materi/vid/' . json_decode($data->isi)->name)) {
                    Storage::delete('files/materi/vid/' . json_decode($data->isi)->name);
                }
            } else {
                $content['ext'] = json_decode($data->isi)->ext;
                $content['name'] = json_decode($data->isi)->name;
                $content['desc'] = $request->desc;
                $link = Storage::disk('local')->exists('files/materi/vid/' . json_decode($data->isi)->name) ? url("api/get-materi-file-test/video/" . json_decode($data->isi)->name) : false;
            }
        }
        // update
        $data->update([
            'judul' => $request->judul,
            'kode' => $request->kode,
            'isi' => json_encode($content),
        ]);

        if ($type !== "text") {
            $data->file = $link;
        }
        return new JsonResource($data);
    }

    public function destroy($id)
    {
        $data = Materi::findOrFail($id);
        // cek user
        if ($this->user->id !== $data->user_id) {
            return response()->json(['error' => '403'], 403);
        }
        //file
        $type = json_decode($data->isi)->type;
        $path = $type === "file" ? 'files/materi/' : 'files/materi/vid/';
        if ($type !== "text" && Storage::disk('local')->exists($path . json_decode($data->isi)->name)) {
            Storage::delete($path . json_decode($data->isi)->name);
        }
        $data->delete();
        return response()->json(null, 204);
    }

    public function downloadFile($type = 'file', $filename)
    {
        $path = $type === "video" ? "files/materi/vid/" . $filename : "files/materi/" . $filename;
        if (Storage::disk('local')->exists($path)) {
            return Storage::disk('local')->download($path);
        }
        return response()->json('file tidak ditemukan', 404);
    }

    private function errMsg()
    {
        return [
            'required' => ':attribute harus diisi',
            'in' => ':attribute salah',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maksimal :max karakter',
            'file' => 'periksa kembali file anda',
            'mimes' => 'periksa kembali file anda',
        ];
    }

}
