<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClasstestMarks extends Model
{
    use HasFactory;
    protected $fillable = ['class_test_id','student_id','instructor_id','marks','status'];


    public function student(){
        return $this->belongsTo(User::class,'student_id');
    }

}
