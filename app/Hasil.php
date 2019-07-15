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

    public function mapel_kuis()
    {return $this->belongsTo('App\MapelKuis', 'mapel_kuis_id', 'id');}
    public function user()
    {return $this->belongsTo('App\User', 'user_id', 'id');}

}
