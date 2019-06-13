<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mapel extends Model
{
    protected $table = 'mapel';
    public $timestamps = false;
    protected $fillable = ['user_id', 'kategori_id', 'nama', 'kode', 'status', 'akses', 'keterangan'];
    public function kategori()
    {return $this->belongsTo('App\MapelKategori', 'kategori_id', 'id');}
}
