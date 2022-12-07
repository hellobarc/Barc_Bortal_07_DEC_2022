import http from "../http-common";

class BasicDataService{

    allCourse(){
        return http.get('courselist',{ headers: {"Accept" : "application/json"} });
    }


    getCongratulationPic(){
        return http.get('fun/congratulation',{ headers: {"Accept" : "application/json"} });
    }

    getCoffeePic(){
        return http.get('fun/coffee',{ headers: {"Accept" : "application/json"} });
    }

    moduleName(module_id){
       if(module_id==1){
            return "Reading";
        }else if(module_id==2){
            return "Listening";
        }else if(module_id==3){
            return "Writing";
        }else if(module_id==4){
            return "Speaking";
        }else if(module_id==5){
            return "Grammar";
        }else if(module_id==6){
            return "Vocabulary";
        }else{
            return "Unknown";
        }
    }


}

export default new BasicDataService();
