<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseList extends Model
{
    use HasFactory;
    protected $fillable = ['course_categories_id','course_name','course_title','short_description','thumbnail','overview','curriculum','who_should'];

    public function course_categories(){
        return $this->belongsTo(CourseCategory::class,'course_categories_id');
    }


    public function module(){
        return $this->hasMany(CourseModule::class,'course_list_id');
    }



}
