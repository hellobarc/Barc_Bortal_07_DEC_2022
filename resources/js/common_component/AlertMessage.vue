<template lang="">
    <div>
        <div v-if="alert_next!=0">
            <div class="alert alert-danger" role="alert">
                <div v-for="(alert, index) in alert_next" :key="index">
                        <p>{{alert}} </p>
                </div>
            </div>
        </div>

        <div v-if="alert_success!=0">
            <div class="alert alert-success" role="alert">
                <p>{{alert_success}} </p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: ['alert_next','alert_success'],
    data(){
        return {
            title: "Alert Text",

        }
    }

}
</script>
<style lang="">

</style>
