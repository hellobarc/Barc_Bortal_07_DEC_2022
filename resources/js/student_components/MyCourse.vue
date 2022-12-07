<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <student-header/>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
            <div class="row">
                  <div class="col-md-12">
                       <div class="page-header pt-3">
                            <h2>My Courses</h2>
                        </div>
                        <p class="lead">Your enrolled courses</p>
                        <hr>
                        <enrolled-courses/>
                  </div>
            </div>

        <hr/>

            <div class="row">
                <div class="col-md-12">

                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import TestComponent from './partials/TestComponent.vue';
    import EnrolledCourses from './EnrolledCourses.vue';
    import StudentDataService from '../services/StudentDataService';
    import StudentSidebar from './partials/StudentSidebar.vue';
import StudentHeader from './StudentHeader.vue';
   // import { mapState, mapMutations } from 'vuex';

    export default {
        components: { TestComponent, EnrolledCourses, StudentSidebar, StudentHeader },
           data(){
               return{
                   title: "Student Dashboard",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   stats: [],
               }
           },
           methods: {
                studentStats(){
                    StudentDataService.studentStats(this.auth_token)
                    .then(response=>{
                        this.stats = response.data.stats;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                }
           },
           mounted(){
             this.studentStats();
           }
    }
</script>

<style scoped>


</style>
