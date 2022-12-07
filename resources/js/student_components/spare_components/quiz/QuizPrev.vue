<template>
    <div class="submit_button">
        <button class="btn btn-primary btn-xs" @click="$emit('ClickPrev')"> <i class="bi bi-arrow-left"></i> Prev </button>
    </div>
</template>

<script>
import QuestionCount from './QuestionCount.vue';

export default {
    props:['index'],
    components:{QuestionCount},
    data(){
        return{
            title: 'Quiz Next Button'
        }
    }
}
</script>
