<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClassTest;

class StudentBatch extends Model
{
    use HasFactory;
    protected $fillable = ['course_id','batch_name','start_date','end_date','status'];

    public function course(){
        return $this->belongsTo(CourseList::class,'course_id');
    }
    public function classTest(){
        return $this->hasMany(ClassTest::class, 'batch_id');
    }
    

}

