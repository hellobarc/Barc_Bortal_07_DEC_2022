<template>
        <home-component/>
</template>

<script>

    import HomeComponent from './HomeComponent.vue';

    export default {
        components: {HomeComponent, StudentComponent},
          data(){
              return {
                  isLogin: this.$store.state.isLogin
              }
          }

    }
</script>


<style>


</style>
