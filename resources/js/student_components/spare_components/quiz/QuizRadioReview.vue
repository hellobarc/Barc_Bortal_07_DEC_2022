<template>
    <div class="quiz_wrapper">
        <div class="quiz_content">
            <div class="ans_options">
                <div v-for="(ans,indx) in quiz_ans" :key="indx">
                    <div>
                        <label class="container" :class="{'incorrect_ans':ans.option_text==myans}">
                            <div style="display:flex; justify-content: auto;">

                                <input type="radio" :checked="ans.option_text==myans" class="radio_input">

                                <span v-html="ans.option_text"></span>

                                <span class="check"></span>
                                <div class="icon_pic"  v-if="ans.is_correct=='yes' && myans==ans.option_text"><i class="bi bi-check-all correct_icon"></i></div>
                                <div class="icon_pic" v-if="ans.is_correct=='no' && myans==ans.option_text"><i class="bi bi-x-octagon incorrect_icon"></i></div>
                                <div class="icon_pic" v-if="ans.is_correct=='yes'"><i class="bi bi-check-all correct_icon"></i></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LessonDataService from '../../../services/LessonDataService';

export default {
    props: ["quiz_id","myans"],
    components:{ },
    data(){
        return {
            page : "Quiz Radio Review",
            auth_token: this.$store.state.authToken,
            quiz_ans:[],
        }
    },
    computed:{

    },
    methods:{
        retriveQuizRadio(){
                LessonDataService.retriveQuizRadio(this.quiz_id,2,this.auth_token)
                .then(res => {
                    this.quiz_ans = res.data;
                })
                .catch(err=>{

                });
        },
        showAlert() {
            // Use sweetalert2
             this.$swal('Please Select an Answer');
        }
    },
    mounted(){
        this.retriveQuizRadio();
    }
}
</script>

<style>
.incorrect_ans{

    border-radius: 4px;
}

.icon_pic{
    margin-left: 5px;
}

.incorrect_icon{
    color:  red;
    font-size: 1rem;
}

.correct_icon{
    color:  rgb(4, 94, 228);
    font-size: 1rem;
}

.radio_input{
    margin-right: 5px;
}
</style>



