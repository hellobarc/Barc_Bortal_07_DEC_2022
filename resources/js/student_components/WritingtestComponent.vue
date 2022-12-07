<template>
    <div class="section overflow-hidden position-relative" id="wrapper" style="background: aliceblue">

        <div class="py-0 px-5">
            <div class="">
                <div class="container-fluid">
                    <div class="section section-padding mt-n10">
                        <div class="container-fluid">

                            <div class="row gx-10">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div style="margin-bottom: 10px;">
                                        <button class="button_back">
                                            <router-link :to="{ name: 'writing-list', params: { course_id: course_id } }">
                                                <i class="bi bi-arrow-left"></i>    Back
                                            </router-link>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div style="display: flex;justify-content: space-between; border: 1px solid #ddd; padding: 5px; margin: 10px;">
                                    <div>Your name : <strong> {{this.$store.state.name}} </strong></div>
                                    <div><i class="bi bi-clock"></i> {{timerCount}} minutes remaining</div>
                                    <div class="badge bg-primary"> Help</div>
                                </div>
                            </div>



                            <div class="row gx-10">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div style="margin-bottom: 10px; border: 1px solid #ccc; background: #fff; padding:15px;">
                                       <div> <h2>  {{writing_quesiton.title}}</h2></div>

                                       <div> <p>You should spend about 60 minutes on this task. Write at least 150 words.</p></div>
                                    </div>
                                </div>
                            </div>


                            <div class="row gx-10">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div style="padding: 10px;">
                                         <div>
                                            <div v-html="writing_quesiton.description">
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div>

                                        <div class="message" v-if="message!=null">
                                            <div class="alert alert-success" role="alert">
                                                {{message}}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div v-if="is_submit==1">
                                            <div>
                                                <h4 style="font-weight: bold">Your Submitted Writing:</h4>
                                                {{submission[0].task_text}}
                                            </div>
                                            <hr/>
                                            <div v-if="is_assessed==1">
                                                <div class="marking">
                                                    <table  class="table-striped" id="module">
                                                        <tr>
                                                            <th>TA</th> <th>CC</th> <th>LR</th> <th>GRA</th> <th>Total</th>
                                                        </tr>
                                                        <tr>
                                                            <td>55</td> <td>55</td> <td>5</td> <td>5</td> <td>58</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div class="instructor_feedback">
                                                    <h4 style="font-weight: bold">Instructor Feedback:</h4>
                                                    <p>INstructor Feed back</p>
                                                </div>
                                                <hr/>
                                                <div class="detail_marking">
                                                    <h4 style="font-weight: bold">Detail Marks Breakdown:</h4>
                                                    <div class="row">
                                                        <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                                            <table  class="table-striped" id="module">
                                                                <tr>
                                                                    <th>Task Acheivement (25%)</th> <th>Marks</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>Addressing all main feature (A) or bullet point (GT)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Overaview (A) or Purpose (GT)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Summary & comparision (A) or tone (GT)</td> <td>0</td>
                                                                </tr>
                                                            </table>
                                                            <br/>

                                                            <table  class="table-striped" id="module">
                                                                <tr>
                                                                    <th>Coherance and cohesion (25%)</th> <th>Marks</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>How easy to follow the ideas</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Range and use of discourse markers</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Referencing</td> <td>0</td>
                                                                </tr>
                                                            </table>
                                                                <br/>
                                                            <table  class="table-striped" id="module">
                                                                <tr>
                                                                    <th>Lexical Resource (25%)</th> <th>Marks</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>Range of vocabulary</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Choice of words (including register and collocations)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Word formation & spelling</td> <td>0</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                                            <table  class="table-striped" id="module">
                                                                <tr>
                                                                    <th>Grammatical range and accuracy (25%)</th> <th>Marks</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>Range of structures (in general)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Accuracy of structure (in general)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tense choice and structure (including active and passive sentences)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Subject-verb agreement (including singular and plural issues)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Articles</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Preposition</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Relative Clauses (variation & structures)</td> <td>0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Use of punctuation marks</td> <td>0</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                Have not checked Yet by your Instructor.
                                            </div>
                                        </div>

                                        <div v-else>
                                            <form @submit.prevent="handleSubmit">
                                                <div>
                                                    <div class="mb-3">
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your essay here" rows="20" v-model="form_data.input_task"></textarea>
                                                    </div>
                                                    <div>Word Count: {{wordCount}}</div>
                                                </div>
                                                <div>
                                                    <div class="submit_button">
                                                        <button class="btn btn-primary btn-xs"> Submit </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--
                            <div class="row">
                                <div style="display: flex;justify-content: space-between; border: 1px solid #ddd; padding: 5px; margin: 10px;">
                                    <div style="display: inline-flex;">
                                        <div class="m-2"><input type="checkbox"> Review </div>
                                        <div class="small_button">1</div>
                                        <div class="small_button">2</div>
                                    </div>
                                    <div style="margin-top: 10px"><i class="bi bi-clock"></i>60 minutes remaining</div>
                                </div>
                            </div>
                            -->
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
        name: "Writing_list",
        components: { },
            data(){
                return {
                    page : "Righting List",
                    auth_token: this.$store.state.authToken,
                    question_id: this.$route.params.question_id,
                    course_id: this.$route.params.course_id,
                    task: this.$route.params.task,
                    writing_quesiton: [],
                    auth_token: this.$store.state.authToken,
                    form_data:{
                        input_task:null,
                    },
                    course_id:1,
                    timerCount: 60,
                    timerUsed: 0,
                    message:null,
                    is_submit:0,
                    submission:null,
                    is_assessed:1,
                }
            },
            computed:{
                wordCount(){
                   // console.log(this.input_task.split(' '));
                   if(this.form_data.input_task!=null){
                        return this.form_data.input_task.split(' ').length;
                   }else{
                    return 0;
                   }

                }
            },
            methods:{
                writingQuestionDetail(){
                    LessonDataService.writingQuestionDetail(this.question_id,this.auth_token)
                    .then(response=>{
                        this.writing_quesiton = response.data.writing_question;
                        this.is_submit = response.data.is_submit;
                        this.submission = response.data.submission;
                    })
                    .catch(error=>{
                         console.log(error);
                    })
                },
               handleSubmit(){
                    let payload = {
                                    writing_question_id:this.question_id,
                                    task_text:this.form_data.input_task,
                                    time_used: this.timerUsed
                                    }
                    LessonDataService.submitWritingTask(payload,this.auth_token)
                    .then(response=>{
                        this.message=  response.data;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                }

            },
            watch: {
                timerCount: {
                    handler(value) {

                        if (value > 0) {
                            setTimeout(() => {
                                this.timerCount--;
                                this.timerUsed++;
                            }, 60000);
                        }

                    },
                    immediate: true // This ensures the watcher is triggered upon creation
                }

            },
            mounted() {
                 console.log("WritingtestComponent");
                 this.writingQuestionDetail();

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

.question_text{
        color: #000000;
    font-weight: 500;
}

.instructor_feedback{
    margin-top: 27px;
}

</style>


