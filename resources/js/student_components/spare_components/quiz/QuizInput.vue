<template>
    <div class="quiz_wrapper">
             <div class="question_count">
                <QuestionCount text="Fill in the  Blanks" :index="index" :quizz_count="quizz_count"></QuestionCount>
            </div>
           <div class="quiz_content">
                <div class="quiz_question" v-html="quiz_info.question"></div>

                <div class="font-bold correct_ans text-center" >
                    <span class="mx-2 text-center"  v-for="(ans,index) in correct_ans" :key="index"  draggable="true" v-clipboard:copy="ans.blank_answer" v-clipboard:success="onCopy" v-clipboard:error="onError"> {{ans.blank_answer}}</span>
                    <div class="text-center" style="font-size:10px">(Click on the above WORD to copy and Click on the Blank for Paste)</div>
                </div>
                <form>
                    <div class="">
                        <span v-for="(anscontent,index) in quiz_ans" :key="index">
                            <span v-html="anscontent.text">
                            </span>
                            <span v-if="anscontent.is_blank=='yes'">
                                <input type="text" class="input_blank text-center" v-model="input_ans[anscontent.blank_serial]"  @click="clickHosie(anscontent.blank_serial)" required>
                            </span>
                                <span v-if="anscontent.serial!=null" style="font-weight: bold;">
                                ( {{anscontent.serial}})
                            </span>
                        </span>
                    </div>
                    <SubmitButton :quizz_count="quizz_count" :index="index"  @ClickPrev="handleClickPrev"  @ClickNext="handleClickNext" @ClickComplete="handleComplete"/>
                </form>
           </div>
    </div>
</template>

<script>
import LessonDataService from '../../../services/LessonDataService';
import { VueDraggableNext } from 'vue-draggable-next';

import QuestionCount from './QuestionCount.vue';
import SubmitButton from './parts/SubmitButton.vue';


export default {
    props: ["quizz_count", "index", "current_index","quiz_info"],
    components:{ QuestionCount,SubmitButton,  draggable: VueDraggableNext },
    data(){
        return {
            page : "Fill in the Blanks",
            auth_token: this.$store.state.authToken,
            quiz_id: this.quiz_info.id,
            selected_ans: null,
            input_blank: [],
            quiz_ans: [],
            correct_ans:[],
            input_ans: [],
            input_count: 0,
        }
    },
    computed:{
        inputAns(){
            return this.input_ans.filter()
        }
    },
    methods:{
        handleClickNext() {
            if(this.input_ans.length==0){
                this.showAlert();
            }else{
                this.$emit("ClickNextButton",{quiz_type:5,quiz_id:this.quiz_id,selected_ans:this.input_ans,action_type:'next'});
            }
        },
        handleClickPrev() {
            this.$emit("ClickPrevButton");
        },
        handleComplete(){
            if(this.input_ans.length==0){
                this.showAlert();
            }else{
                this.$emit("ClickCompleteButton",{quiz_type:5,quiz_id:this.quiz_id,selected_ans:this.input_ans,action_type:'complete'});
            }
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        },
        retriveQuizInput(quiz_id,token){
                LessonDataService.retriveQuizInput(quiz_id,token)
                .then(res => {
                    const mydata = res.data.lesson_data;
                    this.input_count = res.data.blank_count;
                    this.quiz_ans = mydata;

                    for(let i=0;i<6;i++){
                        this.input_ans.push(' ');
                    }

                    mydata.forEach((item,index)=>{
                        if(item.is_blank=="yes"){
                           input_ans[item.id] = item.id;
                        }
                    });
                })
                .catch(err=>{

                });
        },
        retriveQuizInpurCorrectAns(quiz_id,token){
                LessonDataService.retriveQuizInpurCorrectAns(quiz_id,token)
                .then(res => {
                    this.correct_ans = res.data;
                })
                .catch(err=>{

                });
        },
        showAlert() {
            // Use sweetalert2
             this.$swal('Please Select an Answer');
        },
        hanldeclick(){

        },
        setInputValue(value){
            console.log(value);
           // input_ans.push(value);
        },
        onCopy(e){
            this.$toast.show('You just copied: ' + e.text);
        },
        onError(e){
            alert('Failed to copy texts')
        },
        clickHosie(serial){
            navigator.clipboard.readText()
            .then(text => {
                this.input_ans[serial] = text;
            })
            .catch(err => {
                console.error('Failed to read clipboard contents: ', err);
            });
        }
    },
    mounted(){
        this.retriveQuizInput(this.quiz_id,this.auth_token);
        this.retriveQuizInpurCorrectAns(this.quiz_id,this.auth_token);
    }
}
</script>


<style>

.input_blank{
    border-bottom: 1px solid;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    width: 155px;
    background: transparent;
}

.font-bold{
    font-weight: bold;
}

</style>



