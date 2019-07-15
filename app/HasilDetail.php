<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HasilDetail extends Model
{
    protected $table = "hasil_detail";
    protected $fillable = ["hasil_id", "kuis_soal_id", "soal_id", "jawaban", "point"];
    public $timestamps = false;

    public function hasil()
    {return $this->belongsTo('App\Hasil', 'id', 'hasil_id');}
    public function soal()
    {return $this->belongsTo('App\Soal', 'soal_id', 'id');}
    public function kuis_soal()
    {return $this->belongsTo('App\KuisSoal', 'kuis_soal_id', 'id');}
}
