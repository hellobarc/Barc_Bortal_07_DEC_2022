<template>
    <div class="quiz_wrapper">
        <div class="question_count">
            <QuestionCount text="Fill in the  Blanks" :index="index" :quizz_count="quizz_count"></QuestionCount>
        </div>
        <div v-for="(ans, index) in quizfillblank" :key="index" style="display:inline-block;">
            <div v-if="ans.text!=null" style="display:inline-block;">
                {{ans.text}}
            </div> 
            <div v-else-if="ans.text==null" style="display:inline-block;">
                <input type="text" placeholder=" Fill by correct answer" v-model="input_ans[index]" class="blank_sapce" required>
            </div>          
        </div>
        <SubmitButton :quizz_count="quizz_count" :index="index"  @ClickPrev="handleClickPrev"  @ClickNext="handleClickNext" @ClickComplete="handleComplete"/>
    </div>
</template>

<script>
import LessonDataService from '../../../services/LessonDataService';
import QuestionCount from './QuestionCount.vue';
import SubmitButton from './parts/SubmitButton.vue';


export default {
    props: ["quizz_count", "index", "current_index","quizfillblank"],
    components:{ QuestionCount, SubmitButton },
    data(){
            return {
                page : "Reading Page",
                auth_token: this.$store.state.authToken,
                quiz_id: this.quizfillblank.id,
                input_ans: [],
                selected_ans: null
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
                this.$emit("ClickNextButton",{quiz_type:1,quiz_id:this.quiz_id,selected_ans:this.selected_ans});
            }
        },
        handleClickPrev() {
            if(this.selected_ans==null){
                this.showAlert();
            }else{
                this.$emit("ClickPrevButton",{quiz_type:1,quiz_id:this.quiz_id,selected_ans:this.selected_ans});
            }
        },
        handleComplete(){
            this.$emit("ClickCompleteButton",{quiz_type:1,quiz_id:this.quiz_id,selected_ans:this.selected_ans});
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        },

        showAlert() {
            // Use sweetalert2
             this.$swal('Please Select an Answer');
        },
    },
    mounted(){
      
    }
}
</script>

<style>

.blank_sapce{
    margin-right: 5px;
    background: transparent;
    height: 26px;
    border-bottom: 1px solid;
    border-left: none;
    border-right: none;
    border-top: none;
    text-align: center;
}

</style>



