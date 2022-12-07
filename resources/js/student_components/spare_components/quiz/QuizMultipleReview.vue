<template>
    <div class="quiz_wrapper">
        <div class="quiz_content">
            <div class="ans_options">
                <div v-for="(ans,indx) in quiz_ans" :key="indx" style="display:flex; justify-items: auto;">
                    <div :class="{'incorrect_option': myans==ans.option_text,'correct_option':ans.is_correct=='yes'}"  class="option_item option_width">
                        {{ans.option_text}}
                    </div>

                    <div class="cross_icon" v-if="ans.is_correct=='yes' && myans==ans.option_text"><img src="/icon_images/correct.png" style="width: 50px;"></div>
                    <div class="cross_icon" v-if="ans.is_correct=='no' && myans==ans.option_text"><img src="/icon_images/incorrect.png" style="width: 50px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LessonDataService from '../../../services/LessonDataService';

export default {
    props: ["quiz_id","myans"],
    components:{},
    data(){
            return {
                page : "Quiz Multiple Reveiw Page",
                auth_token: this.$store.state.authToken,
                quiz_ans: null,
                selected_ans: null,
            }
        },
    computed:{

    },
    methods:{
        retriveQuizAnswer(){
                LessonDataService.retriveQuizAnswer(this.quiz_id,2,this.auth_token)
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
        hanldeclick(){

        }
    },
    mounted(){
        this.retriveQuizAnswer();
    }
}
</script>

<style>

.incorrect_option{
    background-color: rgb(248, 89, 61);
    color: #fff;
}

.correct_option{
    background-color: rgb(75, 224, 82);

}

</style>



