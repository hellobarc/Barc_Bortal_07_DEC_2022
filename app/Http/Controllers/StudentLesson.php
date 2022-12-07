<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentLesson extends Controller
{
   public function lesson_result(Request $request){
        $lesson_id = $request->input('lesson_id');
        $blank_array =  array(
            'lesson_id'=>$lesson_id
        );
        return response()->json($blank_array,202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
   }
}
