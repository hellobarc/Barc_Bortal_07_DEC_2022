<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizSubmission extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','lesson_id','quiz_id','quiz_answer_id','status','marks_obtained','answer_text','quiz_type','log_id'];


    public function lesson(){
        return $this->belongsTo(Lesson::class, 'lesson_id');
    }

    public function quiz(){
        return $this->belongsTo(Quiz::class,'quiz_id');
    }

    public function lessonlog(){
        return $this->hasMany(LessonLog::class,'user_id');
    }

}

