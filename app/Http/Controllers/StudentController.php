<?php

namespace App\Http\Controllers;

use App\Models\CourseEnrolled;
use App\Models\CourseList;
use App\Models\StudentBatch;
use Illuminate\Http\Request;
use App\Models\UserProfile;
use App\Models\Attendance;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $student_get = User::where('role_id',5)->get();

       // dd( $student_get );
        $student_data=[];
        foreach($student_get as $student){
           $profile = UserProfile::where('user_id', $student->id)->get();
           $batch = StudentBatch::find($profile[0]->batch);
           $student_data[] =
                array(
                    'student_name'=> $student->name,
                    'batch_name'=>$batch->batch_name,
                    'phone'=>$profile[0]->phone ,
                    'batch_start'=>$batch->batch_start,
                    'batch_end'=>$batch->end_date,
                );
        }
        return response()->json($student_data,202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
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

        $validated = $request->validate([
            'email' => 'required|unique:users'
        ]);


        $city               =  $form_data['city'];
        $education          =  $form_data['education'];
        $fathers_name       =  $form_data['fathers_name'];
        $house              =  $form_data['house'];
        $mothers_name       =  $form_data['mothers_name'];
        $occupation         =  $form_data['occupation'];
        $phone              =  $form_data['phone'];
        $selected_batch     =  $form_data['selected_batch'];
        $road               =  $form_data['road'];
        $student_name       =  $form_data['student_name'];
        $subcity            =  $form_data['subcity'];
        $zip_code           =  $form_data['zip_code'];
        $email              =  $form_data['email'];
        $password           =  $form_data['password'];
        $date_of_birth      =  $form_data['date_of_birth'];
        $admission_date     =  $form_data['admission_date'];
        $student_id         =  $form_data['student_id'];
        $invoice_number =  $form_data['invoice_number'];



        $created = User::firstOrCreate([
                                'name'=>$student_name,
                                'role_id'=>5, // parent 6 // student 5 //  insturctor 4 // COntent developer 3 // Moderator 2 // Super admin 1
                                'email'=> $email ,
                                'password'=>Hash::make($password),
                            ]);

        UserProfile::firstOrCreate([
                                    'user_id'=>$created->id,
                                    'user_type'=>'student',
                                    'phone'=>$phone,
                                    'avatar'=>'-',
                                    'house'=> $house,
                                    'road'=> $road,
                                    'subcity'=>$subcity,
                                    'city'=>$city,
                                    'zip_code'=>$zip_code,
                                    'batch'=>$selected_batch,
                                    'fathers_name'=>$fathers_name,
                                    'mothers_name'=> $mothers_name,
                                    'education'=> $education ,
                                    'occupation'=>$occupation,
                                    'date_of_birth'=>$date_of_birth,
                                    'admission_date'=>$admission_date,
                                    'student_id'=>$student_id,
                                    'invoice_number'=>$invoice_number
                            ]);

        // Course Enroll kore dite hobe //

        $user_id =  $created->id;
        $course_id =  StudentBatch::find($selected_batch)->pluck('course_id')->first();
        $end_date =  StudentBatch::find($selected_batch)->pluck('end_date')->first();


        CourseEnrolled::firstOrCreate([
                        'course_id'=>$course_id,
                        'user_id'=>$user_id,
                        'status'=>'active',
                        'expired_date'=> $end_date
        ]);



        $message            = "Student Admitted Successfully";

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

// Studetn by Batch
    public function studentByBatch(Request $request){
        $batch_id =  $request->input('batch_id');
        $student_profile = UserProfile::where('batch',$batch_id)->get();

        foreach($student_profile as $student){
                $studetn_list[] = array(
                                        'user_id'=> $student->user_id,
                                        'student_id'=> $student->student_id,
                                        'student_name'=> $student->user->name
                                    );
        }

        return response()->json(["student_list"=>$studetn_list]);
    }

    public function makeAttendance(Request $request){
        $form_data = $request->input();
        $user_id =  auth()->user()->id;
        $date_attendance =  $form_data['date'];
        $date_formatted = Carbon::parse($date_attendance)->format('d-m-Y');
        $batch_id = $form_data['batch_id'];
        $status = $form_data['status'];
        $student_id = $form_data['student_id'];
        $unit = $form_data['unit'];
        Attendance::updateOrCreate(
                                    ['batch_id'=>$batch_id,'date'=> $date_formatted,'student_id'=> $student_id,'unit_id'=>$unit],
                                    ['student_id'=>$student_id,'date'=> $date_formatted,'unit_id'=>$unit,'user_id'=>$user_id ,'batch_id'=>$batch_id,'status'=>$status]
                                );
         return response()->json(["message"=>'Successfully Updated']);
    }


}
