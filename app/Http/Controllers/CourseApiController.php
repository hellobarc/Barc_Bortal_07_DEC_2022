<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseCategoryCollection;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Models\CourseList;
use App\Models\CourseModule;
use App\Models\CourseUnit;
use App\Models\CourseSection;
use App\Models\CourseEnrolled;
use App\Models\Lesson;
use App\Models\LessonLog;

class CourseApiController extends Controller
{

    public function courseCategory(){
        $category =  CourseCategory::all();
        return response()->json($category,202, [
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    public function courseList(){
        $course_list = CourseList::all();
        return response()->json($course_list,202, [
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    public function courseModule(){
        $course_module = CourseModule::all();
        return response()->json($course_module,202, [
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


    public function courseUnit(){
        $course_unit = CourseUnit::all();
        return response()->json($course_unit, 202,[
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }



// Enrolled Courses
    public function enrolled_courses(){
        $user_id = auth()->user()->id;
        $enrolled_courses = CourseEnrolled::where('user_id', $user_id)->get();

        $detailed_course = [];

        foreach($enrolled_courses as $courses){

            $array_value =[];

            $lesson = Lesson::where('course_list_id',$courses->courses->id)->select('id')->get();

            $lesson_array =  $lesson->toarray();

            foreach( $lesson_array as $val){
                array_push($array_value,$val['id']);
            }

            $lesson_ids = [];
            $completed_count = LessonLog::where('user_id',$user_id)->whereIn('lesson_id',$array_value)->select('lesson_id')->get();

            foreach( $completed_count as $values){
                array_push($lesson_ids,$values->lesson_id);
            }

          $count_val = array_count_values($lesson_ids);


          $completed_percentage = round(percentageCalculation(count($count_val),$lesson->count()));

            $detailed_course[] = array(
                'course_id' => $courses->courses->id,
                'course_name' => $courses->courses->course_name,
                'course_title' => $courses->courses->course_title,
                'course_description' => $courses->courses->short_description,
                'thumbnail' => $courses->courses->thumbnail,
                'category_name' => $courses->courses->course_categories->name,
                'lesson_count' => $lesson->count(),
                'completed_count' => count($count_val),
                'completed_percentage' => $completed_percentage,
            );
        }

        return response()->json($detailed_course,202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }


 // Course Detail //
    public function course_detail(Request $request){
        $user_id = auth()->user()->id;
        $course_id = $request->input('course_id');
        // Course Enrolled kora ase kina seta validation kore nite hobe//
        $course_detail = CourseList::find($course_id);

        return response()->json($course_detail,202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    public function course_info(Request $request){
        $course_id = $request->input('course_id');
        $total_minutes =  Lesson::where('course_list_id',$course_id )->sum('study_minutes');
        $total_lesson =  Lesson::count();

        return response()->json(['total_minutes'=>$total_minutes,"total_losson"=>$total_lesson],202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }



    // Enrolled Courses
    public function all_courses(){
        $user_id = auth()->user()->id;
        $enrolled_courses = CourseList::get();

        $detailed_course = [];

        foreach($enrolled_courses as $courses){

            $array_value =[];

            $lesson = Lesson::where('course_list_id',$courses->id)->select('id')->get();

            $lesson_array =  $lesson->toarray();

            foreach( $lesson_array as $val){
                array_push($array_value,$val['id']);
            }

            $lesson_ids = [];
            $completed_count = LessonLog::where('user_id',$user_id)->whereIn('lesson_id',$array_value)->select('lesson_id')->get();

            foreach( $completed_count as $values){
                array_push($lesson_ids,$values->lesson_id);
            }

          $count_val = array_count_values($lesson_ids);

          $is_enrolled = CourseEnrolled::where('user_id', $user_id)->where('course_id', $courses->id)->count();


       //   $completed_percentage = round(percentageCalculation(count($count_val),$lesson->count()));

            $detailed_course[] = array(
                'course_id' => $courses->id,
                'course_name' => $courses->course_name,
                'course_title' => $courses->course_title,
                'course_description' => $courses->short_description,
                'thumbnail' => $courses->thumbnail,
                'category_name' => $courses->course_categories->name,
                'lesson_count' => $lesson->count(),
                'is_enrolled' =>  $is_enrolled,
            );
        }

        return response()->json($detailed_course,202,['Content-Type' => 'application/json','Charset'=>'utf-8'],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }








}
