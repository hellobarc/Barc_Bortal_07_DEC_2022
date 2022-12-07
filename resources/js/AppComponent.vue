<template>
    <div class="">
        <div v-if="this.$store.state.isLogin==true">
            <auth-component/>
        </div>
         <div v-else>
            <home-component/>
        </div>
        <div>
           <footer-component/>
        </div>
    </div>
</template>

<script>
    import FooterComponent from './common_component/FooterComponent.vue';
    import HomeComponent from './HomeComponent.vue';
    import AuthComponent from './HomeComponent.vue';


    export default {
        components: { FooterComponent, HomeComponent,AuthComponent },
          data(){
              return {
                  title: 'App component'
              }
          },
          mounted() {
              this.$store.commit('initializeLogin');
          },

    }
</script>


<style>


</style>
