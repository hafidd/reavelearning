<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hasil extends Model
{
    protected $table = "hasil";
    protected $fillable = ["user_id", "mapel_kuis_id", "start", "end"];
    public $timestamps = false;

    public function details()
    {return $this->hasMany('App\HasilDetail', 'hasil_id', 'id');}
}
