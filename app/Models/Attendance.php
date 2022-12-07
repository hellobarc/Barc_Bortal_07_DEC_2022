<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\StudentBatch;
use App\Models\user;
use App\Models\ClassTest;
use App\Models\ClasstestMarks;


class Attendance extends Model
{
    use HasFactory;
    protected $fillable = ['student_id','date','unit_id','user_id','course_id','batch_id','status','delay_minutes'];

    public function batch(){
        return $this->belongsTo(StudentBatch::class,'batch_id');
    }
    
    public function student()
    {
        return $this->belongsTo(User::class,'student_id');
    }
    public function classTest()
    {
        return $this->hasMany(ClassTest::class,'batch_id');
    }
    public function classTestMarks()
    {
        return $this->hasMany(ClasstestMarks::class,'student_id');
    }

    public function course(){
       // return $this->hasOneThrough(CourseList::class,StudentBatch::class,'batch_id','id','id','id'); // paragalo na id milano
    }


}

