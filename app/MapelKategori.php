<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapelKategori extends Model
{
    protected $table = 'mapel_kategori';
    public function mapel() { return $this->hasMany('App\Mapel', 'kategori_id', 'id'); }
}
