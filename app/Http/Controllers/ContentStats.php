<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Models\Lesson;
use App\Models\Quiz;

class ContentStats extends Controller
{
   public function stats(){
        $total_lesson =  Lesson::count();
        $reading_lesson =  Lesson::where('course_module_id',1)->count();
        $listening_lesson =  Lesson::where('course_module_id',2)->count();
        $grammar_lesson =  Lesson::where('course_module_id',3)->count();
        $vocabulary_lesson =  Lesson::where('course_module_id',4)->count();
        $a2_lesson =  Lesson::where('course_list_id',1)->count();
        $b1_lesson =  Lesson::where('course_list_id',2)->count();
        $b2_lesson =  Lesson::where('course_list_id',3)->count();
        $c1_lesson =  Lesson::where('course_list_id',4)->count();
        $study_hour =  Lesson::sum('study_hour');
        $study_minutes =  Lesson::sum('study_minutes');
        $total_articles =  Article::count();
        $total_quizes =  Quiz::count();
        $data = array(
                'total_lesson'=>  $total_lesson,
                'reading_lesson'=>  $reading_lesson,
                'listening_lesson'=>  $listening_lesson,
                'grammar_lesson'=>  $grammar_lesson,
                'vocabulary_lesson'=>  $vocabulary_lesson,
                'a2_lesson'=>  $a2_lesson,
                'b1_lesson'=>  $b1_lesson,
                'b2_lesson'=>  $b2_lesson,
                'c1_lesson'=>  $c1_lesson,
                'study_hour'=>  $study_hour,
                'study_minutes'=>  $study_minutes,
                'total_articles'=>  $total_articles,
                'total_quizes'=>  $total_quizes

        );
        return response()->json(["status"=>"success","stats"=>$data],201);
   }
}
