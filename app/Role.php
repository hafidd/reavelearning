<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $hidden = ['desc', 'pivot'];
    public function menus() { return $this->belongsToMany('App\Menu', 'menu_role', 'role', 'menu'); }
}
