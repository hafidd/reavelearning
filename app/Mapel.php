<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mapel extends Model
{
    protected $table = 'mapel';
    public $timestamps = false;
    protected $fillable = ['user_id', 'kategori_id', 'nama', 'kode', 'status', 'akses', 'keterangan', 'groups'];

    protected $user;

    public function kategori()
    {return $this->belongsTo('App\MapelKategori', 'kategori_id', 'id');}

    public function user()
    {return $this->belongsTo('App\User', 'user_id', 'id');}

    public function logs()
    {
        return $this->hasMany('App\MapelUserLog', 'mapel_id', 'id');
    }

    public function waitings()
    {
        return $this->hasMany('App\MapelUserLog', 'mapel_id', 'id')
            ->where(['action' => 1, 'status' => 1]);
    }

    public function joinedUsers()
    {
        return $this->hasMany('App\MapelUser', 'mapel_id', 'id');
    }
}
