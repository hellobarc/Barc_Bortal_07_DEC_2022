<template lang="">
    <div>
        <topnav-component/>
        <router-view></router-view>
    </div>
</template>
<script>
import TopnavComponent from './common_component/TopnavComponent.vue';
export default {
       components: {TopnavComponent},
       data(){
        return{
            user_role: this.$store.state.role,
        }
       }
    
}
</script>
<style lang="">
    
</style>