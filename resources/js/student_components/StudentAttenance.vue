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
                        <h3>My Attendance</h3>
                    </div>
                    <table class=" table-striped " id="module">
                        <tr>
                            <th>Coures</th>
                            <th>Unit</th>
                            <th>Date</th>
                            <th>Attendance</th>
                            <th>Taken by</th>
                        </tr>
                        <tr v-if="attendance.length > 0" v-for="(att,indx) in attendance" :key="indx">
                            <td>A2 Foundation</td>
                            <td>Unit-{{att.unit_id}}</td>
                            <td>{{att.date}}</td>
                            <td><span class="simple_sm_button" v-if="att.status=='present'">Present</span><span class="simple_sm_button_red" v-if="att.status=='absent'">Absent</span><span class="simple_sm_button_yell" v-if="att.status=='tardy'">Tardy</span></td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
            </div>
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
                   attendance: [],
               }
           },
           methods: {
                studentAttendance(){
                    StudentDataService.studentAttendance(this.auth_token)
                    .then(response=>{
                        const attendan = response.data;
                        this.attendance = attendan.attendance;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                }
           },
           mounted(){
             this.studentAttendance();
           }
    }
</script>

<style scoped>


</style>
