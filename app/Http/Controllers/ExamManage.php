<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Exam;
use App\Models\ExamExcersize;
use App\Models\ExamArticle;

class ExamManage extends Controller
{

    public function createExam(Request $request){
        if ($request->method()=="POST")
		{
       		$data = $request->input();

            $exam_name = $data['exam_name'];
            $course_id = $data['course_id'];
            $exam_type = $data['exam_type'];

            Exam::create([
                            'exam_name'=> $exam_name,
                            'course_id'=> $course_id,
                            'exam_type'=> $exam_type,
                            'user_id'=>1
                        ]);

            $message = "Exam Created successfully !!";
            return response()->json(["status"=>"success","message"=>$message],201);

        }
    }


    public function allExam(){
        $exam_list  = Exam::with('course')->get();
        return response()->json(["exam_list"=>$exam_list],201);
    }

// Create Excersize //
    public function createExcersize(Request $request){
        if($request->method()=="POST"){
            $data = $request->input();

            $exam_id = $data['exam_id'];
            $excersize_name = $data['excersize_name'];
            $excersize_module = $data['excersize_module'];
            $time_limit = $data['time_limit'];

            ExamExcersize::create([
                        'exam_id'=> $exam_id,
                        'excersize_name'=> $excersize_name,
                        'excersize_module'=> $excersize_module,
                        'time_limit'=> $time_limit
            ]);

            $message = "Excersize Created successfully !!";
            return response()->json(["status"=>"success","message"=>$message],201);

        }
    }

 // Get Excersize //
    public function allExcersize(Request $request){
        $exam_id = $request->exam_id;
        $exam_list  = ExamExcersize::where('exam_id', $exam_id)->get();
        return response()->json(["exam_list"=>$exam_list],201);
    }

// Excersize By ID //
    public function excersizeByID(Request $request){
        $excersize_id = $request->excersize_id;
        $excersize  = ExamExcersize::find($excersize_id);
        return response()->json(["excersize"=>$excersize],201);
    }


// Add Aricle to Exam excersize//
    public function addArticle(Request $request){
        $form_data = $request->input();
        $excersize_id       =  $form_data['excersize_id'];
        $article_title      =  $form_data['article_title'];
        $article_content    =  $form_data['article_content'];

         // CHeck unique ness //
         $article_unique  = ExamArticle::where('excersize_id',$excersize_id)->count();
         $message = "Article  Already Exist in this Excesize please Update or Delete";

         if($article_unique){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{
            ExamArticle::create([
                'exam_id'=> $excersize_id,
                'title'=> $article_title,
                'content'=> $article_content
            ]);
            $message = "Article successfully Created for Excersize";
            return response()->json(["status"=>"success","message"=>$message],201);
         }
    }



}
