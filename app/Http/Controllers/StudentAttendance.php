<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Attendance;
use App\Models\StudentBatch;
use App\Models\ClassTest;
use App\Models\UserProfile;
use App\Exports\StudentAttendanceExport;
use Excel;

class StudentAttendance extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $user_id = auth()->user()->id;
       $attendance =  Attendance::where("student_id",$user_id )->with('batch')->get();

       $att = [];

       foreach( $attendance as $attend){
            $att = array(
                            'student_id'=>$attend->student_id,
                            'date'=>$attend->date,
                            'unit_id'=>$attend->unit_id,
                            'user_id'=>$attend->user_id,
                            'course_id'=>$attend->course_id,
                            'batch_id'=>$attend->batch_id,
                            'status'=>$attend->status,
                            'delay_minutes'=>$attend->delay_minutes
                        );
       }

       return response()->json(['attendance'=>$attendance ],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
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
        //
    }

    public function attendanceExport(Request $request)
    {

        $studentId = $request->student_id;
        $batchId = $request->batch_id;
        $date = $request->date;
        $con = strtotime($date);
        $users = User::where('id', $studentId)->select('name')->get();
        $batch = StudentBatch::where('id', $batchId)->select('batch_name')->first();
        $date = Attendance::where('date', $date)->get();
        $storePath1 = $studentId.'-'.$batchId.'-'.$con.'.xlsx';
        $storePath = $studentId.'-'.$batchId.'-'.$con. '-'.rand(10,1000).'.xlsx';
      //  $exportStudent =  (new StudentAttendanceExport($studentId, $batchId, $date))->store('student_attendance.xlsx');
        if(file_exists(public_path('attendance/'.$storePath1))){
            $exportStudent = Excel::store(new StudentAttendanceExport($studentId, $batchId, $date), 'attendance/'.$storePath, 'real_public');
        }else{
        $exportStudent = Excel::store(new StudentAttendanceExport($studentId, $batchId, $date), 'attendance/'.$storePath1, 'real_public');
        }

        return response()->json(['exportStudent'=>$exportStudent],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    }

    public function attendanceList(Request $request)
    {
        $batchId = $request->batch_id;
        //$date = $request->date->format('d-m-Y');
        $date = \Carbon\Carbon::parse($request->date)->format('d-m-Y');
        $attendenceStudent = Attendance::where('batch_id', $batchId)->where('date', $date)->with('batch')->get();
        $allStudent = [];
        $student_id=[];
        foreach($attendenceStudent as $rows)
        {
            $student_id[] = $rows->student_id;
        }

        $allStudent = UserProfile::where('batch', $batchId)->whereNotIn('user_id', $student_id)->with('user')->get();

        $classTest = ClassTest:: where('batch_id', $batchId)->with('studentmarks')->get();
        $allInfo = [
            'attendenceStudent' => $attendenceStudent,
            'classTest' => $classTest,
            'allStudent' => $allStudent,
        ];
        return response()->json($allInfo,202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }




    public function studentAttendance(Request $request, $student_id)
    {
        $attendance = Attendance::where('student_id', $student_id)->with('batch', 'student')->get();
        return response()->json(['attendance'=>$attendance],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); 
    }
    public function studentAttendanceMonthly(Request $request)
    {
        $batchId = $request->batch_id;
        $monthId = $request->month_id;
        $monthlyAttendance = Attendance::where('batch_id', $batchId)->whereMonth('created_at', '=', $monthId)->get();
        return response()->json(['monthlyAttendance'=>$monthlyAttendance],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); 
    }
}
