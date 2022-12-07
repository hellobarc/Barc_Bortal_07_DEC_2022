<template lang="">
    <div>
         <div v-if="this.$store.state.isLogin==false">
            <HeaderComponent/>
         </div>
         <mobilemenu-component/>
         <router-view></router-view>
    </div>
</template>
<script>
    import FooterComponent from './common_component/FooterComponent.vue';
    import MobilemenuComponent from './home_components/MobilemenuComponent.vue';
    import HeaderComponent from './home_components/HeaderComponent.vue';
    import TopnavComponent from './common_component/TopnavComponent.vue';

    export default {
        components: {FooterComponent,HeaderComponent,MobilemenuComponent,TopnavComponent},
    }
</script>
<style lang="">

</style>
