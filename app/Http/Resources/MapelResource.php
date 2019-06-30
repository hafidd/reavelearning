<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MapelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $arr = [
            'kategori' => $this->kategori->nama,
            'pengajar' => $this->user->name
        ];
        //$arr = ['user' => $this->user->name];
        //$arr = ['user_mail' => $this->user->email];
        $new = array_replace(parent::toArray($request), $arr);
        return $new;
    }
}
