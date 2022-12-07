<template lang="">
    <div>
        <div class="alert alert-success" role="alert">
            {{message}}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        message:{
            type: String,
            default: 'Thanks'
        }
    }
}
</script>
<style lang="">

</style>
