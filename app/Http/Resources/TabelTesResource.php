<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TabelTesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'ini apa' => $this->isi,
            'created_at' => (string) $this->created_at,
        ];
    }
}
