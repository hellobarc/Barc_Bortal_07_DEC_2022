<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentSupport;

class StudentsupportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $student_id = auth()->user()->id;
        $support_data = StudentSupport::where("student_id",$student_id)->get();
        return response()->json(["status"=>"success","support_data"=>$support_data],201);
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

        $subject =  $form_data['subject'];
        $message =  $form_data['message'];

        $user_id = auth()->user()->id;


       $Profile_update =  StudentSupport::create(
            [
                'student_id'=>$user_id,
                'user_id'=>$user_id,
                'subject'=>$subject ,
                'message'=> $message ,
                'type'=>'message',
                'status'=>'open'
            ]
        );

        return response()->json(["status"=>"success"],201);
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
