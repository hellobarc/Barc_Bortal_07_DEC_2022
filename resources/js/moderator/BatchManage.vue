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
                    <h3 class="text-center">Batch Management</h3>
                </div>
            </div>
               <hr>
            <div class="row">
                <div class="col-md-6">
                    <div class="insert_table">
                         <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="single-form">
                                            <label class="label">Course Name:</label>
                                            <select class="myselect" v-model="selected_course" @change="changeCourse($event)">
                                                    <option value="0">Select a Course</option>
                                                    <option v-for="(course,index) in allcourse" :value="course.id" :key="index">{{course.course_name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                     <div class="col-md-6">
                                         <div class="single-form">
                                            <label class="label">Batch Name:</label>
                                           <input type="text" placeholder="Batch Name" v-model="form_data.batch_name">
                                        </div>
                                    </div>
                               </div>


                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="single-form">
                                            <label class="label">Start Date:</label>
                                            <Datepicker v-model="form_data.start_date"></Datepicker>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-form">
                                            <label class="label">End Date:</label>
                                            <Datepicker v-model="form_data.end_date"></Datepicker>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="single-form text-center">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <table class="table-striped" id="module">
                        <tr>
                            <th>Batch Name</th>
                            <th>Starting Date</th>
                            <th>Closing Date</th>
                            <th>Student Count</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(batch,index) in allbactch" :key="index">
                            <td>{{batch.batch_name}}</td>
                            <td>{{batch.start_date}}</td>
                            <td>{{batch.start_date}}</td>
                            <td>0</td>
                            <td><div class="badge">Active</div></td>
                            <td><button class="button  button-rounded">Close</button></td>
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
    import SidebarModerator from './SidebarModerator.vue';
    import BasicDataService from '../services/BasicDataService';
    import AdminDataService from '../services/AdminDataService';


    export default {
        components: {SidebarModerator},
           data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   form_data:{
                    batch_name:'',
                    start_date:null,
                    end_date:null,
                   },
                   selected_course:0,
                   allcourse:[],
                   allbactch:[],
               }
           },
           computed:{
                getStartDate(){
                   if(this.form_data.start_date!=null){
                        let cur_date =  new Date(this.form_data.start_date);
                        return `${cur_date.getDate()}-${cur_date.getMonth()}-${cur_date.getFullYear()}`;
                   }else{
                        return null;
                   }

                },
                getEndDate(){
                      if(this.form_data.end_date!=null){
                        let cur_date =  new Date(this.form_data.end_date);
                        return `${cur_date.getDate()}-${cur_date.getMonth()}-${cur_date.getFullYear()}`;
                   }else{
                        return null;
                   }
                },
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
                allCourse(){
                    BasicDataService.allCourse()
                    .then(response=>{
                        console.log(response);
                        this.allcourse = response.data;
                    })
                    .catch(error=>{
                            console.log(error);
                    })
                },
                changeCourse(event){
                    this.selected_course = event.target.value;
                },
                allBatch(){
                    AdminDataService.allBatch(this.auth_token)
                    .then((response)=>{
                        this.allbactch = response.data;
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                }
           },
           mounted() {
                this.allCourse();
                this.allBatch();
           },
    }
</script>

<style scoped>


</style>
