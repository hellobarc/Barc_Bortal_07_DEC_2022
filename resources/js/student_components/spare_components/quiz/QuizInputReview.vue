<template>
    <div class="quiz_wrapper">
           <div class="quiz_content">
                <div class="">
                    <span v-for="(anscontent,index) in quiz_ans" :key="index">
                        <span v-html="anscontent.text"></span>
                        <span v-if="anscontent.is_blank=='yes'">
                            <span v-if="anstype[anscontent.counter]==anscontent.blank_answer">
                                 <span  class="input_blank text-center correct_answer"> <i class="bi bi-check2-circle"></i> {{anscontent.blank_answer}} </span>
                            </span>
                            <span v-else>
                                 <span  class="input_blank text-center incorrect_answer"  >  <i class="bi bi-x-octagon"></i> {{anstype[anscontent.counter]}}</span>   <span  class="input_blank text-center correct_answer"> {{anscontent.blank_answer}}  </span>
                            </span>
                        </span>
                        <span v-if="anscontent.serial!=null" style="font-weight: bold;">
                            ( {{anscontent.serial}})
                        </span>
                    </span>
                </div>
           </div>
    </div>
</template>

<script>
export default {
    props: {
        quiz_ans: Object,
        myans: [Array,String]
    },
    components:{ },
    data(){
        return {
            page : "Fill in the Blanks Review",
            auth_token: this.$store.state.authToken,
            counter: [],
            quiz_answer: this.quiz_ans,
            my_answer: this.myans,
            anstype: JSON.parse(this.myans),
        }
    },
    computed:{
        ansType(){
            return  this.anstype.map(res=>{
                if(res==null){
                    res = 0;
                }
            });
        }
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



