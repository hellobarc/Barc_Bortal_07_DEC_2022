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
                <!--content display example-->
                <div class="reading_wrapper">
                    <div class="reading-title">
                           {{article.title}} : {{lesson_detail.unit_name}}
                    </div>
                    <div class="inner_content">
                        <div class="content_title">Read The Passage and answer the following questions  </div>
                        <div class="passage_content">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="reading_passage">
                                        <h4> {{article.title}}</h4>
                                        <div> {{article.content}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div>
                                        <div class="quiz_wrapper">
                                            <div class="question_count">
                                                <div v-if="question_type!=null">
                                                    <QuestionCount :text="question_type?question_type:'Not set'" :index="0" :quizz_count="1"></QuestionCount>
                                                </div> 
                                            </div>
                                            <div class="quiz_content">
                                                    <div class="quiz_question">
                                                        {{quiz_title}} 
                                                    </div>
                                                    <div v-if="selected_quiztype==1">
                                                        <div class="ans_options">
                                                            <div v-for="ans in inputs_truefalse">
                                                                <div :class="{option_item_selected:ans.iscorrect }" class="option_item" >
                                                                    {{ans.value}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="selected_quiztype==2">
                                                        <div class="ans_options">
                                                            <div v-for="ans in inputs_muilteple">
                                                                <div :class="{option_item_selected:ans.iscorrect }" class="option_item">
                                                                {{ans.value}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="selected_quiztype==3">
                                                        <draggable v-model="inputs_reorder" >
                                                            <transition-group>
                                                                <div v-for="(element,index) in inputs_reorder" :key="index" class="draggable_item" @dragstart="handeMouseup($event,element.id)" >
                                                                    <div :key="index">{{element.value}}</div>
                                                                </div>
                                                            </transition-group>
                                                        </draggable>
                                                    </div>
                                                    
                                                    <div v-if="selected_quiztype==4">
                                                        <div class="ans_options">
                                                            <div v-for="ans in inputs_radio">
                                                                <input type="radio" name="radio">
                                                                {{ans.value}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div v-if="selected_quiztype==5">
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
                                                    </div>
                                                    <div v-if="selected_quiztype!=0">
                                                        <div style="display:flex; justify-content: space-between;">
                                                            <div class="submit_button">
                                                                <button class="btn btn-primary btn-xs"> Complete </button>
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
                 <!--content display example end-->
            </div>
        </div>           

         <div class="row">
            <div class="col-md-12">
               <div style="margin-bottom: 20px; padding: 10px;">
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
                        <form @submit.prevent="handeSubmit">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="single-form">
                                        <label class="label">Quiz Question:</label>
                                        <input type="text" placeholder="Lesson Title or Topics" v-model="quiz_title">
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

                                    <div v-if="selected_quiztype==2">
                                        <div class="multiple_choise">
                                            <div style="margin-bottom: 5px">
                                            <button class="simple_button_1" @click.prevent="addOption"><i class="bi bi-plus-circle-fill"></i> Add Option</button>
                                            </div>
                                            <div v-for="(ans,indi) in inputs_muilteple">
                                                <div class="single-form">
                                                    <input type="text" placeholder="Option Text" v-model="ans.value" style="width: 60%;margin-right: 5px;">
                                                    <button class="simple_button_1" :class="{selected_simple:ans.iscorrect}" @click="ans.iscorrect=!ans.iscorrect">{{ans.iscorrect?'Correct':'Incorrect'}}</button>
                                                    <button class="simple_button_1" @click="removeOption(indi)"><i class="bi bi-trash3-fill"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="selected_quiztype==3">
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

                                    <div v-if="selected_quiztype==4">
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

                                    <div v-if="selected_quiztype==5">
                                   
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
                    {name: 'Select a Quiz type', id: 0},
                    {name: 'True False', id: 1},
                    {name: 'multiple_choise', id: 2},
                    {name: 'Re-Order', id: 3},
                    {name: 'Radio', id: 4},
                    {name: 'Fill Blank', id: 5}
                ],
      checked: true,
      inputs_truefalse:[{name:'True',value:'True',iscorrect:false},{name:'False',value:'False',iscorrect:false}],
      inputs_muilteple:[{name:'',value:'',iscorrect:false}],
      inputs_radio:[],
      inputs_fillblank:[],
      inputs_reorder:[],
      auth_token: this.$store.state.authToken,
      serial: 0,
    };
  },
  methods: {
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
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
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
           // validaiton
           let ture_false = this.inputs_truefalse.find(x => x.iscorrect==true);
           if(ture_false==undefined){
              this.alert_next.push('Please select True or False any one');
           }else{
             this.iscomplete = true;
             // Insert to database//
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
        };

        if(this.iscomplete){
                this.addArticle();
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
    }
  }, // methods end
  mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
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
