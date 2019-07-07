<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapelKuis extends Model
{
    protected $table = 'mapel_kuis';
    public $timestamps = false;
    protected $fillable = ['kuis_id', 'mapel_id', 'group', 'settings', 'published'];

    public function mapel()
    {return $this->belongsTo('App\Mapel', 'mapel_id', 'id');}

    public function kuis()
    {return $this->belongsTo('App\Kuis', 'kuis_id', 'id');}
}
