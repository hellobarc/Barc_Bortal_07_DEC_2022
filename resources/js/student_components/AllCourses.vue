<template>
    <div class="row d-flex">
        <div v-if="!all_courses.length">There are no Courses for you</div>
         <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12" v-for="(courses,index) in all_courses" :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="'/course_images/'+courses.thumbnail"  class="card-img-top" alt="course image">
                <div class="card-body">
                    <h5 class="card-title">{{courses.course_title}}</h5>
                    <p class="card-text">{{courses.course_description}}</p>
                    <br/>
                    <div class="text-center" v-if="courses.is_enrolled==1">
                        <router-link :to="'/course-detail/'+courses.course_id"><button class="btn btn-primary">Keep Learning</button></router-link>
                    </div>
                    <div class="text-center" v-else>
                        <button class="btn btn-info disabled">Keep Learning</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
   import images from '../json/images.json';
   import CourseDataService from '../services/CourseDataService';

   export default {
        name: 'Enrolled-Courses',
        components: {},
        data(){
            return{
                title: "dashboard component",
                image_data: images,
                all_courses: [],
                auth_token: this.$store.state.authToken,
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
