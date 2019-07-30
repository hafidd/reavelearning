<?php

namespace App\Http\Controllers\API;

//use Illuminate\Http\Request;
use App\Exports\SiswaMapelExport;

//use App\Mapel;
//use App\Exports\DataExport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function export_test()
    {
        return Excel::download(new SiswaMapelExport, 'data.xlsx');
    }

    public function excel_siswa_mapel($id)
    {
        return Excel::download(new SiswaMapelExport($id), "mapel-siswa-{$id}.xlsx");
    }
}
