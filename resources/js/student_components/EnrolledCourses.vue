<template>
    <div class="row d-flex">
        <div v-if="!enrolled_courses.length">You have not Enrolled any Course Yet</div>
         <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12" v-for="(courses,index) in enrolled_courses" :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="'/course_images/'+courses.thumbnail"  class="card-img-top" alt="course image">
                <div class="card-body">
                    <h5 class="card-title">{{courses.course_title}}</h5>
                    <p class="card-text">{{courses.course_description}}</p>
                        <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="completePercent(courses.completed_percentage)"></div>
                    </div>
                    <br/>
                    <div class="text-center"><router-link :to="'/course-detail/'+courses.course_id"><button class="btn btn-primary">Keep Learning</button></router-link></div>
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
                enrolled_courses: [],
                header_data : {
                    headers: { Authorization: `Bearer ${this.$store.state.authToken}` }
                }
            }
        },
        computed:{
            loggedIn() {
                    return this.$store.state.isLogin;
            },
            barwidthCal(){
                return {
                    width: 20+'%'
                }
            }// eta kaje lagai nai//
        },
        methods: {
            retriveEnrolledCourses(header){
                CourseDataService.getEntolledCourses(header)
                .then(response=>{
                         console.log(response);
                    this.enrolled_courses = response.data;

                })
                .catch(error=>{

                })
            },
            completePercent(value){
                 return {
                    width: value+'%'
                }
            }
        },
        mounted(){
            this.retriveEnrolledCourses(this.header_data);
            console.log("component=allcourses");
            console.log(this.$store.state.authToken);
        }

   }
</script>
