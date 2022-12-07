<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\QuizSubmission;
use App\Models\Lesson;
use App\Models\Quiz;
use Illuminate\Http\Request;

class StudentStats extends Controller
{
    public function stats(){

        $userid = auth()->user()->id;

        $attendance =  Attendance::where('student_id', $userid )->count();
        $QuizSubmission =  QuizSubmission::where('user_id', $userid )->get();
        $total_quiz = $QuizSubmission->count();

        $quiz_id = [];

        foreach( $QuizSubmission as $q){
            $id =   $q->quiz->lesson_id;
            array_push( $quiz_id, $id );
        }

        $lessons_count = Lesson::whereIn('id', $quiz_id)->count();
        $hour_completed = Lesson::whereIn('id', $quiz_id)->sum('study_hour');
        $study_minutes = Lesson::whereIn('id', $quiz_id)->sum('study_minutes');

        $data = array(
                'attendance'=>  $attendance,
                'total_quiz'=>  $total_quiz,
                'lessons_count'=>  $lessons_count,
                'hour_completed'=>  $hour_completed,
                'study_minutes'=>  $study_minutes
        );
        return response()->json(["status"=>"success","stats"=>$data],201);
   }

// Unit wise progress chart //
   public function unitwiseProgress(Request $request){
        $course_id = $request->input('course_id');
        $user_id = auth()->user()->id;
        $marks_percentage = [];

        $quiz_list = [];
        $quiz_marks = [];
        $obtained_marks = [];
        $obtained_percent = [];

        for($i=1;$i <=8; $i++){
            $lesson = Lesson::where('course_list_id',$course_id)->where('unit_id',$i)->get();
            $quiz_marks_sum =0;
            $quiz_obtain_sum = 0;
            foreach($lesson as $less){
                $quiz_marks_sum += Quiz::where('lesson_id',$less->id)->sum('marks');
                $quiz_obtain_sum += QuizSubmission::where('lesson_id',$less->id)->where('user_id',$user_id)->sum('marks_obtained');
            }
            $quiz_marks[$i] =$quiz_marks_sum;
            $obtained_marks[$i] = ceil($quiz_obtain_sum);
            $obtained_percent[$i] = ceil(percentageCalculation($obtained_marks[$i],  $quiz_marks[$i]));
        }

        return response()->json(["quiz_marks"=>$quiz_marks,"obtained_marks"=>$obtained_marks,"percentage"=>$obtained_percent],201);
   }


   // Reading progress chart //
    public function readingProgress(Request $request){
        $course_id = $request->input('course_id');
        $user_id = auth()->user()->id;

        $quiz_marks = [];
        $obtained_marks = [];
        $obtained_percent = [];

        for($i=1;$i <=8; $i++){
            $lesson = Lesson::where('course_list_id',$course_id)->where('course_module_id',1)->where('unit_id',$i)->get();
            $quiz_marks_sum =0;
            $quiz_obtain_sum = 0;
            foreach($lesson as $less){
                $quiz_marks_sum += Quiz::where('lesson_id',$less->id)->sum('marks');
                $quiz_obtain_sum += QuizSubmission::where('lesson_id',$less->id)->where('user_id',$user_id)->sum('marks_obtained');
            }
            $quiz_marks[$i] =$quiz_marks_sum;
            $obtained_marks[$i] = ceil($quiz_obtain_sum);
            $obtained_percent[$i] = ceil(percentageCalculation($obtained_marks[$i],  $quiz_marks[$i]));
        }

        return response()->json(["quiz_marks"=>$quiz_marks,"obtained_marks"=>$obtained_marks,"percentage"=>$obtained_percent],201);
    }

       // Listening progress chart //
    public function listeningProgress(Request $request){
        $course_id = $request->input('course_id');
        $user_id = auth()->user()->id;

        $quiz_marks = [];
        $obtained_marks = [];
        $obtained_percent = [];

        for($i=1;$i <=8; $i++){
            $lesson = Lesson::where('course_list_id',$course_id)->where('course_module_id',2)->where('unit_id',$i)->get();
            $quiz_marks_sum =0;
            $quiz_obtain_sum = 0;
            foreach($lesson as $less){
                $quiz_marks_sum += Quiz::where('lesson_id',$less->id)->sum('marks');
                $quiz_obtain_sum += QuizSubmission::where('lesson_id',$less->id)->where('user_id',$user_id)->sum('marks_obtained');
            }
            $quiz_marks[$i] =$quiz_marks_sum;
            $obtained_marks[$i] = ceil($quiz_obtain_sum);
            $obtained_percent[$i] = ceil(percentageCalculation($obtained_marks[$i],  $quiz_marks[$i]));
        }

        return response()->json(["quiz_marks"=>$quiz_marks,"obtained_marks"=>$obtained_marks,"percentage"=>$obtained_percent],201);
    }

    public function grammarProgress(Request $request){
        $course_id = $request->input('course_id');
        $user_id = auth()->user()->id;

        $quiz_marks = [];
        $obtained_marks = [];
        $obtained_percent = [];

        for($i=1;$i <=8; $i++){
            $lesson = Lesson::where('course_list_id',$course_id)->where('course_module_id',5)->where('unit_id',$i)->get();
            $quiz_marks_sum =0;
            $quiz_obtain_sum = 0;
            foreach($lesson as $less){
                $quiz_marks_sum += Quiz::where('lesson_id',$less->id)->sum('marks');
                $quiz_obtain_sum += QuizSubmission::where('lesson_id',$less->id)->where('user_id',$user_id)->sum('marks_obtained');
            }
            $quiz_marks[$i] =$quiz_marks_sum;
            $obtained_marks[$i] = ceil($quiz_obtain_sum);
            $obtained_percent[$i] = ceil(percentageCalculation($obtained_marks[$i],  $quiz_marks[$i]));
        }

        return response()->json(["quiz_marks"=>$quiz_marks,"obtained_marks"=>$obtained_marks,"percentage"=>$obtained_percent],201);
    }

    public function vocabularyProgress(Request $request){
        $course_id = $request->input('course_id');
        $user_id = auth()->user()->id;

        $quiz_marks = [];
        $obtained_marks = [];
        $obtained_percent = [];

        for($i=1;$i <=8; $i++){
            $lesson = Lesson::where('course_list_id',$course_id)->where('course_module_id',6)->where('unit_id',$i)->get();
            $quiz_marks_sum =0;
            $quiz_obtain_sum = 0;
            foreach($lesson as $less){
                $quiz_marks_sum += Quiz::where('lesson_id',$less->id)->sum('marks');
                $quiz_obtain_sum += QuizSubmission::where('lesson_id',$less->id)->where('user_id',$user_id)->sum('marks_obtained');
            }
            $quiz_marks[$i] =$quiz_marks_sum;
            $obtained_marks[$i] = ceil($quiz_obtain_sum);
            $obtained_percent[$i] = ceil(percentageCalculation($obtained_marks[$i],  $quiz_marks[$i]));
        }

        return response()->json(["quiz_marks"=>$quiz_marks,"obtained_marks"=>$obtained_marks,"percentage"=>$obtained_percent],201);
    }




}
