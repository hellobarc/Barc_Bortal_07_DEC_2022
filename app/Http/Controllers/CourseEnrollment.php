<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\CourseEnrolled;

class CourseEnrollment extends Controller
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
        $form_data      = $request->input();

        $course_id       =  $form_data['course_id'];
        $user_id         =  $form_data['user_id'];
        $expired_date    =  $form_data['expired_date'];
        $status          =  $form_data['status'];
       
      

         $enroll_unique  = CourseEnrolled::where('user_id',$user_id)->count();

         $message = "This student already enroll this course";
 
         if($enroll_unique){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{
            CourseEnrolled::create([
                'course_id'=> $course_id,
                'user_id'=> $user_id,
                'expired_date'=> $expired_date,
                'status'=> $status,
                'purpose'=>'enrollment'
            ]);
            $message = "Course enrolled successfully !!";
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
        $particular_student_enrolled_course= CourseEnrolled::find($id);
      
        // $attended_student_information = $student_attended_show->get();
        return response()->json($particular_student_enrolled_course,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
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
        $enrolled_course_update= CourseEnrolled::find($id);

        $form_data = $request->input();

        $enrolled_course_update->expired_date              =  $form_data['expired_date'];
        $enrolled_course_update->status              =  $form_data['status'];
      
        $enrolled_course_update->save();
        $message = "Enrolled course has been updated successfully";
        return response()->json(["status"=>"success","message"=>$message],201);
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
