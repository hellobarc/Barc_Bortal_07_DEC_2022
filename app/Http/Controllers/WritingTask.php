<?php

namespace App\Http\Controllers;

use App\Models\WritingQuestion;
use Illuminate\Http\Request;

class WritingTask extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return WritingQuestion::with('course')->with('unit')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $form_data = $request->input();

        $course_id          =  $form_data['course_id'];
        $unit_id      =  $form_data['unit_id'];
        $title      =  $form_data['title'];
        $task_serial      =  $form_data['task_serial'];
        $description      =  $form_data['description'];
        $study_minutes      =  $form_data['study_minutes'];
               // CHeck unique ness //
         $lesson_unique  = WritingQuestion::where('course_list_id',$course_id)->where('title',$title)->count();

         $message = "Writing Task Aleady Exist with same course and same Title";
 
         if($lesson_unique){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{
            WritingQuestion::create([
                'title'=> $title,
                'description'=> $description,
                'task_serial'=> $task_serial,
                'course_list_id'=>$course_id,
                'course_unit_id'=> $unit_id,
                'study_minutes'=>$study_minutes,
                'image'=>'reading'
            ]);
            $message = "Task  successfully Created";
            return response()->json(["status"=>"success","message"=>$message],201);
         }
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
        //
    }
}
