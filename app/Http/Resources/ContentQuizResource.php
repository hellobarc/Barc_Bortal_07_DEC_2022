<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContentQuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
      //  return parent::toArray($request); 
      return [
            'id'=>$this->id,
            'lesson_id'=>$this->lesson_id,
            'question'=>$this->question,
            'instruction'=>$this->instruction,
            'quiz_type'=>$this->quiz_type,
            'marks'=>$this->marks,
            'time_limit'=>$this->time_limit,
            'status'=>$this->status,
            'lesson'=>$this->lesson
      ];
    }
}
