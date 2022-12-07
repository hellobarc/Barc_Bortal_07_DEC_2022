<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <SidebarModerator/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>BARC Portal e-Learning Platform</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <div v-if="this.$store.state.isOnline==false" class="alert alert-danger" role="alert">Connection is Offline</div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <h1>All Courses</h1>
                </div>
            </div>
            <hr/>
            <div class="row d-flex">
                <div v-if="!all_courses.length">There are no Courses for you</div>
                <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12" v-for="(courses,index) in all_courses" :key="index">
                    <div class="card" style="width: 18rem;">
                        <img :src="'/course_images/'+courses.thumbnail"  class="card-img-top" alt="course image">
                        <div class="card-body">
                            <h5 class="card-title">{{courses.course_title}}</h5>
                            <p class="card-text">{{courses.course_description}}</p>
                            <br/>
                            <div class="text-center">
                                <button class="btn btn-info disabled">Keep Learning</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <KeepLearning/>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarModerator from './SidebarModerator.vue';
    import CourseDataService from '../services/CourseDataService';
import KeepLearning from '../student_components/partials/KeepLearning.vue';

    export default {
        components: { SidebarModerator, KeepLearning },
           data(){
               return{
                   title: "Moderator All Courses",
                   auth_token: this.$store.state.authToken,
                   image_data: images,
                   all_courses: [],
               }
           },
           computed:{
               loggedIn() {
                     return this.$store.state.isLogin;
                },
           },
           methods: {
            getAllCourses(){
                CourseDataService.getAllCourses(this.auth_token)
                .then(response=>{
                         console.log(response);
                    this.all_courses = response.data;

                })
                .catch(error=>{

                })
            }
        },
        mounted(){
            this.getAllCourses();
        }
    }
</script>

<style scoped>


</style>
