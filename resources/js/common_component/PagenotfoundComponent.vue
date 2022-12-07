<template>
        <div class="section overflow-hidden position-relative" id="wrapper">
            <div class="py-0 px-5">
                <div class="">
                    <div class="container-fluid">
                        <div id="dashboard_content">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="students-map">
                                        <h4 class="title">No Page found in this Link. Please use Navigation and Keep Learing</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
            data(){
               return {
                  title: 'Auth Component'
               }
           },
           mounted(){

               if(this.$route.name=='page-not-found'){
                    this.$router.push('dashboard');
               }else{
                    console.log("mate",this.$route.name);
               }

           }
    }
</script>

<style scoped>

</style>
