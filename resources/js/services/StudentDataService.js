import http from "../http-common";

class StudentDataService{
    studentStats(token){
        return http.get(`student/stats`,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    get_profile(token){
        return http.get(`student/get_profile`,{headers:{"Authorization": `Bearer ${token}`}});
    }

    set_profile(payload,token){
        return http.post(`student/set_profile`,payload,{headers:{"Authorization": `Bearer ${token}`}});
    }

    changePassword(payload,token){
        return http.post(`student/change_password`,payload,{headers:{"Authorization": `Bearer ${token}`}});
    }

    studentAttendance(token){
        return http.get(`student/attendance`,{headers:{"Authorization": `Bearer ${token}`}});
    }


    unitwiseProgress(course_id,token){
        return http.get(`student/unitwise?course_id=${course_id}`,{headers:{"Authorization": `Bearer ${token}`}});
    }

    readingProgress(course_id,token){
        return http.get(`student/reading_progress?course_id=${course_id}`,{headers:{"Authorization": `Bearer ${token}`}});
    }

    listeningProgress(course_id,token){
        return http.get(`student/listening_progress?course_id=${course_id}`,{headers:{"Authorization": `Bearer ${token}`}});
    }


    grammarProgress(course_id,token){
        return http.get(`student/grammar_progress?course_id=${course_id}`,{headers:{"Authorization": `Bearer ${token}`}});
    }

    vocabularyProgress(course_id,token){
        return http.get(`student/vocabulary_progress?course_id=${course_id}`,{headers:{"Authorization": `Bearer ${token}`}});
    }


    studentSupoortTickets(token){
        return http.get(`student/support`,{headers:{"Authorization": `Bearer ${token}`}});
    }

    studentSupportOpenTicket(payload,token){
        return http.post(`student/support`,payload,{headers:{"Authorization": `Bearer ${token}`}});
    }

    studentNotification(token){
        return http.get(`notification`,{headers:{"Authorization": `Bearer ${token}`}});
    }

}

export default new StudentDataService;
