<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;
    protected $fillable = ['course_id','exam_name','exam_type','user_id'];


    public function course(){
        return $this->belongsTo(CourseList::class,'course_id');
    }

}
