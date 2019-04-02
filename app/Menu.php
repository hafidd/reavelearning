<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $hidden = ['desc', 'pivot'];
    public function roles() { return $this->belongsToMany('App\Role', 'menu_role', 'menu', 'role'); }
}
