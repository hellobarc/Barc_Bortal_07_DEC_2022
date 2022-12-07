<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\Quiztruefalse;
use App\Models\QuizMultiplechoice;
use App\Models\QuizFillblank;
use App\Models\QuizReorder;
use App\Models\QuizRadio;
use App\Models\QuizDropdown;

class ContentQuiz extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Quiz::destroy($id);
        $this->destroyQuizAns($id);

        return response()->json(["status"=>"success","message"=>"Successfully Deleted"]);

    }

//CUSTOM Methods //
    public function insert_truefalse(Request $request){
        $form_data = $request->input();

        $quiz_insert = $this->insert_quiz($request);

        $insert_options = Quiztruefalse::create([
            'quiz_id'=> $quiz_insert,
            'correct_ans'=>$form_data['correct_ans'],
        ]);

        return response()->json(["status"=>"success","insert_id"=>$quiz_insert,"message"=>"Successfully Inserted"]);
    }


    public function insert_multiplechoise(Request $request){
        $form_data = $request->input();
        $quiz_insert = $this->insert_quiz($request);

        $input_multiples = $form_data['inputs_muilteple'] ;

        foreach($input_multiples as $multiple){

            $is_correct = 'no';

            if($multiple['iscorrect']==true){
                $is_correct = 'yes';
            }else{
                $is_correct = 'no';
            }

            $insert_options = QuizMultiplechoice::create([
                'quiz_id'=> $quiz_insert,
                'option_text'=> $multiple['value'],
                'is_correct'=>$is_correct,
            ]);

        }

        return response()->json(["status"=>"success","insert_id"=>$quiz_insert,"message"=>"Successfully Inserted"]);
    }



// Fill Blank //
    public function insert_fillblank(Request $request){
      $form_data = $request->input();
      $quiz_insert = $this->insert_quiz($request);
      $fill_blank =  $form_data['inputs_fillblank'];

      foreach( $fill_blank  as $content){

        $content_type = $content['element_type'];

        if($content_type=='text'){
            QuizFillblank::create(
                [
                'quiz_id'=>$quiz_insert,
                'text'=>$content['value'],
                'is_blank'=>'no'
                ]
            );
        }elseif($content_type=='input'){
            QuizFillblank::create(
                [
                'quiz_id'=>$quiz_insert,
                'is_blank'=>'yes',
                'blank_answer'=>$content['value'],
                ]
            );
        }elseif($content_type=='serial'){
            QuizFillblank::create(
                [
                'quiz_id'=>$quiz_insert,
                'is_blank'=>'no',
                'serial'=>$content['value'],
                ]
            );
        }

      }

        return response()->json(["status"=>"success","insert_id"=>$quiz_insert,"message"=>"Successfully Inserted"]);
    }


    public function insert_radio(Request $request){
        $form_data = $request->input();
        $quiz_insert = $this->insert_quiz($request);

        $inputs_radio = $form_data['inputs_radio'] ;

        foreach($inputs_radio as $multiple){

            $is_correct = 'no';

            if($multiple['iscorrect']==true){
                $is_correct = 'yes';
            }else{
                $is_correct = 'no';
            }

            $insert_options = QuizRadio::create([
                'quiz_id'=> $quiz_insert,
                'option_text'=> $multiple['value'],
                'is_correct'=>$is_correct,
            ]);

        }

        return response()->json(["status"=>"success","insert_id"=>$quiz_insert,"message"=>"Successfully Inserted"]);
    }


// Used in all function
    public function insert_reorder(Request $request){
        $form_data = $request->input();
        $quiz_insert = $this->insert_quiz($request);
        $inputs_reorder =  $form_data['inputs_reorder'];
        $total_item = count( $inputs_reorder );

        for($i=0; $i < $total_item ; $i++){
            $content = $inputs_reorder[$i]['value'];
            QuizReorder::create(
                [
                'quiz_id'=>$quiz_insert,
                'content_text'=>$content,
                'sort_order'=>$i,
                ]
            );
        }

        return response()->json(["status"=>"success","insert_id"=>$quiz_insert,"message"=>"Successfully Inserted"]);

    }

    public function insert_dropdown(Request $request){
        $form_data = $request->input();
        $quiz_insert = $this->insert_quiz($request);
        $inputs_dropdown =  $form_data['inputs_dropdown'];

        foreach( $inputs_dropdown  as $content){
          $content_type = $content['element_type'];

          if($content_type=='text'){
            QuizDropdown::create(
                 [
                    'quiz_id'=>$quiz_insert,
                    'text'=>$content['value'],
                    'is_dropdown'=>'no'
                ]
              );
          }elseif($content_type=='dropdown'){
            QuizDropdown::create(
                  [
                  'quiz_id'=>$quiz_insert,
                  'is_dropdown'=>'yes',
                  'correct_answer'=>$content['value'],
                  ]
              );
          }elseif($content_type=='serial'){
            QuizDropdown::create(
                  [
                  'quiz_id'=>$quiz_insert,
                  'is_dropdown'=>'no',
                  'serial'=>$content['value'],
                  ]
              );
          }

        }

          return response()->json(["status"=>"success","insert_id"=>$quiz_insert,"message"=>"Successfully Inserted Drop Down"]);

    }


    private function insert_quiz($request){

        $form_data = $request->input();

        $quiz_insert = Quiz::create([
                'lesson_id'=> $form_data['lesson_id'],
                'question'=>$form_data['question'],
                'instruction'=>"-",
                'quiz_type'=>$form_data['quiz_type'],
                'marks'=>$form_data['marks'],
                'time_limit'=>$form_data['time_limit'],
                'status'=> 'active'
        ]);

        return $quiz_insert->id;

    }


    public function quizbylesson(Request $request){
        $form_data = $request->input();
        $lesson_id =  $form_data[ 'lesson_id'];
        $quizlist =Quiz::where('lesson_id',$lesson_id)->get();
        return response()->json(["status"=>201,"quizlist"=>$quizlist]);
    }


    private function destroyQuizAns($id){
      //  QuizAnswer::where('quiz_id',$id)->delete();
        Quiztruefalse::where('quiz_id',$id)->delete();
        QuizDropdown::where('quiz_id',$id)->delete();
        QuizFillblank::where('quiz_id',$id)->delete();
        QuizMultiplechoice::where('quiz_id',$id)->delete();
        QuizRadio::where('quiz_id',$id)->delete();
        QuizReorder::where('quiz_id',$id)->delete();
    }




}
