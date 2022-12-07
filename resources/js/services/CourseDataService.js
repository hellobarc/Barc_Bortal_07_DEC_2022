import http from "../http-common";

class CourseDataService{
    getEntolledCourses(header){
        return http.get('student/enrolled_courses',header);
    }

    getAllCourses(token){
        return http.get(`student/all_courses`,{headers:{"Authorization": `Bearer ${token}`}});
    }

    getCourseById(id,token){
        return http.get(`student/course_detail?course_id=${id}`,{ headers: {"Authorization" : `Bearer ${token}`, "Accept": "application/json"} });
    }

    getCourseInfoById(id,token){
        return http.get(`student/course_info?course_id=${id}`,{ headers: {"Authorization" : `Bearer ${token}`, "Accept": "application/json"} });
    }


    retriveReadingLesson(course_id){
        return http.get('student/reading_lesson'+course_id);
    }

}

export default new CourseDataService();
