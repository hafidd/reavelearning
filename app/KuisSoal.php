<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KuisSoal extends Model
{
    protected $table = "kuis_soal";
    public $timestamps = false;
    protected $fillable = ['soal_id', 'kuis_id', 'nama', 'type', 'parent', 'settings'];

    public function kuis()
    {return $this->belongsTo('App\Kuis', 'kuis_id', 'id');}

    public function soal()
    {return $this->belongsTo('App\Soal', 'soal_id', 'id');}

    public function childs()
    {return $this->hasMany('App\KuisSoal', 'parent', 'id');}

    public function parent()
    {return $this->belongsTo('App\KuisSoal', 'parent', 'id');}
}
