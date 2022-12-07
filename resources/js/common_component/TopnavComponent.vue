<template>
        <div class="section login-header">
            <div class="login-header-wrapper navbar navbar-expand">
                <div class="login-header-logo">
                    <a href=""><img :src="image_data[0].logo_icon" alt="Logo"></a>
                </div>
                <div class="">
                    <template v-if="this.$store.state.role==5">
                        <router-link :to="'/student/dashboard'"> <i class="icofont-home big_icon"></i> </router-link>
                    </template>
                    <template v-if="this.$store.state.role==3">
                        <router-link :to="{name:'content-dashboard'}"> <i class="icofont-home big_icon"></i> </router-link>
                    </template>
                </div>
                <div class="login-header-search dropdown">
                </div>
                <div class="login-header-action ml-auto">
                    <div class="dropdown"  v-if="this.$store.state.role==5">
                        <button class="action notification" data-bs-toggle="dropdown">
                            <i class="flaticon-notification"></i>
                            <span class="active"></span>
                        </button>
                        <div class="dropdown-menu dropdown-notification">
                            <ul class="notification-items-list">
                                <li class="notification-item" v-for="(noti,indx) in notification" :key="indx">
                                    <span class="notify-icon bg-success text-white"><i class="icofont-ui-user"></i></span>
                                    <div class="dropdown-body">
                                        <a href="#">
                                            <p>{{noti.title}}
                                            </p>
                                        </a>
                                    </div>
                                    <span class="notify-time">{{new Date(noti.created_at)}}</span>
                                </li>

                            </ul>
                            <a class="all-notification" href="#">
                                <router-link :to="{name:'student-notifications'}">
                                    <span> Notifications </span>
                                </router-link>
                                <i class="icofont-simple-right"></i></a>

                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="action more" data-bs-toggle="dropdown">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li v-if="this.$store.state.role==5">
                                <a class="" href="#"><i class="icofont-user"></i>
                                    <router-link :to="{name:'student-myprofile'}">
                                        <span> My Profile </span>
                                    </router-link>
                                </a>
                            </li>
                            <li><a class="" href="#" @click.prevent="handleLogout"><i class="icofont-logout"></i> Sign Out  </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import images from '../json/images.json';
import StudentDataService from '../services/StudentDataService';

export default {
    data(){
        return{
            title: "Topnav component",
            image_data: images,
            authToken: this.$store.state.authToken,
            notification: [],

        }
    },
    methods:{
        handleLogout(){
           // this.$router.push('./login');
            this.$store.commit('logout');

            console.log("Is Login: "+this.$store.state.isLogin);
        },
        studentNotification(){
            StudentDataService.studentNotification(this.auth_token)
            .then(res=>{
                console.log(res);
                this.notification= res.data.notification;
            })
            .catch(err=>{
                    console.log(err);
            })
        }
    },
    mounted(){
        this.studentNotification();
    }
}
</script>

<style>
    .big_icon{
        font-size: 49px;
        margin-left: 23px;
        color: #ccc;

    }
</style>
