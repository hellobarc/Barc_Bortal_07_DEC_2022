<template lang="">
    <div>
        <div style="display:flex; justify-content: space-between;">
            <div><QuizPrev @ClickPrev="handleClickPrev" v-show="index!=0"></QuizPrev> </div>
            <div v-if="quizz_count==index+1"><QuizComplete @ClickComplete="handleComplete"></QuizComplete></div>
            <div v-else><QuizNext @ClickNext="handleClickNext"></QuizNext></div>
        </div>
    </div>
</template>
<script>
import QuizPrev from '../QuizPrev.vue';
import QuizNext from '../QuizNext.vue';
import QuizComplete from '../QuizComplete.vue';

export default {
    name:'Submit',
    components:{QuizPrev,QuizNext,QuizComplete},
    props:{
        quizz_count:{
            type: [String,Number],
            default: 0
        },
        index:{
              type: [String,Number],
              default: 0
        }
    },
    data(){
        return {
            title:'Submit Button'
        }
    },
    methods:{
        handleClickPrev(){
            this.$emit('ClickPrev');
        },
        handleClickNext(){
            this.$emit('ClickNext');
        },
        handleComplete(){
            this.$emit('ClickComplete');
        }
    }
    
}
</script>
