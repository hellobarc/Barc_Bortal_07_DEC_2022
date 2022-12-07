<?php

namespace App\Http\Controllers;

use App\Models\CourseUnit;
use App\Models\CourseModule;
use Illuminate\Http\Request;
use App\Models\Lesson;
use App\Models\Article;
use App\Models\LessonLog;
use App\Models\Quiz;
use App\Models\QuizAnswer;
use App\Models\StudyLog;
use App\Models\QuizSubmission;
use App\Models\WritingQuestion;
use App\Models\QuizFillblank;
use App\Models\Quiztruefalse;
use App\Models\QuizMultiplechoice;
use App\Models\QuizReorder;
use App\Models\QuizRadio;
use App\Models\WritingSubmission;
use App\Models\ListeningTrack;
use App\Models\QuizDropdown;
use App\Models\CourseList;
use Illuminate\Support\Facades\DB;


class LessonApiController extends Controller
{

    // Reading Lesson //
    public function get_lesson(Request $request){
        $user_id = auth()->user()->id;
        $course_id = $request->input('course_id');
        $module_id = $request->input('module_id');
        $lesson_list = Lesson::where('course_list_id',$course_id)->where('course_module_id',$module_id)->get();
        $course = CourseList::find( $course_id);
        $lesson_data=[];


        foreach($lesson_list as $list){

            $lesson_data[] =  array(
                'lesson_id'=> $list->id,
                'course_list_id'=>$list->course_list_id,
                'unit_id'=>$list->unit_id,
                'unit_serial'=>$list->unit->unit_serial,
                'unit_name'=>$list->unit->unit_name,
                'course_module_id'=> $list->course_module_id,
                'title'=>$list->title,
                'description'=>$list->description,
                'study_minutes'=>$list->study_minutes,
                'is_extra'=>$list->is_extra,
                'extrea_id'=>$list->extrea_id,
                'template'=>$list->template
            );

        }

       // $lesson = array();

        foreach ($lesson_data as $key => $row)
        {
            $count[$key] = $row['unit_serial'];
        }

        array_multisort($count, SORT_ASC, $lesson_data);


        $serial = 0;
        $lesson_serial = 0;
        foreach($lesson_data as $list){
            $lesson_id =  $list['lesson_id'];
            $lesson_status = LessonLog::where('user_id', $user_id)->where('lesson_id',$lesson_id)->take(1)->orderBY('id','DESC')->pluck('status')->first();

            if($lesson_status!='submitted'){
                $serial++;
                $lesson_serial =  $serial;
            }else{
                $lesson_serial = 0;
            }

            $lesson_processed[] =  array(
                'lesson_id'=> $list['lesson_id'],
                'lesson_serial'=>   $lesson_serial,
                'course_list_id'=>$list['course_list_id'],
                'unit_id'=>$list['unit_id'],
                'unit_serial'=>$list['unit_serial'],
                'unit_name'=>$list['unit_name'],
                'course_module_id'=> $list['course_module_id'],
                'status'=>$lesson_status ,
                'title'=>$list['title'],
                'description'=>$list['description'],
                'study_minutes'=>$list['study_minutes'],
                'is_extra'=>$list['is_extra'],
                'extrea_id'=>$list['extrea_id'],
                'template'=>$list['template']
            );

        }

        //https://stackoverflow.com/questions/38116513/how-to-sort-an-assocoative-array-in-php-laravel

        return response()->json(['lesson_data'=>$lesson_processed,'course_data'=> $course],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


    // Je reading ta take akhon da uchit //
     public function reading_lesson_detail(Request $request){
        $user_id = auth()->user()->id;
        $lesson_id = $request->input('lesson_id');
        $lesson = Lesson::with('unit')->find($lesson_id);
        $article = Article::where('lesson_id',$lesson_id)->get();
        $quiz = Quiz::where('lesson_id',$lesson_id)->with(['quiztruefalse','quizMultiplechoice','quizfillblank','quizradio','quizreorder'])->get();
        // Log entry     ['user_id','lesson_id','status','quiz_id','quiz_submitted']
        LessonLog::updateOrCreate([
            'user_id'=>  $user_id,
            'lesson_id'=>  $lesson_id
        ],[ 'user_id'=>  $user_id,
        'lesson_id'=>  $lesson_id]);

        return response()->json(['lesson'=>$lesson,'article'=>$article,'quiz'=>$quiz],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     }

      // Je reading ta take akhon da uchit //
      public function vocabulary_lesson_detail(Request $request){
        $user_id = auth()->user()->id;
        $lesson_id = $request->input('lesson_id');
        $lesson = Lesson::find($lesson_id);
        $article = Article::where('lesson_id',$lesson_id)->get();
        $quiz = Quiz::where('lesson_id',$lesson_id)->with(['quiztruefalse','quizMultiplechoice','quizfillblank','quizradio','quizreorder'])->get();
        // Log entry     ['user_id','lesson_id','status','quiz_id','quiz_submitted']
        LessonLog::updateOrCreate([
            'user_id'=>  $user_id,
            'lesson_id'=>  $lesson_id
        ],[ 'user_id'=>  $user_id,
        'lesson_id'=>  $lesson_id]);

        return response()->json(['lesson'=>$lesson,'article'=>$article,'quiz'=>$quiz,'unit'=>$lesson->unit],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     }

     public function grammar_lesson_detail(Request $request){
        $user_id = auth()->user()->id;
        $lesson_id = $request->input('lesson_id');
        $lesson = Lesson::find($lesson_id);
        $article = Article::where('lesson_id',$lesson_id)->get();
        $quiz = Quiz::where('lesson_id',$lesson_id)->with(['quiztruefalse','quizMultiplechoice','quizfillblank','quizradio','quizreorder'])->get();
        // Log entry     ['user_id','lesson_id','status','quiz_id','quiz_submitted']
        LessonLog::updateOrCreate([
            'user_id'=>  $user_id,
            'lesson_id'=>  $lesson_id
        ],[ 'user_id'=>  $user_id,
        'lesson_id'=>  $lesson_id]);

        return response()->json(['lesson'=>$lesson,'article'=>$article,'quiz'=>$quiz,'unit'=>$lesson->unit],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     }



       // Je listening lesson ta study complete kore nai //
    public function listening_lesson_detail(Request $request){
        $user_id = auth()->user()->id;
        $lesson_id = $request->input('lesson_id');
        $lesson = Lesson::find($lesson_id);
        $article = [];
        $quiz = Quiz::where('lesson_id',$lesson_id)->with(['quiztruefalse','quizMultiplechoice','quizfillblank','quizradio','quizreorder'])->get();
        LessonLog::updateOrCreate([
            'user_id'=>  $user_id,
            'lesson_id'=>  $lesson_id
        ],[ 'user_id'=>  $user_id,
        'lesson_id'=>  $lesson_id]);

        return response()->json(['lesson'=>$lesson,'article'=>$article,'quiz'=>$quiz,'unit'=>$lesson->unit],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     }

    // Listening track
    public function listening_track_by_lesson(Request $request){
        $user_id = auth()->user()->id;
        $lesson_id = $request->input('lesson_id');
        $listening_track = ListeningTrack::where('lesson_id',$lesson_id)->get();
        return response()->json($listening_track,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }



// Quiz Answer//
     public function quiz_answer(Request $request){
        $user_id = auth()->user()->id;
        $quiz_id = $request->input('quiz_id');
        $quiz_type = $request->input('quiz_type');

        if($quiz_type==1){
            $lesson = Quiztruefalse::where('quiz_id',$quiz_id)->get();
        }else if($quiz_type==2){
            $lesson = QuizMultiplechoice::where('quiz_id',$quiz_id)->get();
        }

        return response()->json($lesson,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     }



     public function quiz_radio(Request $request){
        $user_id = auth()->user()->id;
        $quiz_id = $request->input('quiz_id');
        $lesson = QuizRadio::where('quiz_id',$quiz_id)->get();

        $lesson_data = [];

        foreach($lesson as $less){

            $lesson_data[] = array(
                'id'=> $less->id,
                'is_correct'=> $less->is_correct,
                'option_text'=> $less->option_text,
                'quiz_id'=> $less->quiz_id,
            );
        }


        return response()->json($lesson_data,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
     }


    // Quiz Answer for Input Text//
    public function quiz_answer_input(Request $request){
        $user_id = auth()->user()->id;
        $quiz_id = $request->input('quiz_id');
        $lesson = QuizFillblank::where('quiz_id',$quiz_id)->get();

        $lesson_data = [];

        $blank_serial =  0;

        foreach($lesson as $less){
             $lesson_data[] = array(
                                    'quiz_id'=>$less->quiz_id,
                                    'text'=>$less->text,
                                    'is_blank'=>$less->is_blank,
                                    'blank_answer'=>$less->blank_answer,
                                    'serial'=>$less->serial,
                                    'is_newline'=>$less->is_newline,
                                    'blank_serial'=>$blank_serial,
                                );

            if($less->is_blank=='yes'){
                $blank_serial++;
            }

        }

        return response()->json(['lesson_data'=>$lesson_data,'blank_count'=>$blank_serial],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    public function quiz_answer_input_correct_ans(Request $request){
        $user_id = auth()->user()->id;
        $quiz_id = $request->input('quiz_id');
        $correct_ans = QuizFillblank::where('quiz_id',$quiz_id)->where('blank_answer','!=',null)->select('blank_answer')->inRandomOrder()->get();
        return response()->json($correct_ans,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


// Quiz Answer Dropdown //
    public function quiz_answer_dropdown(Request $request){
        $user_id = auth()->user()->id;
        $quiz_id = $request->input('quiz_id');
        $lesson = QuizDropdown::where('quiz_id',$quiz_id)->get();
        $lesson_data = [];
        $ans_serial = 0;
        foreach( $lesson as $less){
            $original_ans =    explode("/",$less->correct_answer);
            $correct_ans = $original_ans[0];
            $lesson_data[] = array(
                                    'id' => $less->id,
                                    'quiz_id' =>  $less->quiz_id,
                                    'text' => $less->text,
                                    'is_dropdown'=>  $less->is_dropdown,
                                    'correct_answer'=>  stripslashes($correct_ans),
                                    'serial'=>  $less->serial,
                                    'is_newline'=> $less->is_newline,
                                    'ans_serial'=> $ans_serial,
                            );

           if($less->is_dropdown=='yes'){
             $ans_serial++;
           }
        }
        return response()->json($lesson_data,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


    public function quiz_option_dropdown(Request $request){
        $user_id = auth()->user()->id;
        $quiz_id = $request->input('quiz_id');
        $lesson = QuizDropdown::where('quiz_id',$quiz_id)->get();
        $lesson_data = [];
        $ans_serial = 0;
        foreach( $lesson as $less){
           // $original_ans =    explode("/",$less->correct_answer);
          //  $correct_ans = $original_ans[0];
            $lesson_data[] = array(
                                    'id' => $less->id,
                                    'quiz_id' =>  $less->quiz_id,
                                    'text' => $less->text,
                                    'is_dropdown'=>  $less->is_dropdown,
                                    'correct_answer'=>  $less->correct_answer,
                                    'serial'=>  $less->serial,
                                    'is_newline'=> $less->is_newline,
                                    'ans_serial'=> $ans_serial,
                            );

           if($less->is_dropdown=='yes'){
             $ans_serial++;
           }
        }
        return response()->json($lesson_data,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }



 public function quiz_reorder(Request $request){
    $user_id = auth()->user()->id;
    $quiz_id = $request->input('quiz_id');
    $lesson = QuizReorder::where('quiz_id',$quiz_id)->get();
    return response()->json($lesson,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
 }


// Quiz Submit //
     public function submit_quiz(Request $request){

        if($request->isMethod('post')){

            $user_id        = auth()->user()->id;
            $action_type    = $request->input('action_type');
            $quiz_id        = $request->input('quiz_id');
            $lesson_id      = $request->input('lesson_id');
            $quiz_answer_id = $request->input('selected_ans');
            $answer_text    = $request->input('answer_text');
            $quiz_type      = $request->input('quiz_type');
            $quiz_index     = $request->input('quiz_index');

            $time =  time();

            $quiz_info = Quiz::find($quiz_id);
            $marks =  $quiz_info->marks;
            $is_correct ='no';
            $answer_text = '';
            $marks_obtained = 0;


            if($lesson_id ==null){
                $lesson_id = $quiz_info->lesson_id;
            }

            $quiz_count = Quiz::where('lesson_id',$lesson_id)->count();

            if($quiz_index == $quiz_count ){
                $status = 'Completed';
            }else{
                $status = 'Submitted';
            }

            if($quiz_type==1){
                $quiz_ans_info = Quiztruefalse::where('quiz_id',$quiz_id)->get();

                if($quiz_answer_id == 1){
                    $selected = 1;
                    $answer_text = 'true';
                }else{
                    $selected = 2;
                    $answer_text = 'false';
                }


                if($quiz_ans_info[0]->correct_ans == $answer_text){
                    $marks_obtained =  $marks;
                    $is_correct="yes";
                }else{
                    $marks_obtained = 0;
                }
            }elseif($quiz_type==2){
                $quiz_ans_info = QuizMultiplechoice::find($quiz_answer_id);
                $is_correct =  $quiz_ans_info->is_correct;
                $answer_text =  $quiz_ans_info->option_text;
                if($is_correct=='yes'){
                    $marks_obtained =  $marks;
                    $is_correct="yes";
                }else{
                    $marks_obtained = 0;
                }
            }elseif($quiz_type==3){
                $is_correct =  'yes';
                $marks_obtained = 0;
                $ans_quantity = count($quiz_answer_id);
                $unit_marks =  $marks / $ans_quantity;
                $reorder_list = QuizReorder::where('quiz_id', $quiz_id)->get();
                for($i = 0 ; $i< $ans_quantity ; $i++ ){
                    if($reorder_list[$i]->id ==  $quiz_answer_id[$i]['id']){
                        $marks_obtained +=  $unit_marks;
                    }
                }
                $quiz_answer_id = 0;
                $answer_text =  json_encode($quiz_answer_id);
            }elseif($quiz_type==4){

            }elseif($quiz_type==5){
                $marks_obtained = 0;
                $ans_quantity = count($quiz_answer_id);
                $unit_marks =  $marks / $ans_quantity;
                $quiz_fill_blank = QuizFillblank::where('quiz_id', $quiz_id)->where('is_blank','yes')->get();
                $answer_text =  json_encode($quiz_answer_id);
                $ans_counter = 0;

                foreach($quiz_fill_blank as $correct_ans){
                    $original_ans =    explode("/",$correct_ans->blank_answer);

                    if( !empty($original_ans) ){
                        @$qans = $quiz_answer_id[$ans_counter];
                      //  dd( $qans );
                        $is_inans =  in_array( strtolower($qans), array_map('strtolower', $original_ans) );
                        if($is_inans){
                            $marks_obtained +=  $unit_marks;
                            $is_correct="yes";
                        }
                        $ans_counter++;
                    }else{
                        $is_correct="no";
                    }

                }

                $quiz_answer_id = 0;

            }elseif($quiz_type==6){ //selected_ans =quiz_answer_id
                $marks_obtained = 0;

                $quiz_drop_down = QuizDropdown::where('quiz_id', $quiz_id)->where('is_dropdown','yes')->get();

                $ans_quantity = count($quiz_drop_down);
                $unit_marks =  $marks / $ans_quantity;

                $answer_text =  json_encode($quiz_answer_id);

                $counter = 0;
                foreach($quiz_drop_down as $correct_ans){
                    $original_ans =    explode("/",$correct_ans->correct_answer	);
                    $correct_ans = $original_ans[0];
                    if(strtolower($correct_ans)==strtolower($quiz_answer_id[$counter])){
                        $marks_obtained +=  $unit_marks;
                        $is_correct="yes";
                    }
                    $counter++;
                }
                $quiz_answer_id = 0;
            }


            try{
                $lesson_log = LessonLog::where('user_id', $user_id)
                                                ->where('lesson_id', $lesson_id)
                                                ->updateOrCreate([
                                                'user_id'=>$user_id,
                                                'lesson_id'=>$lesson_id,
                                                'status'=> $status,
                                                'quiz_id'=> $quiz_id ,
                                                'quiz_submitted' =>  $quiz_index
                                            ]);

                $datas = array(
                    'user_id'=>$user_id,
                    'lesson_id'=>$lesson_id,
                    'quiz_id'=>$quiz_id,
                    'quiz_type'=>  $quiz_info->quiz_type,
                    'quiz_answer_id'=>$quiz_answer_id,
                    'answer_text'=>$answer_text,
                    'status'=> $is_correct,
                    'marks_obtained'=> $marks_obtained,
                    'log_id'=> $lesson_log->id
                    );

                 //   dd(  $datas);

                QuizSubmission::updateOrCreate(
                    ['user_id'=>$user_id,'quiz_id'=>$quiz_id],
                    $datas
                 );

                return response()->json(['user_id'=>$user_id,'quiz_id'=>$quiz_id],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

            }catch(\Exception $e){
                return response()->json(['user_id'=>$user_id,'quiz_id'=>$quiz_id,'message'=>"Rolled Back $e"],301,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            }

        }



    }


// Reading complete
    public function lesson_complete_detail(Request $request){
        if($request->isMethod('post')){

            $user_id = auth()->user()->id;
            $lesson_id = $request->input('lesson_id');

            $lesson = Lesson::with('unit')->find($lesson_id);
            $course_list_id = $lesson->course_list_id;

            $quiz_submission = QuizSubmission::where('user_id', $user_id)->whereIn('quiz_id',Quiz::select('id')->where('lesson_id', $lesson_id)->pluck('id'))->with('quiz')->get();

            $total_marks = 0;
            $obtained_marks = 0;

            foreach($quiz_submission as $submission){
                $total_marks += $submission->quiz->marks;
                $obtained_marks += $submission->marks_obtained;
            }

            $percent =   ($obtained_marks * 100) /  $total_marks;

            return response()->json(['coures_id'=> $course_list_id,'lesson'=>$lesson,'total_marks'=>  $total_marks,'obtained_marks'=>  $obtained_marks,'mark_percent'=>$percent],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        }
    }

// Writing List
    public function writing_list(Request $request){
        $user_id = auth()->user()->id;
        $course_id = $request->input('course_id');
        $writing_list = WritingQuestion::where('course_list_id', $course_id)->get();
        return response()->json(['coures_id'=> $course_id,'writing_list'=>$writing_list],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

// Writing Question Detail //
    public function writing_question_detail(Request $request){
        $user_id = auth()->user()->id;
        $question_id = $request->input('quesiton_id');
        $writing_list = WritingQuestion::find($question_id);
        // Check the submission
        $submission_data = [];
        $is_submit = 0;
        $check_submission = WritingSubmission::where('user_id',$user_id)->where('writing_question_id',$question_id)->get();
        if($check_submission->count()){
            $submission_data = $check_submission;
            $is_submit = 1;
        }
        return response()->json(["writing_question"=>$writing_list,"submission"=>$submission_data,"is_submit"=> $is_submit],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

// Submit Writing //
    public function submit_writing(Request $request){
        $user_id = auth()->user()->id;
        $input = $request->input();

       $create =  WritingSubmission::updateOrCreate(
                                    [
                                        'user_id'=> $user_id ,'writing_question_id'=>$input['writing_question_id']
                                    ],
                                    [
                                        'user_id'=> $user_id ,
                                        'writing_question_id'=>$input['writing_question_id'],
                                        'task_text'=>$input['task_text'],
                                        'time_used'=>$input['time_used']
                                    ]
                              );

        $message = "Writing task submitted successfully at " . $create->updated_at;

        return response()->json($message ,202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    public function lesson_review(Request $request){
        $user_id = auth()->user()->id;
        $lesson_id =  $request->input('lesson_id');
        $Lesson = Lesson::where('id',$lesson_id)->with(['unit','course'])->get();
        $obtained_marks = QuizSubmission::where('lesson_id',$lesson_id)->where('user_id',$user_id)->sum('marks_obtained');
        $quiz_marks = Quiz::where('lesson_id',$lesson_id)->sum('marks');

        $course_module_id = $Lesson[0]->course_module_id;

       // dd(  $course_module_id);

        $supplement = [];
        if($course_module_id==1){
            $supplement =  Article::where('lesson_id', $lesson_id)->get();
        }elseif($course_module_id==2){
            $supplement =  ListeningTrack::where('lesson_id', $lesson_id)->get();
        }


        $quizes = Quiz::where('lesson_id',$lesson_id)->get();

        $quiz_input = [];

        $result_dataset = [];
        foreach($quizes as $quiz){

                        //1= true false / 2 = QuizMultiplechoice // 3 QuizReorder // 5 QuizFillblank: //
            $quiz_id = $quiz->id;
            $quiz_type = $quiz->quiz_type;

            $my_submission_ans_id = QuizSubmission::where('quiz_id', $quiz_id)->where('user_id', $user_id )->pluck('quiz_answer_id')->first();

            if( $quiz_type==1){
                $question_type =  "True/False";
                $correct_answer = Quiztruefalse::where('quiz_id', $quiz_id)->pluck('correct_ans')->first();

                if($correct_answer=="true"){
                    $correct_id= 1;
                    $correct_ans = "TRUE";
                }else{
                    $correct_id= 2;
                    $correct_ans = "FALSE";
                }

                if( $my_submission_ans_id==1){
                    $myanswer= "TRUE";
                }else{
                    $myanswer= "FALSE";
                }

                if($my_submission_ans_id==$correct_id){
                    $is_correct=  "correct";
                }else{
                    $is_correct=  "incorrect";
                }

            }elseif($quiz_type==2){
                $question_type =  "Multiple Chosie";
                $correct_ans = QuizMultiplechoice::where('quiz_id', $quiz_id)->where('is_correct','yes')->pluck('option_text')->first();
                $correct_id = QuizMultiplechoice::where('quiz_id', $quiz_id)->where('is_correct','yes')->pluck('id')->first();


                $Find_my_ans= QuizMultiplechoice::find($my_submission_ans_id);
                $myanswer =   $Find_my_ans->option_text;
             //   $my_ans_id =   $Find_my_ans->id;

                if($my_submission_ans_id==$correct_id){
                    $is_correct=  "correct";
                }else{
                    $is_correct=  "incorrect";
                }

            }elseif($quiz_type==3){
                $question_type =  "Re- Order";
                $correct_ans = QuizReorder::where('quiz_id', $quiz_id)->pluck('content_text')->first();
                $correct_id = QuizReorder::where('quiz_id', $quiz_id)->pluck('id')->first();

                $Find_my_ans= QuizReorder::find($my_submission_ans_id);
                $myanswer =   $Find_my_ans->option_text;
             //   $my_ans_id =   $Find_my_ans->id;

                if($my_submission_ans_id==$correct_id){
                    $is_correct=  "correct";
                }else{
                    $is_correct=  "incorrect";
                }

            }elseif($quiz_type==4){
                $question_type =  "Correct Option";
                $correct_ans = QuizRadio::where('quiz_id', $quiz_id)->where('is_correct','yes')->pluck('option_text')->first();
                $correct_id = QuizRadio::where('quiz_id', $quiz_id)->where('is_correct','yes')->pluck('id')->first();


                $Find_my_ans= QuizRadio::find($my_submission_ans_id);
                $myanswer =   $Find_my_ans->option_text;
             //   $my_ans_id =   $Find_my_ans->id;

                if($my_submission_ans_id==$correct_id){
                    $is_correct=  "correct";
                }else{
                    $is_correct=  "incorrect";
                }

            }elseif($quiz_type==5){
                $question_type =  "Fill Blank";
                $correct_answer = QuizFillblank::where('quiz_id', $quiz_id)->get();
                $correct_ans=[];

                $counter = 0;
                foreach( $correct_answer as $cor_ans){
                    $correct_ans[] = array(
                            'text'=>$cor_ans->text,
                            'is_blank'=>$cor_ans->is_blank,
                            'blank_answer'=>$cor_ans->blank_answer,
                            'serial'=>$cor_ans->serial,
                            'is_newline'=>$cor_ans->is_newline,
                            'counter'=>$counter,
                    );

                    if($cor_ans->is_blank=="yes"){
                        $counter++;
                    }
                }

                $correct_id = QuizFillblank::where('quiz_id', $quiz_id)->pluck('id')->first();
                $myanswer =   QuizSubmission::where('quiz_id', $quiz_id)->where('user_id', $user_id )->pluck('answer_text')->first();
                $is_correct=  "optional";

            }elseif($quiz_type==6){
                $question_type =  "Drop Down";
                $correct_ans = QuizDropdown::where('quiz_id', $quiz_id)->pluck('correct_answer')->first();
                $correct_id = QuizDropdown::where('quiz_id', $quiz_id)->pluck('id')->first();
                $correct_ans = explode('/',$correct_ans)[0];
                $myanswer =   QuizSubmission::where('quiz_id', $quiz_id)->where('user_id', $user_id )->pluck('answer_text')->first();
                $is_correct=  "optional";
            }else{
                $question_type =  "Masitese";
                $correct_ans = "asitese";
                $correct_id = QuizMultiplechoice::where('quiz_id', $quiz_id)->where('is_correct','yes')->pluck('id')->first();

                $myanswer = "asitese";
                $is_correct=  "incorrect";
            }

            $result_dataset[] = array(
                'quiz_quesiton'=> $quiz->question,
                'quiz_id'=>  $quiz_id ,
                'quiz_type'=>  $quiz_type ,
                'question_type'=>  $question_type ,
                'marks'=> $quiz->marks,
                'my_ans'=> $myanswer ,
                'correct_ans'=> $correct_ans,
                'is_correct'=> $is_correct,
            );
        }

       // dd( $obtained_marks);
       $pecent =  percentageCalculation( $obtained_marks,  $quiz_marks);
        return response()->json(['lesson'=> $Lesson ,'supplement'=> $supplement,'obtained_marks'=>$obtained_marks ,'quiz_marks'=>$quiz_marks,'percent'=>  ceil($pecent), 'result_set'=> $result_dataset ],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


    // My learning
    public function my_learning(Request $request){
        $user_id = auth()->user()->id;
        $mylesson_list = QuizSubmission::where('user_id',$user_id)->groupBy('lesson_id')->get();
        $result_dataset =[];

        $total_average_percent_till =  0;
        $total_marks_till =  0;
        $total_marks_obtained_till =  0;


       foreach($mylesson_list as $lesson){
            $lesson_id = $lesson->lesson_id;
            $total_marks = Quiz::where('lesson_id',$lesson_id)->sum('marks');
            $marks_obtained = QuizSubmission::where('lesson_id',$lesson_id)->where('user_id',$user_id)->sum('marks_obtained');

            $module_name =  CourseModule::find($lesson->lesson->course_module_id)->pluck('module_name')->first();

            $total_marks_obtained_till += $marks_obtained;
            $total_marks_till +=   $total_marks;

            $marks_percent = ceil(percentageCalculation($marks_obtained, $total_marks));

            $result_dataset[] = array(
                'lesson'=> $lesson->lesson,
                'course'=> $lesson->lesson->course,
                'course_unit'=> $lesson->lesson->unit,
                'module_name'=> $module_name,
                'marks_obtained'=>  $marks_obtained,
                'total_marks'=> $total_marks,
                'marks_percent'=>  $marks_percent,
            );
        }

        $total_average_percent_till =ceil(percentageCalculation($total_marks_obtained_till, $total_marks_till));

        return response()->json(['my_learning'=>$result_dataset,"total_marks_obtained_till"=>$total_marks_obtained_till,"total_marks_till"=>$total_marks_till,"total_average_percent_till"=>$total_average_percent_till],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


}
