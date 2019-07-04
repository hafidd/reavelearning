<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    protected $table = "soal";
    protected $fillable = ["user_id", "kode", "pertanyaan", "jawaban", "type"];
    public $timestamps = false;
}
