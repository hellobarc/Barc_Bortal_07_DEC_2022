<template lang="">
    <div class="container">     
        <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="mt-5 mb-5" style="display:flex;justify-content: space-between; ">
                    <button class="button_back">  <router-link :to="'/content/lesson/3'"> <i class="bi bi-arrow-left"></i>  Back  </router-link></button>
                    <button class="button_back"> <router-link :to="'/extra_manage/'+lesson_detail.id">    Extras <i class="bi bi-arrow-right"></i> </router-link></button>
                </div>
                <div class="reading_wrapper">
                    <div class="reading-title">
                            Grammar : {{lesson_detail.course_name}} : {{lesson_detail.unit_name}}
                    </div>
                    <div class="inner_content">
                        <div class="content_title">{{lesson_detail.title}}  </div>
                        <div class="passage_content">
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <h4>{{quiz_title}}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div>

                                        <div class="ans_options">
                                            <div v-for="ans in inputs_fillblank" class="inline_content">
                                                <div v-if="ans.element_type === 'text'" >
                                                        {{ans.value}} 
                                                </div>
                                                <div v-if="ans.element_type === 'input'"  >
                                                    <input type="text" :value="ans.blank_ans" class="fill_blank_element">
                                                </div>
                                                <div v-if="ans.element_type === 'serial'" >
                                                        <strong>( {{ans.value}} )</strong>  
                                                </div>
                
                                            </div>
                                        </div>

                                         <div class="single-form text-center">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



         <div class="row">
            <div class="col-md-12">
               <div style="margin-bottom: 20px; padding: 10px;">

                         <div>
                            <table class=" table-striped " id="module">
                                <tr>
                                    <th>Sl</th>
                                    <th>Question</th>
                                    <th>Marks</th>
                                    <th>Type</th>
                                    <th>Action </th>
                                </tr>
                                <tr v-for="(quiz_item, index) in quiz_list" :key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{quiz_item.question}}</td>
                                    <td>{{quiz_item.marks}}</td>
                                    <td>Fill Blank</td>
                                    <td> 
                                        <button class="bsimple_button_1 btn-danger button-rounded"> Delete </button>
                                    </td>
                                </tr>
                            </table>   
                        </div> 

                      <div v-if="alert_next.length!=0" class="my-5">
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
                        <form @submit.prevent="handeSubmit">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="single-form">
                                        <label class="label">Instruction to Excersize (Quiz Title):</label>
                                        <input type="text" placeholder="Lesson Instruction" v-model="quiz_title">
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-form">
                                                <label class="label">Marks:</label>
                                                <input type="number" min="1" placeholder="Marks for this quiz" v-model="quiz_marks">
                                            </div>
                                        </div>
                                         <div class="col-md-6">
                                            <div class="single-form">
                                                <label class="label">Time Limit (opitonal):</label>
                                                <input type="number" min="1" placeholder="Marks for this quiz" v-model="quiz_timelimit">
                                            </div>
                                        </div>
                                    </div>        

                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                   
                                        <div class="fill_blank">
                                            <div style="margin-bottom: 5px">
                                                <button class="simple_button_1" @click.prevent="addText"><i class="bi bi-plus-circle-fill"></i> Add Text</button>
                                                <button class="simple_button_1" @click.prevent="addInput"><i class="bi bi-plus-circle-fill"></i> Add Blank</button>
                                                <button class="simple_button_1" @click.prevent="addSerial"><i class="bi bi-plus-circle-fill"></i> Add Serial</button>
                                            </div>
                                            <div v-for="(ans,indix) in inputs_fillblank">
                                                <div class="single-form" style="display: flex">
                                                    <div v-if="ans.element_type=='text'" style="width: 90%;">
                                                        <input type="text" placeholder="Text Content" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div> 
                                                    <div v-if="ans.element_type=='input'" style="width: 90%;">
                                                        <input type="text" placeholder="Correct Answer" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>  
                                                    <div style="margin-top: 7px;margin-left: 6px;">
                                                        <button class="simple_button_1" @click.prevent="removeFillblank(indix)"><i class="bi bi-trash3-fill"></i></button>
                                                    </div>         
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>  
                            <div class="single-form text-center">
                                 <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
               </div>
            </div>
        </div>
    </div>
</template>


<script> 
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import LessonDataService from "../services/LessonDataService";
import ContentDataService from "../services/ContentDataService";
import QuestionCount from "../student_components/spare_components/quiz/QuestionCount.vue";

export default {
    name: 'Content Quiz',
     components: {
      draggable: VueDraggableNext, QuestionCount
    },
  data() {
    return {
      lesson_id: this.$route.params.lesson,
      lesson_detail: {},
      quiz_list: {},
      alert_next:[],
      alert_success:null,
      iscomplete:false,
      question_type: null,
      quiz_title: null,
      quiz_marks: 0,
      quiz_timelimit: 0,
      quiz_type:5,
      checked: true,
      inputs_fillblank:[],
      auth_token: this.$store.state.authToken,
      serial: 0,
    };
  },
  methods: {
    quizList(){
          ContentDataService.quizList(this.lesson_id, this.auth_token)
        .then((response) => {
             this.quiz_list = response.data.quizlist;
        })
        .catch((error) => {
          console.log(error);
        });
    },
   
    addText(){
      this.inputs_fillblank.push({name:'',value:'',element_type:'text'});
    },
    addInput(){
      this.inputs_fillblank.push({name:'',value:'',element_type:'input'});
    },
    addSerial(){
        this.serial+=1;
        this.inputs_fillblank.push({name:'',value:this.serial,element_type:'serial'});
    },
   
    removeFillblank(index) {
      this.inputs_fillblank.splice(index, 1);
    },
   
    handeMouseup(e,id){
        console.log(e);
        console.log(id);
    },
    lessonById(lesson_id, token) {
      LessonDataService.lessonById(lesson_id, token)
        .then((response) => {
          console.log(response.data.data[0]);
          this.lesson_detail = response.data.data[0];
          this.article = response.data.data[0].article;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    insertFillblank(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.quiz_type,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_fillblank:this.inputs_fillblank
                        };
        ContentDataService.insertFillblank(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
        })
        .catch(error=>{
            console.log(error);
        })
    },
    handeSubmit(){

        if(this.quiz_title==null){
            this.alert_next.push('Please write a Title');
        }else{
            this.iscomplete = true;
        }

        if(this.quiz_marks==0){
            this.alert_next.push('Please Input  Quiz Marks');
        }else{
            this.iscomplete = true;
        }


        if(this.iscomplete){
            this.insertFillblank();
        }

          this.quizList();

    }
    
  }, // methods end
  mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
      this.quizList();
  },
};
</script>

<style>
.option_input{
    width: 90%;
    margin-right: 10px;
}

.fill_blank_element{
 margin-right: 5px;
}
</style>
