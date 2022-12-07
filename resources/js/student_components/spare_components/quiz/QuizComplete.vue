<template>
    <div class="submit_button">
        <button class="btn btn-primary btn-xs" @click="$emit('ClickComplete')"> Complete </button>
    </div>
</template>

<script>
export default {
    props:['index'],
    data(){
        return{
            title: 'QUiz Next Button'
        }
    }
}
</script>
