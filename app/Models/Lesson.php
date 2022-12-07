<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;
    protected $fillable = ['course_list_id','unit_id','course_module_id','title','description','prerequisite','template','is_extra','extrea_id','study_hour','study_minutes'];

    public function article(){
        return $this->hasOne(Article::class,'lesson_id');
    }

    public function audiotrack(){
        return $this->hasOne(AudioTrack::class,'lesson_id'); // Konta je right nijeo jani na
    }

    public function listeningtrack(){
        return $this->hasOne(ListeningTrack::class,'lesson_id'); // Konta je right nijeo jani na
    }

    public function quiz(){
        return $this->hasMany(Quiz::class,'lesson_id');
    }

    public function unit(){
        return $this->belongsTo(CourseUnit::class,'unit_id');
    }

    public function course(){
        return $this->belongsTo(CourseList::class,'course_list_id');
    }

    public function course_category(){
        return $this->belongsTo(CourseCategory::class,'course_list_id');
    }

    public function quizanswer(){
        return $this->hasManyThrough(QuizAnswer::class,Quiz::class);
    }

    public function lessonlog(){
        $use_id = auth()->user()->id;
        return $this->hasMany(LessonLog::class,'lesson_id')->where('user_id', $use_id);
    }


}
