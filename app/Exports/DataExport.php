<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use App\Mapel;

class DataExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Mapel::all();
    }
}
