<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $fillable =['lesson_id','question','instruction','quiz_type','marks','time_limit','status'];

    public function lesson(){
        return $this->belongsTo(Lesson::class,'lesson_id');
    }

    public function quiztruefalse(){
        return $this->hasMany(Quiztruefalse::class,'quiz_id');
    }

    public function quizMultiplechoice(){
        return $this->hasMany(QuizMultiplechoice::class,'quiz_id');
    }

    public function quizfillblank(){
        return $this->hasMany(QuizFillblank::class,'quiz_id');
    }

    public function quizradio(){
        return $this->hasMany(QuizRadio::class,'quiz_id');
    }

    
    public function quizreorder(){
        return $this->hasMany(QuizReorder::class,'quiz_id');
    }




}

