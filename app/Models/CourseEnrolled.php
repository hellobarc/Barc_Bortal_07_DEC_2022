<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseEnrolled extends Model
{
    protected $fillable = ['course_id','user_id','status','expired_date'];


    public function courses(){
        return $this->belongsTo(CourseList::class,'course_id');
    }
    public function users(){
        return $this->belongsTo(CourseList::class,'user_id');
    }

}

