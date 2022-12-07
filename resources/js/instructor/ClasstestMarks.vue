<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
           <SidebarInstructor/>
        </div>
        <main class="col ps-md-2 pt-2">
           <div class="row">
                <div class="col-md-12">
                    <table class="table-striped" id="module">
                        <tr>
                            <th>Student Name</th>
                            <th>Student ID</th>
                            <th>Marks</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(student, index) in student_list" :key="index">
                            <td>{{student.student_name}}</td>
                            <td>{{student.student_id}}</td>
                            <td><input type="number" :value="student.marks" @input="marksChange($event.target.value,student.user_id)" /></td>
                            <td><span style="text-transform: capitalize;">{{student.status}}</span></td>
                            <td>
                                <button class="orange_small_btn" @click="makeAbsent(student.user_id)">Absent</button>
                                <button class="orange_small_btn" @click="makeExclude(student.user_id)">Exclude</button>
                            </td>
                        </tr>
                    </table>
                </div>
           </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarInstructor from './SidebarInstructor.vue';
    import AdminDataService from '../services/AdminDataService';

    export default {
        components: {SidebarInstructor},
           data(){
               return{
                   title: "Test Marks",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   test_id:this.$route.params.test_id,
                   student_list:[],
               }
           },
           computed:{

           },
           methods: {
                classTestStudent(){
                    AdminDataService.classTestStudent(this.test_id,this.auth_token)
                    .then((res)=>{
                        this.student_list = res.data.class_test_student;
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                },
                marksChange(value,student_id){
                    const payload = {student_id:student_id,marks:value,test_id:this.test_id};
                    AdminDataService.updateClassTestMarks(payload,this.auth_token)
                    .then(res=>{
                        console.log(response);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                },
                makeAbsent(student_id){
                    const payload = {student_id:student_id,test_id:this.test_id};
                    AdminDataService.makeAbsentClasstest(payload,this.auth_token)
                    .then(res=>{
                        console.log(response);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                },
                makeExclude(student_id){
                    const payload = {student_id:student_id,test_id:this.test_id};
                    AdminDataService.makeExcludeClasstest(payload,this.auth_token)
                    .then(res=>{
                        console.log(response);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                }
           },
           mounted() {
                this.classTestStudent();
           },
    }
</script>

<style scoped>


</style>
