<template>
    <div class="quiz_wrapper">
            <div class="question_count">
                <QuestionCount text="Re-order" :index="index" :quizz_count="quizz_count"></QuestionCount>
            </div>
           <div class="quiz_content">
                <div class="quiz_question">
                    Re-order the Correct sentence ?
                      {{list}}
                </div>
                <div class="ans_options">
                  
                    <div class="ans_options">
                        <draggable v-model="list" >
                            <transition-group>
                                <div v-for="element in list" :key="element.id" class="draggable_item" @dragstart="handeMouseup($event,element.id)" >
                                    {{element.content_text}}
                                </div>
                            </transition-group>
                        </draggable>
                    </div>
                </div>
                 <SubmitButton :quizz_count="quizz_count" :index="index"  @ClickPrev="handleClickPrev"  @ClickNext="handleClickNext" @ClickComplete="handleComplete"/>
           </div>
    </div>
</template>
<script>
  import LessonDataService from '../../../services/LessonDataService';

  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  import QuizNext from './QuizNext.vue'
  import QuizPrev from './QuizPrev.vue'
  import QuizComplete from './QuizComplete.vue'
  import QuestionCount from './QuestionCount.vue';
  import SubmitButton from './parts/SubmitButton.vue';


  export default defineComponent({
    components: {
      draggable: VueDraggableNext, QuizNext, QuizPrev,QuizComplete,QuestionCount,SubmitButton
    },
    props: ["quizz_count", "index", "current_index","quiz_info"],
    data() {
      return {
        enabled: true,
        auth_token: this.$store.state.authToken,
        quiz_id: this.quiz_info.id,
        list: [],
        dragging: false,
      }
    },
    methods:{
        handleClickNext() {
            if(this.list.length==0){
                this.showAlert();
            }else{
                this.$emit("ClickNextButton",{quiz_type:3,quiz_id:this.quiz_id,selected_ans:this.list,action_type:'next'});
            }
        },
        handleClickPrev() {
            this.$emit("ClickPrevButton");
        },
        handleComplete(){
            if(this.list.length==0){
                this.showAlert();
            }else{
                this.$emit("ClickCompleteButton",{quiz_type:3,quiz_id:this.quiz_id,selected_ans:this.list,action_type:'complete'});
            }
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        },
        retriveQuizReorder(){
                LessonDataService.retriveQuizReorder(this.quiz_id,this.auth_token)
                .then(res => {
                    const mydata = res.data;
                    console.log(mydata);
                    this.list = mydata;
                    mydata.forEach((item,index)=>{
                        if(item.is_blank=="yes"){
                           input_ans[item.id] = item.id;
                        }
                    });
                })
                .catch(err=>{

                });
        },
        showAlert() {
            // Use sweetalert2
             this.$swal('Please Select an Answer');
        },
        hanldeclick(){

        }
    },
    mounted(){
        this.retriveQuizReorder();
    }
  })
</script>
