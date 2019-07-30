<?php

namespace App\Exports;

use App\Mapel;
use App\MapelUser;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\BeforeSheet;

class SiswaPerGroup implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents, WithStartRow, WithTitle
{
    protected $mapel;
    protected $group_name;

    public function __construct($mapel, $group)
    {
        $this->group_name = $group;
        $this->mapel = $mapel;
    }

    public function startRow(): int
    {
        return 3;
    }

    public function title(): string
    {
        return $this->group_name;
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama',
            'Email',
        ];
    }

    public function registerEvents(): array
    {
        return [
            BeforeSheet::class => function (BeforeSheet $event) {
                $sheet = $event->sheet->getDelegate();
                // judul
                $sheet->mergeCells('A1:G1');
                $sheet->mergeCells('A2:G2');
                $sheet->setCellValue('A1', $this->mapel->nama);
                $sheet->setCellValue('A2', 'Kelompok : ' . $this->group_name);
                //isi
                $cellRange = 'A3:C3'; // All headers
                $sheet->getStyle($cellRange)->getFont()->setSize(14);

            },
        ];
    }

    public function collection()
    {
        $data = MapelUser::with('user')->where([
            'mapel_id' => $this->mapel->id,
            'group' => $this->group_name == "umum" ? NULL : $this->group_name,
        ]);
        $data = $data->get();
        $no = 1;
        $return_data = array_map(function ($r) use (&$no) {
            return [
                "no" => $no++,
                "nama" => $r['user']['name'],
                "email" => $r['user']['email'],
            ];
        }, $data->toArray());
        return collect($return_data);
    }

}
