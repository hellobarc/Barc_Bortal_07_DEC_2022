<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WritingQuestion extends Model
{
    use HasFactory;
    protected $fillable = ['title','description','course_list_id','course_unit_id','task_serial','study_minutes','image'];


    public function course(){
        return $this->belongsTo(CourseList::class,'course_list_id');
    }

    
    public function unit(){
        return $this->belongsTo(CourseUnit::class,'course_unit_id');
    }

}


