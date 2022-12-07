<template>
    <div class="quiz_wrapper">
        <div class="quiz_content">
            <div class="ans_options">
                <div v-for="ans in quiz_ans" class="inline_content">
                    <div v-html="ans.text"></div>
                    <div v-if="ans.is_dropdown === 'yes'"  >
                        <div v-if="ans.correct_answer.length>0" class="mx-2">
                            <span v-if="anstype[ans.ans_serial]==ans.correct_answer">
                                 <span  class="input_blank text-center correct_answer"> <i class="bi bi-check2-circle"></i> {{ans.correct_answer}} </span>
                            </span>
                            <span v-else>
                                 <span  class="input_blank text-center incorrect_answer"  >  <i class="bi bi-x-octagon"></i> {{anstype[ans.ans_serial]}}</span>   <span  class="input_blank text-center correct_answer"> {{ans.correct_answer}}  </span>
                            </span>
                        </div>
                    </div>
                    <div v-if="ans.element_type === 'serial'" >
                            <strong>( {{ans.value}} )</strong>
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
            page : "Quiz Drop Down Review",
            auth_token: this.$store.state.authToken,
            input_blank: [],
            quiz_ans: [],
            anstype: JSON.parse(this.myans),
        }
        },
    methods:{
        retriveQuizDropdown(){
                LessonDataService.retriveQuizDropdown(this.quiz_id,this.auth_token)
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
        }
    },
    mounted(){
        this.retriveQuizDropdown();
    }
}
</script>


<style>


.correct_answer{
color:blue;
padding-left: 5px;
padding-right: 5px;
}

.incorrect_answer{
color:rgb(233, 39, 55);
padding-left: 5px;
padding-right: 5px;
text-decoration: line-through;
}

</style>



