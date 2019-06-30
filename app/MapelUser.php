<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MapelUser extends Model
{
    protected $table = 'mapel_user';
    public $timestamps = false;
    protected $fillable = ['user_id', 'mapel_id', 'group'];

    public function mapel() { return $this->belongsTo('App\Mapel', 'mapel_id', 'id'); }
    
    public function user() { return $this->belongsTo('App\User', 'user_id', 'id'); }
    
};
