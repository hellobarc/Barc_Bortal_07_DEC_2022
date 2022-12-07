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
            <hr>
             <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center">Student Attendance</h3>
                </div>
            </div>
               <hr>
                <AttendanceTaking/>
                <hr/>
                <KeepLearning/>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarModerator from './SidebarModerator';
    import AdminDataService from '../services/AdminDataService';
import AttendanceTaking from '../common_component/AttendanceTaking.vue';
import KeepLearning from '../student_components/partials/KeepLearning.vue';

    export default {
        components: { SidebarModerator, AttendanceTaking, KeepLearning },
           data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,

               }
           },
           computed:{

           },
           methods: {
                handleSubmit(){
                    const payload = {
                                course_id: this.selected_course,
                                batch_name: this.form_data.batch_name ,
                                start_date: this.getStartDate,
                                end_date: this.getEndDate
                            };
                    AdminDataService.addBatch(payload,this.auth_token)
                    .then((response)=>{
                        console.log(response);
                        this.allBatch();
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                },
           },
           mounted() {

           },
    }
</script>

<style scoped>


</style>
