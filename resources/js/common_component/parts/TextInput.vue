<template>
    <div>
        <div class="single-form">
            <label class="label">Article Title:</label>
            <input type="text" placeholder="Lesson Title or Topics" v-model="modelvalue"  @input="updateModel($event.target.value)">
        </div> 
    </div>
</template>
<script>
export default {
    props:{
        label:{
            type: String,
            default: 'Label'
        },
        placeholder: {
            type: String,
            default: 'Type Here..'
        },
        modelvalue:{
            type: [String,Number]
        }
    },
    methods:{
        udpateModel(event){
            
        }
    }
}
</script>
<style lang="">
    
</style>