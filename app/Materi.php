<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    protected $table = "materi";
    public $timestamps = false;
    protected $fillable = ['user_id', 'judul', 'isi', 'kode'];

    public function user()
    {return $this->belongsTo('App\User', 'user_id', 'id');}
    
}
