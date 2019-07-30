<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapelKategori extends Model
{
    protected $table = 'mapel_kategori';
    protected $fillable = ['nama'];
    public $timestamps = false;
    public function mapel() { return $this->hasMany('App\Mapel', 'kategori_id', 'id'); }
}
