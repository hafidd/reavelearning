<?php

namespace App\Exports;

use App\Mapel;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class SiswaMapelExport implements WithMultipleSheets
{
    protected $mapel;
    public function __construct($id = 1)
    {
        $this->mapel = Mapel::findOrFail($id);
    }
    public function sheets(): array
    {
        $sheets = [];
        $groups = json_decode($this->mapel->groups, true);
        array_push($groups, ['kode' => '', 'nama' => 'umum']);

        foreach ($groups as $group) {
            $sheets[] = new SiswaPerGroup($this->mapel, $group['nama']);
        }

        return $sheets;
    }
}
