<template>
    <div class="quiz_wrapper">
            <div class="question_count">
                <QuestionCount text="True or False" :index="index" :quizz_count="quizz_count"></QuestionCount>
            </div>
           <div class="quiz_content">
                <div class="quiz_question" v-html="quiz_info.question"></div>
                <div class="ans_options">
                    <div>
                        <div :class="{'option_item_selected':1 == selected_ans ? true : false }" class="option_item" @click="handleSelect(1)">
                            True
                        </div>
                    </div>

                     <div>
                        <div :class="{'option_item_selected':2 == selected_ans ? true : false }" class="option_item" @click="handleSelect(2)">
                            False
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
    components:{ QuestionCount, SubmitButton },
    data(){
            return {
                page : "Reading Page",
                auth_token: this.$store.state.authToken,
                quiz_id: this.quiz_info.id,
                quiz_ans: null,
                selected_ans: null
            }
        },
    methods:{
        handleSelect(myitem){
                this.selected_ans = myitem;
        },
        handleClickNext() {
            if(this.selected_ans==null){
                this.showAlert();
            }else{
                this.$emit("ClickNextButton",{quiz_type:1,quiz_id:this.quiz_id,selected_ans:this.selected_ans});
            }
        },
        handleClickPrev() {
            if(this.selected_ans==null){
                this.showAlert();
            }else{
                this.$emit("ClickNextButton",{quiz_type:1,quiz_id:this.quiz_id,selected_ans:this.selected_ans});
            }
        },
        handleComplete(){
            this.$emit("ClickCompleteButton",{quiz_type:1,quiz_id:this.quiz_id,selected_ans:this.selected_ans});
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        },
        retriveQuizAnswer(){
                LessonDataService.retriveQuizAnswer(this.quiz_id,1,this.auth_token)
                .then(res => {
                    this.quiz_ans = res.data;
                })
                .catch(err=>{

                });
        },
        showAlert() {
            // Use sweetalert2
             this.$swal('Please Select an Answer');
        },
    },
    mounted(){
        this.retriveQuizAnswer();
        console.log(this.quiz_id);
    }
}
</script>

<style>

</style>



