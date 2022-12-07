<template lang="">
    <div class="container">
        <div class="row flex-nowrap">
            <div class="col-md-12">
                <div style="padding: 10px; border: 1px solid #ddd; margin: 10px;">
                      <h4>Lesson : {{lesson_detail.title}} (Add a Quiz for this Lesson) </h4>
                    <div>
                        <p>
                            {{lesson_detail.description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div v-if="module_id==1">
                    <ReadingdemoTemplate
                        :lesson_detail="lesson_detail"
                        :article="article"
                        :question_type="question_type"
                        :quiz_title="quiz_title"
                        :selected_quiztype="selected_quiztype"
                        :inputs_truefalse="inputs_truefalse"
                        :inputs_muilteple="inputs_muilteple"
                        :inputs_reorder="inputs_reorder"
                        :inputs_radio="inputs_radio"
                        :inputs_fillblank="inputs_fillblank"
                        :inputs_dropdown="inputs_dropdown"  />
                </div>
                <div v-else>
                     <GeneraldemoTemplate
                        :lesson_detail="lesson_detail"
                        :article="article"
                        :question_type="question_type"
                        :quiz_title="quiz_title"
                        :selected_quiztype="selected_quiztype"
                        :inputs_truefalse="inputs_truefalse"
                        :inputs_muilteple="inputs_muilteple"
                        :inputs_reorder="inputs_reorder"
                        :inputs_radio="inputs_radio"
                        :inputs_fillblank="inputs_fillblank"
                        :inputs_dropdown="inputs_dropdown"  />
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
                                    <td v-html="quiz_item.question"></td>
                                    <td>{{quiz_item.marks}}</td>
                                    <td>{{  quiz_type[quiz_item.quiz_type].name }}</td>
                                    <td>
                                        <button class="bsimple_button_1 btn-danger button-rounded" @click="deleteQuiz(quiz_item.id)"> Delete </button>
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


                        <div v-if="alert_success!=null"  class="my-5">
                            <div class="alert alert-success" role="alert">
                                     <p>{{alert_success}} </p>
                            </div>
                        </div>
                        <form @submit.prevent="handeSubmit">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="single-form">
                                        <label class="label">Quiz Question:</label>
                                          <QuillEditor theme="snow" v-model:content="quiz_title" contentType="html" required/>
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

                                    <div class="single-form">
                                        <div class="single-form">
                                            <label class="label">Quiz Type:</label>
                                            <select class="myselect" v-model="selected_quiztype" @change="changeQuizType($event)">
                                                <option v-for="(quiztype,index) in quiz_type" :value="quiztype.id" :key="index">{{quiztype.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">

                                      <div v-if="selected_quiztype==1">
                                            <h3 class="text-center">Please select the Correct Answer  </h3>
                                            <div :class="{option_item_selected:inputs_truefalse[0].iscorrect}" class="option_item" @click="selectTrueFalse(0)">
                                                True
                                            </div>

                                             <div :class="{option_item_selected:inputs_truefalse[1].iscorrect}" class="option_item" @click="selectTrueFalse(1)">
                                                False
                                            </div>
                                      </div>

                                    <div v-if="selected_quiztype==2" class="my-5">
                                        <div class="multiple_choise">
                                            <div style="margin-bottom: 5px">
                                            <button class="simple_button_1" @click.prevent="addOption"><i class="bi bi-plus-circle-fill"></i> Add Option</button>
                                            </div>
                                            <div v-for="(ans,indi) in inputs_muilteple">
                                                <div class="single-form">
                                                    <input type="text" placeholder="Option Text" v-model="ans.value" style="width: 60%;margin-right: 5px;">
                                                    <button class="simple_button_1" :class="{selected_simple:ans.iscorrect}" @click.prevent="ans.iscorrect=!ans.iscorrect">{{ans.iscorrect?'Correct':'Incorrect'}}</button>
                                                    <button class="simple_button_1" @click="removeOption(indi)"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="selected_quiztype==3" class="my-5">
                                        <div class="re_order">
                                            <div style="margin-bottom: 5px">
                                                <button class="simple_button_1" @click.prevent="addReorder"><i class="bi bi-plus-circle-fill"></i> Add Text</button>
                                            </div>
                                            <div v-for="(ans,indix) in inputs_reorder">
                                                <div class="single-form" style="display: flex">
                                                    <div style="width: 90%;">
                                                        <input type="text" placeholder="Text Content" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>
                                                    <div style="margin-top: 7px;margin-left: 6px;">
                                                        <button class="simple_button_1" @click.prevent="removeReorder(indix)"><i class="bi bi-trash3-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="selected_quiztype==4" class="my-5">
                                             {{inputs_radio}}
                                        <div class="quiz_radio">
                                            <div style="margin-bottom: 5px">
                                            <button class="simple_button_1" @click.prevent="addRadio"><i class="bi bi-plus-circle-fill"></i> Add Radio</button>
                                            </div>
                                            <div v-for="(ans,indi) in inputs_radio">
                                                <div class="single-form">
                                                    <input type="text" placeholder="Text Content" v-model="ans.value" style="width: 75%; margin-right: 5px;" required>
                                                    <button class="simple_button_1" :class="{selected_simple:ans.iscorrect}" @click.prevent="ans.iscorrect=!ans.iscorrect">{{ans.iscorrect?'Correct':'Incorrect'}}</button>
                                                    <button class="simple_button_1" @click="removeRadio(indi)"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="selected_quiztype==5" class="my-5">
                                        <div class="fill_blank">
                                            <div class="small_item_holder my-5">
                                                <div class="small_item"><button class="simple_button_1" @click.prevent="addText"><i class="bi bi-plus-circle-fill"></i> Add Text</button></div>
                                                <div class="small_item"><button class="simple_button_1" @click.prevent="addInput"><i class="bi bi-plus-circle-fill"></i> Add Blank</button></div>
                                                <div class="small_item"> <button class="simple_button_1" @click.prevent="addSerial"><i class="bi bi-plus-circle-fill"></i> Add Serial</button></div>
                                            </div>
                                            <div v-for="(ans,indix) in inputs_fillblank">
                                                <div class="single-form" style="display: flex">
                                                    <div v-if="ans.element_type=='text'" style="width: 90%;">
                                                        <input type="text" placeholder="Text Content" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>
                                                    <div v-if="ans.element_type=='input'" style="width: 90%;">
                                                        <input type="text" placeholder="Correct Answer" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>
                                                      <div v-if="ans.element_type=='serial'" style="width: 90%;">
                                                        <strong> ({{ans.value}})</strong>
                                                    </div>
                                                    <div style="margin-top: 7px;margin-left: 6px;">
                                                        <button class="simple_button_1" @click.prevent="removeFillblank(indix)"><i class="bi bi-trash3-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div v-if="selected_quiztype==6" class="my-5">
                                        <div class="drop_down">
                                            <div class="small_item_holder my-5">
                                                <div class="small_item"><button class="simple_button_1" @click.prevent="addDropdownText"><i class="bi bi-plus-circle-fill"></i> Add Text</button></div>
                                                <div class="small_item"><button class="simple_button_1" @click.prevent="addDropdownOption"><i class="bi bi-plus-circle-fill"></i> Add DropDown</button></div>
                                                <div class="small_item"> <button class="simple_button_1" @click.prevent="addDropdownSerial"><i class="bi bi-plus-circle-fill"></i> Add Serial</button></div>
                                            </div>
                                            <div v-for="(ans,indix) in inputs_dropdown">
                                                <div class="single-form" style="display: flex">
                                                    <div v-if="ans.element_type=='text'" style="width: 90%;">
                                                        <input type="text" placeholder="Text Content" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>

                                                    <div v-if="ans.element_type=='dropdown'" style="width: 90%;">
                                                        <input type="text" placeholder="Dropdown Option Text" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>

                                                    <div v-if="ans.element_type=='serial'" style="width: 90%;">
                                                        <strong> ({{ans.value}})</strong>
                                                    </div>
                                                    <div style="margin-top: 7px;margin-left: 6px;">
                                                        <button class="simple_button_1" @click.prevent="removeFillblank(indix)"><i class="bi bi-trash3-fill"></i></button>
                                                    </div>
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

import ReadingdemoTemplate from './ReadingdemoTemplate.vue';
import GeneraldemoTemplate from './GeneraldemoTemplate.vue';

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';


export default {
    name: 'Content Quiz',
     components: {
      draggable: VueDraggableNext, QuestionCount,QuillEditor,ReadingdemoTemplate,GeneraldemoTemplate
    },
  data() {
    return {
      lesson_id: this.$route.params.lesson_id,
      module_id: this.$route.params.module_id,
      lesson_detail: {},
      quiz_list: {},
      article:{},
      alert_next:[],
      alert_success:null,
      iscomplete:false,
      question_type: null,
      quiz_title: null,
      quiz_marks: 0,
      quiz_timelimit: 0,
      selected_quiztype: 0,
      quiz_type: [
                    {name: 'Select a Quiz type', id: 0, value: null},
                    {name: 'True False', id: 1, value: 'true_false'},
                    {name: 'Multiple Choise', id: 2, value: 'multiple_choise'},
                    {name: 'Re-Order', id: 3, value: 're_order'},
                    {name: 'Radio', id: 4, value: 'radio'},
                    {name: 'Fill Blank', id: 5, value: 'fill_blank'},
                    {name: 'Drop Down', id: 6, value: 'drop_down'},
                    {name: 'Drag and Drop', id: 7}
                ],
      checked: true,
      inputs_truefalse:[{name:'True',value:'True',iscorrect:false},{name:'False',value:'False',iscorrect:false}],
      inputs_muilteple:[{name:'',value:'',iscorrect:false}],
      inputs_radio:[],
      inputs_fillblank:[],
      inputs_dropdown:[],
      inputs_reorder:[],
      auth_token: this.$store.state.authToken,
      serial: 0,
    };
  },
  methods: {
    quizList(){
          ContentDataService.quizList(this.lesson_id, this.auth_token)
        .then((response) => {
          console.log(response.data.quizlist);
          this.quiz_list =response.data.quizlist;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addOption(){
        this.inputs_muilteple.push({name:'',value:'',iscorrect:false});
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
    addDropdownText(){
        this.inputs_dropdown.push({name:'',value:'',element_type:'text'});
    },
    addDropdownOption(){
        this.inputs_dropdown.push({name:'',value:'',element_type:'dropdown'});
    },
    addDropdownSerial(){
        this.serial+=1;
        this.inputs_dropdown.push({name:'',value:this.serial,element_type:'serial'});
    },
    addReorder(){
           this.inputs_reorder.push({name:'',value:''});
    },
    addRadio(){
           this.inputs_radio.push({name:'',value:'',iscorrect:''});
    },
    removeOption(index) {
      this.inputs_muilteple.splice(index, 1);
    },
    removeFillblank(index) {
      this.inputs_fillblank.splice(index, 1);
    },
    removeReorder(index){
      this.inputs_reorder.splice(index, 1);
    },
    removeRadio(index){
      this.inputs_radio.splice(index, 1);
    },
    handeMouseup(e,id){
        console.log(e);
        console.log(id);
    },
    lessonById() {
      LessonDataService.lessonById(this.lesson_id, this.auth_token)
        .then((response) => {
          console.log(response.data.data[0]);
          this.lesson_detail = response.data.data[0];
          this.article = response.data.data[0].article;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    insertTrueFalse(selected){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            correct_ans:selected,
                        };
        ContentDataService.insertTrueFalse(payload, token)
        .then(response => {
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
        })
        .catch(error=>{
            console.log(error);
        })
    },
    insertMultiplechoise(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_muilteple:this.inputs_muilteple
                        };
        ContentDataService.insertMultiplechoise(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
        })
        .catch(error=>{
            console.log(error);
        })
    },
    insertFillblank(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_fillblank:this.inputs_fillblank
                        };
        ContentDataService.insertFillblank(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
        })
        .catch(error=>{
            console.log(error);
        })
    },
    insertReOrder(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_reorder:this.inputs_reorder
                        };
        ContentDataService.insertReOrder(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
        })
        .catch(error=>{
            console.log(error);
        })
    },
    insertRadio(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_radio:this.inputs_radio
                        };
        ContentDataService.insertRadio(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
        })
        .catch(error=>{
            console.log(error);
        })
    },
     insertDropDown(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_dropdown:this.inputs_dropdown
                        };
        ContentDataService.insertDropDown(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
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

        if(this.selected_quiztype==0){
            this.alert_next.push('Please select a Quiz type');
        }else{
            this.iscomplete = true;
        }

        if(this.quiz_marks==0){
            this.alert_next.push('Please Input  Quiz Marks');
        }else{
            this.iscomplete = true;
        }

        if(this.selected_quiztype==1){
           let ture_false = this.inputs_truefalse.find(x => x.iscorrect==true);
           if(ture_false==undefined){
              this.alert_next.push('Please select True or False any one');
           }else{
             this.iscomplete = true;
              this.insertTrueFalse(ture_false.name);
           }

        }else if(this.selected_quiztype==2){
            this.insertMultiplechoise();
        }else if(this.selected_quiztype==3){
            this.insertReOrder();
        }else if(this.selected_quiztype==4){
            this.insertRadio();
        }else if(this.selected_quiztype==5){
            this.insertFillblank();
        }else if(this.selected_quiztype==6){
            this.insertDropDown();
        }

        if(this.iscomplete){
          //      this.addArticle();
        }

    },
    changeQuizType(event){
        let quiz_type  = event.target.value;
        if(quiz_type==1){
            this.question_type ="True/False";
        }else if(quiz_type==2){
            this.question_type ="Multipile choise";
        }else if(quiz_type==3){
            this.question_type ="Re-Order";
        }else if(quiz_type==4){
            this.question_type ="Radio";
        }else if(quiz_type==5){
            this.question_type ="Fill-Blank";
        }
    },
    selectTrueFalse(index){
         this.inputs_truefalse[0].iscorrect= false;
         this.inputs_truefalse[1].iscorrect= false;
         this.inputs_truefalse[index].iscorrect= true;
    },
     deleteQuiz(quiz_id){
        console.log("dlete");
        ContentDataService.deleteQuiz(quiz_id,this.auth_token)
        .then(response =>{
            console.log(response);
            this.quizList();
        })
        .catch(error=>{
             console.log(error);
        })
    }
  }, // methods end
  mounted() {
    this.lessonById();
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
