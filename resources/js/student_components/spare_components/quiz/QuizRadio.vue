<template>
    <div class="quiz_wrapper">
            <div class="question_count">
                <QuestionCount text="Select Radio" :index="index" :quizz_count="quizz_count"></QuestionCount>
            </div>
           <div class="quiz_content">
                <div class="quiz_question" v-html="quiz_info.question">
                </div>

                <div class="ans_options">
                    <div v-for="(ans,indx) in quiz_ans" :key="indx">
                        <div>
                          <label class="container">
                            <input type="radio" name="radio" value="Apple"    @click="handleSelect(ans.id)">
                            <span v-html="ans.option_text" style="margin-left: 10px;"></span>
                            <span class="check"></span>
                          </label>
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
            page : "Reading Page",
            auth_token: this.$store.state.authToken,
            quiz_id: this.quiz_info.id,
            quiz_ans: null,
            selected_ans: null,
        }
    },
    computed:{

    },
    methods:{
        handleSelect(myitem){
                this.selected_ans = myitem;
        },
        handleClickNext() {
            if(this.selected_ans==null){
                this.showAlert();
            }else{
                this.$emit("ClickNextButton",{quiz_type:2,quiz_id:this.quiz_id,selected_ans:this.selected_ans,action_type:'next'});
            }
        },
        handleClickPrev() {
            this.$emit("ClickPrevButton");
        },
        handleComplete(){
            if(this.selected_ans==null){
                this.showAlert();
            }else{
                this.$emit("ClickCompleteButton",{quiz_type:2,quiz_id:this.quiz_id,selected_ans:this.selected_ans,action_type:'complete'});
            }
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        },
        retriveQuizRadio(){
                LessonDataService.retriveQuizRadio(this.quiz_id,2,this.auth_token)
                .then(res => {
                    this.quiz_ans = res.data;

                    console.log(res);
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
        this.retriveQuizRadio();
    }
}
</script>

<style>

</style>



