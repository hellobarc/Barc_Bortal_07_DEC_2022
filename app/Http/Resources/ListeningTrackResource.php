<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ListeningTrackResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
       // return parent::toArray($request);
       return [
            'id'=>$this->id,
            'lesson_id'=>$this->lesson_id,
            'title'=>$this->title,
            'description'=>$this->description,
            'file_name'=>$this->file_name
        ];
    }
}
