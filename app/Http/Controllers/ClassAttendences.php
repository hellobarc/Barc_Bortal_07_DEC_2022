<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Models\Attendence;
use App\Models\Attendance;

class ClassAttendences extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = auth()->user()->id;
        $attendence_all_list = Attendance::all();
        return response()->json($attendence_all_list,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
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

        $student_id         =  $form_data['student_id'];
        $date               =  $form_data['date'];
        $course_id          =  $form_data['course_id'];
        $unit_id            =  $form_data['unit_id'];
        $user_id            =  $form_data['user_id'];

    //    $at = new Attendance();
    //    dd($at);
         $attendence_unique  = Attendance::where('date',$student_id)->count();

         $message = "This student already attend today";
 
         if($attendence_unique){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{
            Attendance::create([
                'student_id'=> $student_id,
                'date'=> $date,
                'course_id'=> $course_id,
                'unit_id'=> $unit_id,
                'user_id'=> $user_id,
                'purpose'=>'attendence'
            ]);
            $message = "Attendence successfully Created";
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
        $student_attended_show = Attendance::find($id);
      
        // $attended_student_information = $student_attended_show->get();
        return response()->json($student_attended_show,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
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
