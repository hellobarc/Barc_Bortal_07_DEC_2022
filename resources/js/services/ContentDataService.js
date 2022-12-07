import http from "../http-common";

class ContentDataService{

    allLesson(token){
        return http.get('content/lesson',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    deleteLesson(id,token){
        return http.delete(`content/lesson/${id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    lessonByModule(module_id,token){
        return http.get(`content/lessonby_module?module_id=${module_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    lessonByModuleCourse(course_id,module_id,token){
        return http.get(`content/lessonby_module_course?module_id=${module_id}&&course_id=${course_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    allArticle(token){
        return http.get('content/article',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    addArticle(payload,token){
        return http.post(`content/article`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    updateArticle(id,payload,token){
        return http.put(`content/article/${id}`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    deleteArticle(id,token){
        return http.delete(`content/article/${id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    addTrack(payload,token){
        return http.post(`content/listeningrack`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    insertTrueFalse(payload,token){
        return http.post(`content/insert_truefalse`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    insertMultiplechoise(payload,token){
        return http.post(`content/insert_multiplechoise`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    insertFillblank(payload,token){
        return http.post(`content/insert_fillblank`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    insertReOrder(payload,token){
        return http.post(`content/insert_reorder`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    insertRadio(payload,token){
        return http.post(`content/insert_radio`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    insertDropDown(payload,token){
        return http.post(`content/insert_dropdown`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    contentStats(token){
        return http.get(`content/stats`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    quizList(lesson_id,token){
        return http.get(`content/quizbylesson?lesson_id=${lesson_id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    allQuizes(token){
        return http.get(`content/article`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    allListeningtrack(token){
        return http.get(`content/listeningrack`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    allTask(token){
        return http.get(`content/writingtask`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    addTask(payload,token){
        return http.post(`content/writingtask`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    deleteWritingTask(id,token){
        return http.delete(`content/lesson/${id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }



    deleteQuiz(id,token){
        return http.delete(`content/quiz/${id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }


}

export default new ContentDataService();
