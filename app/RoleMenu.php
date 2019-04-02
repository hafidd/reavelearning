<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleMenu extends Model
{
    protected $table = 'menurole';

    public function role()
    {
        return $this->belongsTo('App\Role', 'role');
    }

    public function menu()
    {
        return $this->belongsTo('App\Menu', 'menu');
    }
}
