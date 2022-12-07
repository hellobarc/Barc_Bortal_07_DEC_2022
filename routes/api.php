<?php

use App\Http\Controllers\ContentArticle;
use App\Http\Controllers\ContentListening;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseApiController;
use App\Http\Controllers\LessonApiController;
use App\Http\Controllers\ContentLesson;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ContentQuiz;
use App\Http\Controllers\ContentStats;
use App\Http\Controllers\ImageGalleryController;
use App\Http\Controllers\StudentStats;
use App\Http\Controllers\WritingTask;
use App\Http\Controllers\StudentBatches;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\Advisers;
use App\Http\Controllers\StudentAttendance;
use App\Http\Controllers\StudentsupportController;
use App\Http\Controllers\StudentProfile;
use App\Http\Controllers\ClassTestController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\ExamManage;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Public routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/test', [UserController::class, 'test']);

Route::post('/signup', [UserController::class, 'signup']);


Route::get('/coursecategory',[CourseApiController::class, 'courseCategory'])->name('course_category');
Route::get('/courselist',[CourseApiController::class, 'courseList'])->name('courselist');
Route::get('/coursemodule',[CourseApiController::class, 'courseModule'])->name('courselist');
Route::get('/courseunit',[CourseApiController::class, 'courseUnit'])->name('courseunit');
Route::get('/coursesection',[CourseApiController::class, 'courseSection'])->name('coursesection');

//Route::post('/logout',[LogoutController::class, 'logout'])->name('logout');

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('student/enrolled_courses',[CourseApiController::class,'enrolled_courses'])->name('enrolled_courses');
    Route::get('student/all_courses',[CourseApiController::class,'all_courses'])->name('all_courses');
    Route::get('student/course_detail',[CourseApiController::class,'course_detail'])->name('course_detail');
    Route::get('student/course_info',[CourseApiController::class,'course_info'])->name('course_info');
    Route::get('student/get_lesson',[LessonApiController::class,'get_lesson'])->name('get_lesson');
    Route::get('student/my_learning',[LessonApiController::class,'my_learning'])->name('my_learning');
    Route::get('student/reading_lesson_detail',[LessonApiController::class,'reading_lesson_detail'])->name('reading_lesson_detail');
    Route::get('student/vocabulary_lesson_detail',[LessonApiController::class,'vocabulary_lesson_detail'])->name('vocabulary_lesson_detail');
    Route::get('student/grammar_lesson_detail',[LessonApiController::class,'grammar_lesson_detail'])->name('grammar_lesson_detail');
    Route::get('student/quiz_answer',[LessonApiController::class,'quiz_answer'])->name('quiz_answer');
    Route::get('student/quiz_radio',[LessonApiController::class,'quiz_radio'])->name('quiz_radio');
    Route::get('student/quiz_answer_input',[LessonApiController::class,'quiz_answer_input'])->name('quiz_answer_input');
    Route::get('student/quiz_answer_input_correct_ans',[LessonApiController::class,'quiz_answer_input_correct_ans'])->name('quiz_answer_input_correct_ans');
    Route::get('student/quiz_option_dropdown',[LessonApiController::class,'quiz_option_dropdown'])->name('quiz_option_dropdown');
    Route::get('student/quiz_answer_dropdown',[LessonApiController::class,'quiz_answer_dropdown'])->name('quiz_answer_dropdown');
    Route::get('student/quiz_reorder',[LessonApiController::class,'quiz_reorder'])->name('quiz_reorder');
    Route::post('student/submit_quiz',[LessonApiController::class,'submit_quiz'])->name('submit_quiz');
    Route::get('student/listening_lesson_detail',[LessonApiController::class,'listening_lesson_detail'])->name('listening_lesson_detail');
    Route::get('student/listening_track_by_lesson',[LessonApiController::class,'listening_track_by_lesson'])->name('listening_track_by_lesson');
    Route::post('student/lesson_complete_detail',[LessonApiController::class,'lesson_complete_detail'])->name('lesson_complete_detail');
    Route::get('student/writing_list',[LessonApiController::class,'writing_list'])->name('writing_list');
    Route::get('student/writing_question_detail',[LessonApiController::class,'writing_question_detail'])->name('writing_question_detail');
    Route::post('student/submit_writing',[LessonApiController::class,'submit_writing'])->name('submit_writing');
    Route::get('student/stats',[StudentStats::class,'stats']);
    Route::get('student/lesson_review',[LessonApiController::class,'lesson_review'])->name('lesson_review');
    //Content Developer //
    Route::apiResource('content/quiz',ContentQuiz::class);
    Route::apiResource('content/lesson',ContentLesson::class);
    Route::get('content/lessonby_module',[ContentLesson::class,'lessonby_module']);
    Route::get('content/lessonby_module_course',[ContentLesson::class,'lessonby_module_course']);
    Route::apiResource('content/article',ContentArticle::class);
    Route::apiResource('content/listeningrack',ContentListening::class);
    Route::post('content/insert_truefalse',[ContentQuiz::class,'insert_truefalse']);
    Route::post('content/insert_multiplechoise',[ContentQuiz::class,'insert_multiplechoise']);
    Route::post('content/insert_fillblank',[ContentQuiz::class,'insert_fillblank']);
    Route::post('content/insert_reorder',[ContentQuiz::class,'insert_reorder']);
    Route::post('content/insert_radio',[ContentQuiz::class,'insert_radio']);
    Route::post('content/insert_dropdown',[ContentQuiz::class,'insert_dropdown']);
    Route::get('content/stats',[ContentStats::class,'stats']);
    Route::get('content/quizbylesson',[ContentQuiz::class,'quizbylesson']);
    Route::post('/logout', [LogoutController::class, 'logout']);
    // fetch all lesson
    Route::apiResource('student/attendence',ClassAttendences::class);
    Route::apiResource('user/profile',UserProfileControllers::class);
    Route::get('student/get_profile',[StudentProfile::class,'get_student_profile'])->name('get_student_profile');
    Route::post('student/set_profile',[StudentProfile::class,'set_student_profile'])->name('set_student_profile');
    Route::apiResource('course/enrollment',CourseEnrollment::class);
     //quiz marks in percentage minar
    Route::get('student/quiz-marks',[StudentQuizMarks::class,'quiz_marks'])->name('quiz_mark');

     // all writing //
    Route::apiResource('content/writingtask',WritingTask::class);

     // Fun
    Route::apiResource('album/gallery',ImageGalleryController::class);
    Route::get('fun/congratulation',[ImageGalleryController::class,'congratulation_image'])->name('fun.congratulation');

  //   Route::get('student/lesson_result',[StudentLesson::class,'lesson_result'])->name('lesson_result'); // Eta mone hou lagbe na hote pare aita  ==    Route::post('student/lesson_complete_detail',[LessonApiController::class,'lesson_complete_detail'])->name('lesson_complete_detail');

    Route::apiResource('admin/batch',StudentBatches::class);
    Route::apiResource('admin/student',StudentController::class);
    Route::apiResource('admin/adviser',Advisers::class);
    Route::apiResource('student/attendance',StudentAttendance::class);
    Route::apiResource('student/support',StudentsupportController::class);
    Route::post('student/change_password',[UserController::class,'change_password'])->name('change_password');

    //Minar created routes
    Route::post('student/attendance/download',[StudentAttendance::class,'attendanceExport'])->name('student.attendence.export');
    Route::post('student/attendance/list',[StudentAttendance::class,'attendanceList'])->name('student.attendence.list');
    Route::get('student/all/attendance/{student_id}',[StudentAttendance::class,'studentAttendance'])->name('student.attendence');
    Route::get('student/attendances/monthly',[StudentAttendance::class,'studentAttendanceMonthly'])->name('student.attendences.monthly');

    //Minar created routes

    // chart and stats
    Route::get('student/unitwise',[StudentStats::class,'unitwiseProgress'])->name('stats.unitwiseProgress');
    Route::get('student/reading_progress',[StudentStats::class,'readingProgress'])->name('stats.readingProgress');
    Route::get('student/listening_progress',[StudentStats::class,'listeningProgress'])->name('stats.listeningProgress');
    Route::get('student/grammar_progress',[StudentStats::class,'grammarProgress'])->name('stats.grammarProgress');
    Route::get('student/vocabulary_progress',[StudentStats::class,'vocabularyProgress'])->name('stats.vocabularyProgress');

    Route::post('admin/create-test',[ClassTestController::class,'create_test'])->name('create_test');
    Route::get('admin/class_test_list',[ClassTestController::class,'classtestList'])->name('classtest_list');
    Route::get('admin/class_test_student',[ClassTestController::class,'classTestStudent'])->name('class_test_student');
    Route::post('admin/update_test_marks',[ClassTestController::class,'updateTestMarks'])->name('update_test_marks');
    Route::post('admin/make-absent-classtest',[ClassTestController::class,'makeAbsentClasstest'])->name('make_absent_classtest');
    Route::post('admin/make-exclude-classtest',[ClassTestController::class,'makeExcludeClasstest'])->name('make_exclude_classtest');
    Route::get('admin/student_by_batch',[StudentController::class,'studentByBatch'])->name('studetn_by_batch');
    Route::post('admin/student_make_attendance',[StudentController::class,'makeAttendance'])->name('studetn_make_attendance');
    Route::get('admin/support_ticket',[SupportController::class,'support_ticket'])->name('support_ticket');

    Route::post('exam/create',[ExamManage::class,'createExam'])->name('exam.create_exam');
    Route::get('exam/all_exam',[ExamManage::class,'allExam'])->name('exam.all_exam');
    Route::post('exam/create_excersize',[ExamManage::class,'createExcersize'])->name('exam.create_excersize');
    Route::get('exam/all_excersize/{exam_id?}',[ExamManage::class,'allExcersize'])->name('exam.all_excersize');
    Route::get('exam/excersize_by_id/{excersize_id?}',[ExamManage::class,'excersizeByID'])->name('exam.excersize_by_id');
    Route::post('exam/add_article',[ExamManage::class,'addArticle'])->name('exam.add_article');

});

Route::get('fun/congratulation',[ImageGalleryController::class,'congratulation_image'])->name('fun.congratulation');
Route::get('fun/coffee',[ImageGalleryController::class,'coffee_image'])->name('fun.coffee');

Route::get('notification',[NotificationController::class,'notification'])->name('noficaction');
