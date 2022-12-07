import http from "../http-common";

class LessonDataService{

    retriveLesson(course_id,module_id,token){
        return http.get(`student/get_lesson?course_id=${course_id}&&module_id=${module_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    retriveReadingDetail(lesson_id,token){
        return http.get(`student/reading_lesson_detail?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveListeningDetail(lesson_id,token){
        return http.get(`student/listening_lesson_detail?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveListeningTrack(lesson_id,token){
        return http.get(`student/listening_track_by_lesson?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveVocabularyDetail(lesson_id,token){
        return http.get(`student/vocabulary_lesson_detail?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveGrammarDetail(lesson_id,token){
        return http.get(`student/grammar_lesson_detail?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    retriveQuizAnswer(quiz_id,quiz_type,token){
        return http.get(`student/quiz_answer?quiz_id=${quiz_id}&&quiz_type=${quiz_type}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveQuizRadio(quiz_id,quiz_type,token){
        return http.get(`student/quiz_radio?quiz_id=${quiz_id}&&quiz_type=${quiz_type}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveQuizInput(quiz_id,token){
        return http.get(`student/quiz_answer_input?quiz_id=${quiz_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveQuizInpurCorrectAns(quiz_id,token){
        return http.get(`student/quiz_answer_input_correct_ans?quiz_id=${quiz_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveQuizDropdown(quiz_id,token){
        return http.get(`student/quiz_answer_dropdown?quiz_id=${quiz_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveQuizOptionDropdown(quiz_id,token){
        return http.get(`student/quiz_option_dropdown?quiz_id=${quiz_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    retriveQuizReorder(quiz_id,token){
        return http.get(`student/quiz_reorder?quiz_id=${quiz_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }
    submitQuiz(payload,token){
        return http.post(`student/submit_quiz`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveQuizResult(payload,token){
        return http.post(`student/lesson_complete_detail`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    retriveWritingQuestion(course_id,token){
        return http.get(`student/writing_list?course_id=${course_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    writingQuestionDetail(quesiton_id,token){
        return http.get(`student/writing_question_detail?quesiton_id=${quesiton_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

   // Content Developer //
    addLesson(payload,token){
        return http.post(`content/lesson`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    lessonById(id,token){
        return http.get(`content/lesson/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    lessonResult(lesson_id,token){
        return http.get(`student/lesson_result?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    lessonReview(lesson_id,token){
        return http.get(`student/lesson_review?lesson_id=${lesson_id}`,{headers:{"Authorization" : `Bearer ${token}`}});
    }

    submitWritingTask(payload,token){
        return http.post(`student/submit_writing`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    myLearning(token){
        return http.get(`student/my_learning`,{headers:{"Authorization" : `Bearer ${token}`}});
    }




}

export default new LessonDataService();
