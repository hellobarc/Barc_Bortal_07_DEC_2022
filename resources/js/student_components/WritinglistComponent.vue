<template>
    <div class="section overflow-hidden position-relative" id="wrapper">
        <div class="py-0 px-5">
            <div class="">
                <div class="container-fluid">
                    <div class="section section-padding mt-n10">
                        <div class="container">
                            <div class="row gx-10">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div style="margin-bottom: 10px;">
                                        <button class="button_back">
                                            <router-link :to="{ name: 'sub-module', params: { lesson: 'writing', module_id:3, course_id: course_id } }">  <i class="bi bi-arrow-left"></i>    Back</router-link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="row gx-10">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">

                                    <div style="padding: 10px; background: #EBEFF0">
                                         <div>
                                            <h4>IELTS Academic Writing</h4>
                                        </div>
                                        <div style="background: #fff; padding: 10px;">
                                            <p>
                                                Time: 1 hour
                                            </p>
                                            <p>
                                                <h6>INSTRUCTION TO CANDIDATES</h6>
                                                <ul>
                                                    <li><i class="bi bi-asterisk"></i> Answer both parts</li>
                                                    <li><i class="bi bi-asterisk"></i>  You can change your answer at any time during the test</li>
                                                </ul>
                                            </p>
                                            <p>
                                            <h6>INFORMATION FOR CANDIDATES</h6>
                                                <ul>
                                                    <li><i class="bi bi-asterisk"></i> There are 2 parts in the test</li>
                                                    <li><i class="bi bi-asterisk"></i> Part 2 contribute twice as much as Part 1 to the writing score</li>
                                                    <li><i class="bi bi-asterisk"></i> The test clock will show  you when there are 10 minutes and 5 minutes remaining</li>
                                                </ul>
                                            </p>
                                        </div>
                                     </div>
                                </div>

                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div>
                                        <div>
                                            <h6>Questions:</h6>
                                            <hr/>
                                            <div>

                                                <div class="question_list" v-for="(writing_question,index) in writing_list" :key="writing_question.id">
                                                    <p class="question_item">
                                                        {{index+1}}. {{writing_question.title}}
                                                    </p>
                                                    <p>
                                                        Studey time: {{writing_question.study_minutes}} Minutes
                                                    </p>
                                                    <p>
                                                        <router-link :to="{ name: 'writing-test', params: { question_id:writing_question.id,course_id: writing_question.course_list_id, task:writing_question.task_serial } }">
                                                            <div class="start_test">
                                                                Start <i class="bi bi-arrow-right"></i>
                                                            </div>
                                                        </router-link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

   import LessonDataService from '../services/LessonDataService';

    export default {
        name: "Writing_List",
        components: { },
            data(){
                return {
                    course_id:  this.$route.params.course_id,
                    page : "Righting List",
                    writing_list: [],
                    auth_token: this.$store.state.authToken
                }
            },
            methods:{
                retriveWritingQuestion(course_id,token){
                    LessonDataService.retriveWritingQuestion(course_id,token)
                    .then(response=>{
                        console.log(response);
                        this.writing_list = response.data.writing_list;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                }
            },
            created(){
                  console.log("Writing Quesiton list");
            },
            mounted() {
                  this.retriveWritingQuestion(this.course_id,this.auth_token);
            },
    }
</script>

<style scoped>
.question_list{
    margin-bottom: 40px;
    margin-top: 40px;
}

.question_item{
    font-weight: bold;
}



</style>


