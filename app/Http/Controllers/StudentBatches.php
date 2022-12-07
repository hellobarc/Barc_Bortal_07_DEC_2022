<?php

namespace App\Http\Controllers;

use App\Models\StudentBatch;
use Illuminate\Http\Request;

class StudentBatches extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StudentBatch::get();
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
        $batch_name      =  $form_data['batch_name'];
        $start_date    =  $form_data['start_date'];
        $end_date    =  $form_data['end_date'];

        StudentBatch::firstOrCreate([
                                        'course_id'=> $course_id,
                                        'batch_name'=> $batch_name,
                                        'start_date'=> $start_date,
                                        'end_date'=> $end_date,
                                        'status'=>'active'
                                    ]
                        );

        $message = "Batch Successfully Created";

        return response()->json(["status"=>"success","message"=>$message]);

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
