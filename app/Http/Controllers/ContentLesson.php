<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ContentLessonResource;
use App\Models\Lesson;

class ContentLesson extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       // return response()->json(["status"=>"success"]);
        return ContentLessonResource::collection(Lesson::with('article')->get());
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        $form_data = $request->input();


        $course_id  =  $form_data['course_id'];
        $course_title  =  $form_data['lesson_title'];
        $lesson_description  =  $form_data['lesson_description'];
        $module_id  =  $form_data['module_id'];
        $unit_id  =     $form_data['unit_id'];
        $lesson_minutes  =     $form_data['lesson_minutes'];
        $lesson_hours  =     $form_data['lesson_hours'];

        // CHeck unique ness //
        $lesson_unique  = Lesson::where('course_list_id',$course_id)->where('course_module_id',$module_id)->where('title',$course_title)->count();

        $message = "Lesson Already Exist";

        if($lesson_unique){
            return response()->json(["status"=>"dulicate","message"=>$message]);
        }else{
                $create =  Lesson::create([
                    'course_list_id'=>$course_id,
                    'unit_id'=>$unit_id,
                    'course_module_id'=>$module_id,
                    'title'=>$course_title,
                    'description'=>$lesson_description,
                    'prerequisite'=>'-',
                    'template'=> $module_id,
                    'is_extra'=>'no',
                    'extrea_id'=>0,
                    'study_hour'=> $lesson_hours,
                    'study_minutes'=>$lesson_minutes
             ]);

            $message = "Lesson successfully Created";

            return response()->json(["status"=>"success","insert_id"=> $create->id,"message"=>$message]);

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

        return ContentLessonResource::collection(Lesson::where('id', $id)->with('unit')->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
    public function destroy(Lesson $lesson)
    {
        $message = "Lesson successfully Deleted";

        // Lesson destory korle er sathe related quizes and articles or Listening track delete korte hobe

        return response()->json(["status"=>"success","message"=>$message]);
    }

// Lesson_By_Module //
    public function lessonby_module(Request $request){
        $module_id = $request->input('module_id');
        return ContentLessonResource::collection(Lesson::where('course_module_id', $module_id)->where('course_list_id',1)->orderBy('id','DESC')->get());
    }

// Lesson by Module Course //
    public function lessonby_module_course(Request $request){
        $module_id  = $request->input('module_id');
        $course_id  = $request->input('course_id');
        if( $course_id == null){
            $course_id = 1;
        }

        return ContentLessonResource::collection(Lesson::where('course_module_id',$module_id)->where('course_list_id',$course_id)->orderBy('id','DESC')->get());
    }


}
