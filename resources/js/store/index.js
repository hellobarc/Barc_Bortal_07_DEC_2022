import BASE_URL from "../config";
import { createStore } from "vuex";
import AuthenticationService from '../services/AuthenticationService';


const store = createStore({
    state(){
        return {
            isLogin: false,
            authToken: null,
            name: null ,
            role: null ,
            email: null ,
            isOnline: navigator.onLine,
            BASE_URL,
            module:['Reading','Listening','Writing','Speaking','Grammar','Vocabulary'],
        }
    },
    mutations: {
        login(state,payload) {
            state.isLogin = payload.data.isLogin;
            state.authToken = payload.data.token;
            state.name = payload.data.user.name;
            state.role = payload.data.user.role_id;
            state.email = payload.data.email;
        },
        logout(state){

            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('role');
            localStorage.removeItem('email');
            window.location.replace(BASE_URL);

            const mypayload = {
                    action: "logout",
            };

           AuthenticationService.logout(mypayload,state.authToken)
           .then((response)=>{
               if(response.data.logout==true){
                       state.isLogin = false;
                       state.authToken = null;
                       state.name = null;
                       state.role = null;
                       state.email = null;
               }

           })
           .catch((error)=>{console.log(error)});

        },
        initializeLogin(state){
            state.authToken = localStorage.getItem("token");
            state.name = localStorage.getItem("name");
            state.role = localStorage.getItem("role");
            state.email = localStorage.getItem("email");
            if(state.authToken){
                state.isLogin = true;
            }
            console.log("Initialized in vuex store = "+ state.authToken);
        }
    },
    getters: {
        auth(state) {
            return state
        }
    }

});




export default store;
