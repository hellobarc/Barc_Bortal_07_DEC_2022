import http from "../http-common";

class AuthenticationService{

    authenticate(payload){
        return http.post(`login`,payload,{ headers: {"Accept" : "application/json"} });
    }


    logout(payload,token){
        return http.post(`logout`,payload,{ headers: {"Authorization" : `Bearer ${token}`},"Accept" : "application/json" });
    }



}

export default new AuthenticationService();