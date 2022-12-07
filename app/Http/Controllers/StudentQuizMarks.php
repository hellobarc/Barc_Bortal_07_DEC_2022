<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuizSubmission;
use App\Models\Quiz;
use Carbon\Carbon;
use DB;

class StudentQuizMarks extends Controller
{
    public function quiz_marks(){
        $user_id = 1;
      
        $date = Carbon::now()->subDays(7);
        // dd($date);
        $date_2 = $date->toDateString();
        // dd( $date_2);
        
        $submission = QuizSubmission::where('user_id', $user_id)->where('created_at', '>=', $date_2)->groupBy(function($item) {
            return $item->created_at->format('Y-m-d');
       })->get();
       
        $obtained_total = 0;
        $quiz_total_marks = 0;
        $blank_array = [];

        foreach($submission as $key => $submit){
            $quiz_id = $key->quiz_id;
            $quiz_sum = Quiz::where('id',$quiz_id)->sum('marks');
            //total quiz marks
            $quiz_total_marks +=$quiz_sum ;
            //total obtaine marks
            $obtained_total += $submit->marks_obtained;
            $percentage = $obtained_total * 100 / $quiz_total_marks;
            $percentage_with_2_decimal_places = number_format($percentage, 2);


            $blank_array[] = array(
                'date'=>$submit->created_at->toDateString(),
                'total_quiz_marks'=>$quiz_total_marks,
                'obtained_percetage'=>$percentage_with_2_decimal_places
            );
            
            
        }

       return response()->json($blank_array,202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        
        

     }

     public function percetate($obtained_marks,$total_marks){
        $percentage = 0;

        return $percentage;
     }

     


     /*

      // $quizmarks = Quiz::where('marks', $quiz)->get();
           // $total_marks += $quizmarks;
            $percentage = $submit/100*$total_marks;

            $blank_array[] = array(
                'date' =>$percentage
            );
            */
    //step-1: find user id
    //step-2: check which user submitted quiz
    //step-3: if match then fetch obtain marks
    //step-4: convert into percentage
    //step-5: catch quiz marks in quiz model
    // step-6 : compare
//=========================
// 1. $date = \Carbon\Carbon::today()->subDays(7);
        // $submission = QuizSubmission::sum('marks_obtained')->where('created_at', '>=', $date)->groupBy('created_at')->get();
// 2. 7 bar loop chalate hobe . Loop er modde marks then find the quiz id $total_marks += $quizmarks // Make the percentage 
 // 3. $blank[] = push korte hobe key=date , value=marks 


    
}
