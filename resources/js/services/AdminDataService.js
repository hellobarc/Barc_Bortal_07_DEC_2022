import http from "../http-common";


class AdminDataService{

    addBatch(payload,token){
        return http.post('admin/batch',payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    allBatch(token){
        return http.get('admin/batch',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    addStudent(payload,token){
        return http.post('admin/student',payload,{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    allStudent(token){
        return http.get('admin/student',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }

    allAdviser(token){
        return http.get('admin/adviser',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }


    studentAttendance(token){
        return http.get('admin/adviser',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }


    createTest(payload,token){
        return http.post('admin/create-test',payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    classTestList(token){
        return http.get('admin/class_test_list',{ headers: {"Authorization" : `Bearer ${token}`,"Accept" : "application/json"} });
    }


    classTestStudent(test_id,token){
        return http.get(`admin/class_test_student?test_id=${test_id}`,{header: {"Authorization" : `Bearer ${token}`, "Accept" : "application/json"} });
    }

    updateClassTestMarks(payload,token){
        return http.post('admin/update_test_marks',payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    makeAbsentClasstest(payload,token){
        return http.post('admin/make-absent-classtest',payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }

    studentByBatch(batch_id,token){
        return http.get(`admin/student_by_batch?batch_id=${batch_id}`,{header: {"Authorization" : `Bearer ${token}`, "Accept" : "application/json"} });
    }

    // Make Attendance //
    makeAttendance(payload,token){
        return http.post('admin/student_make_attendance',payload,{ headers: {"Authorization" : `Bearer ${token}`} });
    }


    supportTickets(token){
        return http.get(`admin/support_ticket`,{header: {"Authorization" : `Bearer ${token}`, "Accept" : "application/json"} });
    }

    supportTickets(token){
        return http.get(`admin/notification`,{header: {"Authorization" : `Bearer ${token}`, "Accept" : "application/json"} });
    }


}

export default new AdminDataService();
