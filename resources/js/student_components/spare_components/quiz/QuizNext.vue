<template>
    <div class="submit_button">
        <button class="btn btn-primary btn-xs" @click="$emit('ClickNext')"> Next <i class="bi bi-arrow-right"></i></button>
    </div>
</template>

<script>
export default {
    props:['index'],
    data(){
        return{
            title: 'Quiz Next Button'
        }
    }
}
</script>
