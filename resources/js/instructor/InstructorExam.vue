<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <SidebarInstructor/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>BARC Portal e-Learning Platform</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <div v-if="this.$store.state.isOnline==false" class="alert alert-danger" role="alert">Connection is Offline</div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <ExamCreate/>
                    <ExamList/>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarInstructor from './SidebarInstructor.vue';
    import ExamList from '../exam_component/ExamList.vue';
import ExamCreate from '../exam_component/ExamCreate.vue';

    export default {
        components: { SidebarInstructor, ExamList, ExamCreate },
           data(){
               return{
                   title: "Moderator Dashbaord",
                   image_data: images,
                   OpenClose:this.visible
               }
           },
           methods:{
        OpenCloseFun(){
           this.OpenClose =false;
        },
        },
        watch: {
            visible: function(newVal, oldVal) { // watch it
                this.OpenClose =newVal;
                console.log('new' +newVal+ '==' +oldVal)
            }
        }
    }
</script>

<style scoped>


</style>
