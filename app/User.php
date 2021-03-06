<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'jk', 'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return ['role' => $this->role, 'name' => $this->name];
        $menus = RoleMenu::select(['name', 'path', 'component', 'order', 'parent'])
            ->leftJoin('menus as m', 'm.id', '=', 'menu')
            ->where('role', $this->role)
            ->get();
        return ['menus' => $menus];
    }

    public function hasils()
    {return $this->hasMany('App\Hasil', 'user_id', 'id');}
    public function hasil()
    {return $this->hasOne('App\Hasil', 'user_id', 'id');}

}
