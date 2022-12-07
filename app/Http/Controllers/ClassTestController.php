<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClassTest;
use App\Models\ClasstestMarks;
use App\Models\UserProfile;

class ClassTestController extends Controller
{
    //

    public function create_test(Request $request){

        $form_data = $request->input();
        $test_name          =  $form_data['test_name'];
        $test_date      =  $form_data['date_of_test'];
        $module_id    =  $form_data['selected_module'];
        $batch_id    =  $form_data['selected_batch'];
        $unit_id    =  $form_data['selected_unit'];
        $type    =  'test';

       $test_create =  ClassTest::firstOrCreate([
                                        'test_name'=> $test_name ,
                                        'test_date'=>$test_date,
                                        'module_id'=> $module_id,
                                        'batch_id'=>  $batch_id,
                                        'unit_id'=> $unit_id,
                                        'type'=>  $type
                                    ]
                        );


        $class_test_id = $test_create->id;
        // Student der class test marks e entry dea

        $all_student_in_batch =  UserProfile::where('batch',$batch_id)->get();

        foreach($all_student_in_batch as $student){

                ClasstestMarks::firstOrCreate([
                    'class_test_id'=> $class_test_id ,
                    'student_id'=>$student->user_id,
                    'instructor_id'=> 4,
                    'marks'=>  0,
                    'status'=> 'pending',
                ]);

        }

        $message = "Class Test Successfully Created";
        return response()->json(["status"=>"success","message"=>$message]);
    }


    public function classtestList(){
        $class_test = ClassTest::with('batch')->withCount(['studentmarks'])->with('module')->get();
        return response()->json(['class_test'=>$class_test],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

 // Class Test Student //
    public function classTestStudent(Request $request){
        $test_id =  $request->input('test_id');
        $class_test = ClasstestMarks::where('class_test_id',$test_id)->get();

        foreach( $class_test as $test){
            $class_test_student[] = array(
                'student_name'=>  $test->student->name,
                'user_id'=>  $test->student->id,
                'student_id'=>  $test->student->userprofile->student_id,
                'marks'=>  $test->marks,
                'status'=>  $test->status,
            );
        }

        return response()->json(['class_test_student'=>$class_test_student],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


 // Update Test Marks //
    public function updateTestMarks(Request $request){
        $form_data = $request->input();
        $test_id = $form_data['test_id'];
        $student_id = $form_data['student_id'];
        $marks = $form_data['marks'];

        ClasstestMarks::where('class_test_id',$test_id)->where('student_id',$student_id)->update(['marks'=> $marks]);


        return response()->json(['message'=>'Successfully Updated'],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


    public function makeAbsentClasstest(Request $request){
        $form_data = $request->input();
        $test_id = $form_data['test_id'];
        $student_id = $form_data['student_id'];

        ClasstestMarks::where('class_test_id',$test_id)->where('student_id',$student_id)->update(['status'=> 'absent']);

        return response()->json(['message'=>'Successfully Updated'],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    public function makeExcludeClasstest(Request $request){
        $form_data = $request->input();
        $test_id = $form_data['test_id'];
        $student_id = $form_data['student_id'];

        ClasstestMarks::where('class_test_id',$test_id)->where('student_id',$student_id)->update(['status'=> 'absent']);

        return response()->json(['message'=>'Successfully Updated'],202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }



}
