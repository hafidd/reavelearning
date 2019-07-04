<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kuis extends Model
{
    protected $table = "kuis";
    protected $fillable = ["kode", "judul", "type", "user_id", "keterangan"];
    public $timestamps = false;

}
