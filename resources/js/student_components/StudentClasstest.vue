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
                            <h3>My Class Test</h3>
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
                                    <th>Test Name</th>
                                    <th>Marks</th>
                                    <th>S.Time</th>
                                    <th>Result</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                            </table>
                        </div>
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
                   course: []
               }
           },
           methods: {
                myLearning(){
                    LessonDataService.myLearning(this.auth_token)
                    .then(response=>{
                        console.log(response);
                        this.lesson = response.data.my_learning;
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


</style>
