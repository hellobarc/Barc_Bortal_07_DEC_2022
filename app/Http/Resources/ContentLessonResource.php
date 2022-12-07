<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContentLessonResource extends JsonResource
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
                'course_list_id'=>$this->course_list_id,
                'course_name'=>$this->course->course_name,
                'course_category_name'=>$this->course_category->name,
                'course_category_title'=>$this->course_category->title,
                'unit_id'=>$this->unit_id,
                'unit_name'=>$this->unit->unit_name,
                'course_module_id'=>$this->course_module_id,
                'title'=>$this->title,
                'description'=>$this->description,
                'prerequisite'=>$this->prerequisite,
                'template'=>$this->template,
                'is_extra'=>$this->is_extra,
                'extrea_id'=>$this->extrea_id,
                'study_hour'=>$this->study_hour,
                'study_minutes'=>$this->study_minutes,
                'article'=>$this->article,
                'listeningtrack'=>$this->listeningtrack
       ];
    }
}
