<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapelMateri extends Model
{
    protected $table = "mapel_materi";
    public $timestamps = false;
    protected $fillable = ['mapel_id', 'materi_id', 'nama', 'type', 'parent'];

    public function materi()
    {return $this->belongsTo('App\Materi', 'materi_id', 'id');}

    public function mapel()
    {return $this->belongsTo('App\Mapel', 'mapel_id', 'id');}

    public function childs()
    {return $this->hasMany('App\MapelMateri', 'parent', 'id');}

}
