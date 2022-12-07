<template>
    <div class="quiz_wrapper">
        <div class="question_count">
            <QuestionCount text="Drop Down Quiz" :index="index" :quizz_count="quizz_count"></QuestionCount>
        </div>
        <div class="quiz_content">
            <div class="quiz_question" v-html="quiz_info.question">
            </div>
            <div class="ans_options">
                <div v-for="(ans,index) in quiz_ans" :key="index" class="inline_content">
                    <div v-html="ans.text"></div>
                    <div v-if="ans.is_dropdown === 'yes'"  >
                        <div v-if="ans.correct_answer.length>0" class="mx-2">
                            <select class="form-select" aria-label="Filter select"   @change="handeChange($event,ans.ans_serial)">
                                <option  value="">Select Correct Ans.</option>
                                <option v-for="option_text in ans.correct_answer.split('/').sort(() => .5 - Math.random())" :value="option_text">{{option_text}}</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="ans.element_type === 'serial'" >
                            <strong>( {{ans.value}} )</strong>
                    </div>
                </div>
            </div>
                <SubmitButton :quizz_count="quizz_count" :index="index"  @ClickPrev="handleClickPrev"  @ClickNext="handleClickNext" @ClickComplete="handleComplete"/>
        </div>
    </div>
</template>

<script>
import LessonDataService from '../../../services/LessonDataService';

import QuestionCount from './QuestionCount.vue';
import SubmitButton from './parts/SubmitButton.vue';

export default {
    props: ["quizz_count", "index", "current_index","quiz_info"],
    components:{ QuestionCount,SubmitButton},
    data(){
        return {
            page : "Fill in the Blanks",
            auth_token: this.$store.state.authToken,
            quiz_id: this.quiz_info.id,
            selected_ans: [],
            input_blank: [],
            quiz_ans: [],
            }
    },
    methods:{
        handleClickNext() {
            if(this.quiz_ans.length==0){
                this.showAlert();
            }else{
                this.$emit("ClickNextButton",{quiz_type:6,quiz_id:this.quiz_id,selected_ans:this.selected_ans,action_type:'next'});
            }
        },
        handleClickPrev() {
            this.$emit("ClickPrevButton");
        },
        handleComplete(){
            if(this.selected_ans==0 || this.selected_ans==null){
                this.showAlert();
            }else{
                this.$emit("ClickCompleteButton",{quiz_type:6,quiz_id:this.quiz_id,selected_ans:this.selected_ans,action_type:'complete'});
            }
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        },
        retriveQuizDropdown(){
                LessonDataService.retriveQuizOptionDropdown(this.quiz_id,this.auth_token)
                .then(res => {
                    const mydata = res.data;
                    this.quiz_ans = mydata;
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
        handeChange(event,pos){
            this.selected_ans.splice(pos,1,event.target.value);
        },
        setInputValue(value){
            console.log(value);
           // input_ans.push(value);
        }
    },
    mounted(){
        this.retriveQuizDropdown();
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
}

</style>



