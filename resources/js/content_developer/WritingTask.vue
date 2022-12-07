<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <SidebarContent/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2> Create Writing Task  </h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <div>
                        <div v-if="alert_next.length!=0">
                            <div class="alert alert-danger" role="alert">
                                <div v-for="(alert, index) in alert_next" :key="index">
                                     <p>{{alert}} </p>
                                </div>
                            </div>
                        </div>

                        <div v-if="alert_success!=null">
                            <div class="alert alert-success" role="alert">
                                     <p>{{alert_success}} </p>
                            </div>
                        </div>

                        <form @submit.prevent="handleSubmit">
                               <div class="row">
                                    <div class="col-md-6">
                                        <div class="single-form">
                                            <label class="label">Course Name:</label>
                                            <select class="myselect" v-model="selected_course" @change="changeCourse($event)">
                                                    <option v-for="(course,index) in form_data.course" :value="course.id" :key="index">{{course.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                     <div class="col-md-6">
                                        <div class="single-form">
                                            <label class="label">Unit:</label>
                                            <select class="myselect" v-model="selected_unit" @change="changeUnit($event)">
                                                    <option v-for="(unit,index) in form_data.unit" :value="unit.id" :key="index">{{unit.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                               </div>

                            <div class="single-form">
                                <label class="label">Unit:</label>
                                <select class="myselect" v-model="selected_serial" @change="changeSerial($event)">
                                    <option value="">Select a Task</option>
                                    <option value="1">Task-1</option>
                                    <option value="2">Task-2</option>
                                </select>
                            </div>

                            <div class="single-form">
                                <label class="label">Writing Task Question/Title:</label>
                                <input type="text" placeholder="Task Question" v-model="form_data.task_title">
                            </div>
                            <div class="single-form">
                                <label class="label">Description:</label>
                                 <QuillEditor theme="snow" v-model:content="form_data.task_description" contentType="html"/>
                            </div>
                             <div class="single-form">
                                <label class="label">Equivalent Study Minutes (atleast 0): </label>
                                <input type="number" placeholder="Input study equivalent minutes" v-model="form_data.study_minutes">
                            </div>
                            <div class="single-form text-center">
                                 <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                      <WritingtaskList :task_list="task_list"/>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import BasicDataService from '../services/BasicDataService';
    import LessonDataService from '../services/LessonDataService';
    import ContentDataService from '../services/ContentDataService';
    import SidebarContent from './SidebarContent.vue';
import WritingtaskList from './WritingtaskList.vue';
import AlertSuccess from '../common_component/parts/AlertSuccess.vue';

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

    export default {
            components: {
                SidebarContent,
                WritingtaskList,
                QuillEditor,
                AlertSuccess
            },
           data(){
               return{
                   title: "Writing Task",
                   image_data: images,
                   task_list: [],
                   auth_token: this.$store.state.authToken,
                   selected_course: 0,
                   selected_unit: 0,
                   selected_serial: 0,
                   alert_next:[],
                   alert_success:null,
                   iscomplete:false,
                   form_data: {
                        course: [
                            {name: 'Select a Course', id: 0},
                            {name: 'A2', id: 1},
                            {name: 'B1', id: 2},
                            {name: 'B2', id: 3},
                            {name: 'C1', id: 4}
                        ],
                        unit: [
                            {name: 'Select a Unit', id: 0},
                            {name: 'Unit -1', id: 1},
                            {name: 'Unit -2', id: 2},
                            {name: 'Unit -3', id: 3},
                            {name: 'Unit -4', id: 4},
                            {name: 'Unit -5', id: 5},
                            {name: 'Unit -6', id: 6},
                            {name: 'Unit -7', id: 7},
                            {name: 'Unit -8', id: 8}
                        ],
                        task_title:null,
                        task_description:null,
                        study_minutes:0,
                        lesson_hours:0,
                   }
               }
           },
           computed:{
               loggedIn() {
                     return this.$store.state.isLogin;
                }
           },
           methods: {
            changeSerial(event){
                this.selected_serial = event.target.value;
            },
            handleSubmit(){

                this.alert_next = [];

                if(this.selected_course==0){
                       this.alert_next.push("Please select Course");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.selected_unit==0){
                       this.alert_next.push("Please select Unit");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.form_data.task_title==null){
                       this.alert_next.push("Please Input Title");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.form_data.task_description==null){
                       this.alert_next.push("Please Input Description");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.form_data.study_minutes==null){
                       this.alert_next.push("Please Input equivalent Minutes");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.iscomplete){
                    this.addTask();
                }

            },
            allCourse(){
                BasicDataService.allCourse()
                .then(response=>{
                    console.log(response);

                })
                .catch(error=>{
                    console.log(error);
                });
            },
            addTask(){
                const token = this.auth_token;
                const payload = {
                                    course_id:this.selected_course,
                                    module_id:this.module_id,
                                    unit_id:this.selected_unit,
                                    title:this.form_data.task_title,
                                    task_serial:this.selected_serial,
                                    description:this.form_data.task_description,
                                    study_minutes:this.form_data.study_minutes,
                                    lesson_hours:this.form_data.lesson_hours
                                };

                ContentDataService.addTask(payload,token)
                .then(response=>{

                    if(response.data.status=="dulicate"){
                        this.alert_next.push(response.data.message);
                    }

                    if(response.data.status=="success"){
                        this.alert_success = response.data.message;
                        this.form_data.task_title = null;
                        this.form_data.task_description = null;
                        this.form_data.study_minutes = null;
                        this.form_data.lesson_hours = null;
                        this.selected_course = 0;
                        this.selected_unit = 0;
                    }

                })
                .catch(error=>{
                    console.log(error);
                });

                 this.allTask();
            },
            allTask(){
                ContentDataService.allTask(this.auth_token)
                .then(response=>{
                    this.task_list = response.data;
                })
                .catch((error)=>{
                    console.log(error);
                })
            },
            filterData(course_id){
                 this.task_list = this.task_list.filter(item => {return item.course_list_id==course_id});
            },
            changeCourse(event){
               // console.log(event.target.value);
                const select_course_id = event.target.value;
                this.selected_course = select_course_id;
                this.filterData(select_course_id);
            },
            changeUnit(event){
               // console.log(event.target.value);
                this.selected_unit = event.target.value
               console.log(this.selected_unit);
            }
               // ...mapMutations(["loginAuth","test"])
           },
           mounted(){
               this.allCourse();
               this.allTask();
               console.log(this.task_list);
           }
    }
</script>

<style scoped>

.label{
    font-weight: bold;
}


</style>


<!-- pagination  https://vuejsexamples.com/a-vue-3-component-to-make-pagination-based-on-vuejs-paginate/ -- etai valo hobe-->
