<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none">
                <i class="bi bi-list bi-lg py-2 p-1"></i>Menu</a>
            <student-header/>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <h3>My Learning</h3>
                    </div>
                </div>
            </div>
             <hr/>
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive sm">
                        <table class="table-striped" id="module">
                            <tr>
                                <th>Course</th>
                                <th>Unit</th>
                                <th>Module</th>
                                <th>Lesson</th>
                                <th>S.Time</th>
                                <th>Result</th>
                                <th>Review</th>
                            </tr>
                            <tr v-for="(less,index) in lesson" :key="index">
                                <td>{{less.course.course_name}}</td>
                                <td>{{less.lesson.unit.unit_name}}</td>
                                <td>{{less.module_name}}</td>
                                <td>{{less.lesson.title}}</td>
                                <td>{{less.lesson.study_minutes}}Minutes</td>
                                <td>{{less.marks_percent}}%</td>
                                <td>
                                     <router-link :to="{ name: 'lesson_review', params: { lesson_id: less.lesson.id, module_id: less.lesson.course_module_id, course_id: less.lesson.course.id} }" :class="{btn:true}" class="orange_small_btn"> Review <i class="bi bi-arrow-right"></i></router-link>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="text-right" style="font-weight: bold">Total : </td><td>{{totaMinutes}} Minutes</td> <td>{{total_average_percent_till}}%</td><td></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                   <div style="margin: 100px;"> Keep learning ... and go green</div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import LessonDataService from '../services/LessonDataService';
    import StudentSidebar from './partials/StudentSidebar.vue';
    import StudentHeader from './StudentHeader.vue';
   // import { mapState, mapMutations } from 'vuex';

    export default {
        components: { StudentSidebar, StudentHeader },
           data(){
               return{
                   title: "My Learning",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   lesson: [],
                   course: [],
                   total_average_percent_till: 0

               }
           },
           computed:{
                totaMinutes(){
                    let total_minutes=0;
                    this.lesson.forEach((item,index)=>{
                       total_minutes +=  parseInt(item.lesson.study_minutes);
                    });

                    return total_minutes;
                }
           },
           methods: {
                myLearning(){
                    LessonDataService.myLearning(this.auth_token)
                    .then(response=>{
                        console.log(response);
                        this.lesson = response.data.my_learning;
                        this.total_average_percent_till = response.data.total_average_percent_till;
                    })
                    .catch(error =>{
                        console.log(error);
                    })
                }
           },
           mounted(){
             this.myLearning();
           }
    }
</script>

<style scoped>
.text-right{
    text-align: right;
}

</style>
