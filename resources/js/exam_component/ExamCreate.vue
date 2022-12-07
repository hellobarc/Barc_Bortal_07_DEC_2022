<template lang="">
    <div>
        <AlertMessage :alert_next="alert_next" :alert_success="alert_success"/>
        <div> <!-- Modal section start-->
            <button type="button" class="btn btn-primary" @click="modalToggle">Create Exam</button>
                <div
                ref="modal"
                class="modal fade"
                :class="{ show: active, 'd-block': active }"
                tabindex="-1"
                role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Create Exam From</h5>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    @click="modalToggle">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>
                                    <form @submit.prevent="createExam()">
                                        <div class="form-group">
                                            <label for="exam_name">Exam Name</label>
                                            <input type="text" class="form-control" id="exam_name" v-model="exam_name" aria-describedby="exam_name" placeholder="Exam name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="unit">Select Course</label>
                                            <select class="myselect"  v-model="selected_course"  @change="changeCourse($event)" required>
                                                <option disabled value="0">Select Course</option>
                                                <option  v-for="(course,indx) in course_list" :key="indx" :value="course.course_id">{{course.course_name}}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exam_type">Exam Type</label>
                                            <select class="myselect"  v-model="selected_exam_type"  @change="changeExamtype($event)" required>
                                                <option disabled value="0">Select Type of Exam</option>
                                                <option value="class_test">Class Test</option>
                                                <option value="progress_test">Progress Test</option>
                                                <option value="promotional_test">Promotional Test</option>
                                                <option value="mock_test">Mock Test</option>
                                            </select>
                                        </div>
                                        <br/>
                                        <div class="text-center"><button type="submit" class="btn btn-primary text-center">Submit</button></div>
                                    </form>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <div v-if="active" class="modal-backdrop fade show"></div>
        </div>
    </div>
</template>
<script>

import images from '../json/images.json';
import CourseDataService from '../services/CourseDataService';
import AlertMessage from '../common_component/AlertMessage.vue';
import ExamDataService from '../services/ExamDataService';

    export default {
        components:{AlertMessage},
        data(){
               return{
                   title: "Exam Create",
                   auth_token: this.$store.state.authToken,
                   image_data: images,
                   alert_next:[],
                   alert_success:null,
                   course_list:[],
                   exam_name: null,
                   selected_course: 0,
                   selected_exam_type: 0,
                   active: false,
                   OpenClose:this.visible
               }
        },
        methods:{
            courseList(){
                CourseDataService.getAllCourses(this.auth_token)
                .then(res=>{
                    this.course_list = res.data
                })
                .catch(err=>{
                    this.alert_next = err;
                })
            },
            modalToggle() {
                const body = document.querySelector("body")
                this.active = !this.active
                this.active ? body.classList.add("modal-open") : body.classList.remove("modal-open")
            },
            OpenCloseFun(){
                this.OpenClose =false;
            },
            changeCourse(event){
                this.selected_course = event.target.value;
            },
            changeExamtype(event){
                this.selected_exam_type = event.target.value;
            },
            createExam(){
                console.log("exam create");
                const payload = {exam_name:this.exam_name,course_id:this.selected_course,exam_type:this.selected_exam_type};
                ExamDataService.createExam(payload,this.auth_token)
                .then(res=>{
                    this.alert_success = res.data.message;
                    this.modalToggle();
                })
                .catch(err=>{
                    this.alert_next = err.data;
                })
            }
        },
        watch: {
            visible: function(newVal, oldVal) { // watch it
                this.OpenClose =newVal;
                console.log('new' +newVal+ '==' +oldVal)
            }
        },
        mounted(){
            this.courseList();
        }

}
</script>
<style lang="">

</style>
