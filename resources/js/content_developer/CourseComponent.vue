<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <SidebarContent/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>Create Lesson : {{module_name}} </h2>
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
                                            <label class="label">Module Name:</label>
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
                                <label class="label">Lesson Title:</label>
                                <input type="text" placeholder="Lesson Title or Topics" v-model="form_data.lesson_title">
                            </div>
                            <div class="single-form">
                                <label class="label">Description:</label>
                                <input type="text" placeholder="Short Description of the Lesson" v-model="form_data.lesson_description">
                            </div>
                             <div class="single-form">
                                <label class="label">Equivalent Study Minutes (atleast 0): </label>
                                <input type="number" placeholder="Input study equivalent minutes" v-model="form_data.lesson_minutes">
                            </div>
                             <div class="single-form">
                                <label class="label">Equivalent Study Hours (optional):</label>
                                <input type="number" placeholder="Input study equivalent hours" v-model="form_data.lesson_hours">
                            </div>
                            <div class="single-form text-center">
                                 <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                   <div v-if="module_id==1">
                      <ReadingLessonlist :lesson_list="lesson_list"/>
                   </div>

                   <div v-if="module_id==2">
                       <ListeningLessonlist :lesson_list="lesson_list"/>
                   </div>

                    <div v-if="module_id==3">
                       <GrammarLessonlist :lesson_list="lesson_list"/>
                   </div>

                   <div v-if="module_id==4">
                       <VocabularyLessonlist :lesson_list="lesson_list"/>
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
    import ContentDataService from '../services/ContentDataService';
    import SidebarContent from './SidebarContent.vue';
    import ReadingLessonlist from './ReadingLessonlist.vue';
    import ListeningLessonlist from './ListeningLessonlist.vue';
    import GrammarLessonlist from './GrammarLessonlist.vue';
    import VocabularyLessonlist from './VocabularyLessonlist.vue';

    export default {
            components: {
    SidebarContent,
    ReadingLessonlist,
    ListeningLessonlist,
    GrammarLessonlist,
    VocabularyLessonlist
},
           data(){
               return{
                   title: "Moderator Dashbaord",
                   image_data: images,
                   module_id: this.$route.params.module_id,
                   lesson_list: [],
                   auth_token: this.$store.state.authToken,
                   selected_course: 0,
                   selected_unit: 0,
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
                        lesson_title:null,
                        lesson_description:null,
                        lesson_minutes:0,
                        lesson_hours:0,

                   }
               }
           },
           computed:{
               loggedIn() {
                     return this.$store.state.isLogin;
                },
                module_name(){ // this is not matching with Database / database saying different things
                    if(this.module_id==1){
                        return "Reading";
                    }else if(this.module_id==2){
                        return "Listening";
                    }else if(this.module_id==3){
                        return "Grammar";
                    }else if(this.module_id==4){
                        return "Vocabulary";
                    }
                }
           },
           methods: {
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

                if(this.form_data.lesson_title==null){
                       this.alert_next.push("Please Input Title");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.form_data.lesson_description==null){
                       this.alert_next.push("Please Input Description");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.form_data.lesson_minutes==null){
                       this.alert_next.push("Please Input equivalent Minutes");
                       this.iscomplete = false;
                }else{
                    this.iscomplete = true;
                }

                if(this.iscomplete){
                    this.addLesson();
                }

            },
             lessonByModule(module_id,token){
                ContentDataService.lessonByModule(module_id,token)
                .then(response=>{
                    this.lesson_list = response.data.data;
                })
                .catch(error=>{
                    console.log(error);
                });
            },
             lessonByModuleCourse(course_id,module_id,token){
                ContentDataService.lessonByModuleCourse(course_id,module_id,token)
                .then(response=>{
                    this.lesson_list = response.data.data;
                })
                .catch(error=>{
                    console.log(error);
                });
            },
            addLesson(){
                const token = this.auth_token;
                const payload = {
                                    course_id:this.selected_course,
                                    module_id:this.module_id,
                                    unit_id:this.selected_unit,
                                    lesson_title:this.form_data.lesson_title,
                                    lesson_description:this.form_data.lesson_description,
                                    lesson_minutes:this.form_data.lesson_minutes,
                                    lesson_hours:this.form_data.lesson_hours
                                };

                LessonDataService.addLesson(payload,token)
                .then(response=>{

                    if(response.data.status=="dulicate"){
                        this.alert_next.push(response.data.message);
                    }

                    if(response.data.status=="success"){
                        this.alert_success = response.data.message;
                        this.form_data.lesson_title = null;
                        this.form_data.lesson_description = null;
                        this.form_data.lesson_minutes = null;
                        this.form_data.lesson_hours = null;
                        this.selected_course = 0;
                        this.selected_unit = 0;
                    }

                })
                .catch(error=>{
                    console.log(error);
                });

                 this.lessonByModule(this.module_id,this.auth_token);
            },
            filterData(course_id){
                 this.lesson_list = this.lesson_list.filter(item => {return item.course_list_id==course_id});
            },
            changeCourse(event){
               // console.log(event.target.value);
                const select_course_id = event.target.value;
                this.selected_course = select_course_id;
                if(this.selected_course!=0){
                    this.lessonByModuleCourse(this.selected_course,this.module_id,this.auth_token);
                }else{
                    this.lessonByModule(this.module_id,this.auth_token);
                }
               
                // this.lessonByModule(this.module_id,this.auth_token);

               
            },
            changeUnit(event){
               // console.log(event.target.value);
                this.selected_unit = event.target.value
               console.log(this.selected_unit);
            }
               // ...mapMutations(["loginAuth","test"])
           },
           mounted(){
               this.lessonByModule(this.module_id,this.auth_token);
               console.log(this.lesson_list);
           }
    }
</script>

<style scoped>

.label{
    font-weight: bold;
}


</style>


<!-- pagination  https://vuejsexamples.com/a-vue-3-component-to-make-pagination-based-on-vuejs-paginate/ -- etai valo hobe-->
