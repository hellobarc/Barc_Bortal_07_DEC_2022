import http from "../http-common";

class ExamDataSErvice{
    createExam(payload,token){
        return http.post(`exam/create`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    allExam(token){
        return http.get('exam/all_exam',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    createExcersize(payload,token){
        return http.post(`exam/create_excersize`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    allExcersize(exam_id,token){
        return http.get(`exam/all_excersize?exam_id=${exam_id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    exsesizeByID(excersize_id,token){
        return http.get(`exam/excersize_by_id?excersize_id=${excersize_id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    addArticle(payload,token){
        return http.post(`exam/add_article`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    updateArticle(payload,token){
        return http.put(`exam/update_article`,payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

}

export default new ExamDataSErvice;
