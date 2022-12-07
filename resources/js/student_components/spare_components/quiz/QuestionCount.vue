<template>
       <div class="question_count">
            {{text}} - Q: {{index+1}} of {{quizz_count}}
        </div>
</template>

<script>
export default {
    props:['text','index','quizz_count'],
    data(){
        return{
            title: "nothing"
        }
    },
    computed:{

    },
    mounted(){
        console.log(this.text);
    }
}
</script>
