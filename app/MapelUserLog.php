<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapelUserLog extends Model
{
    protected $table = "mapel_user_log";
    public $timestamps = false;
    protected $fillable = ['user_id', 'mapel_id', 'time', 'group', 'action'];

    public function mapel() { return $this->belongsTo('App\Mapel', 'mapel_id', 'id'); }
    
    public function user() { return $this->belongsTo('App\User', 'user_id', 'id'); }
}
