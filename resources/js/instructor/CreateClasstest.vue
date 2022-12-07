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
                    <h2 class="text-center">Create Class Test</h2>
                </div>
            </div>
           <form @submit.prevent="handleSubmit">
             <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="row">
                        <div class="col-md-6">
                             <div class="form-group  mb-3">
                                <label for="class_test_name">Class Test Name</label>
                                <input type="text" class="myselect" v-model="form_data.test_name" placeholder="Class Test Name">
                            </div>
                        </div>
                         <div class="col-md-6">
                             <div class="form-group  mb-3">
                                <label for="class_test_name">Test Date</label>
                                <Datepicker class="myselect"  v-model="form_data.date_of_test"></Datepicker>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group  mb-3">
                                <label for="batch">Select a Batch</label>
                                <select class="myselect" v-model="form_data.selected_batch" @change="changeBatch($event)" required>
                                    <option value="0">Select a Batch</option>
                                    <option v-for="(batch,index) in all_batch" :value="batch.id" :key="index">{{batch.batch_name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group  mb-3">
                                <label for="batch">Select a Unit</label>
                                <select class="myselect"  v-model="form_data.selected_unit" @change="changeUnit($event)">
                                    <option value="1">Unit-1</option>
                                    <option value="2">Unit-2</option>
                                    <option value="3">Unit-3</option>
                                    <option value="4">Unit-4</option>
                                    <option value="5">Unit-5</option>
                                    <option value="6">Unit-6</option>
                                    <option value="7">Unit-7</option>
                                    <option value="8">Unit-8</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group  mb-3">
                                <label for="batch">Select a Module</label>
                                <select class="myselect" v-model="form_data.selected_module" @change="changeModule($event)">
                                    <option value="1">Reading</option>
                                    <option value="2">Listening</option>
                                    <option value="3">Writing (Paper)</option>
                                    <option value="4">Grammar</option>
                                    <option value="5">Vocabulary</option>
                                    <option value="6">Speaking</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="single-form text-center my-10">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </form>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarInstructor from './SidebarInstructor.vue';
    import AdminDataService from '../services/AdminDataService';

    export default {
        components: {SidebarInstructor},
           data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                    all_batch:[],
                    form_data:{
                        test_name:null,
                        date_of_test:null,
                        selected_batch:0,
                        selected_unit:0,
                        selected_module:0,
                    },
               }
           },
           computed:{

           },
           methods: {
              allBatch(){
                    AdminDataService.allBatch(this.auth_token)
                    .then((response)=>{
                        this.all_batch = response.data;
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                },
            changeBatch(event){
                    this.selected_batch = event.target.value;
            },
            changeUnit(event){
                    this.selected_unit = event.target.value;
            },
            changeModule(event){
                    this.selected_module = event.target.value;
            },
            handleSubmit(){
                AdminDataService.createTest(this.form_data,this.auth_token)
                    .then((response)=>{
                        this.message =  response.data.message;
                        this.$router.push("/instructor/class-test-list");
                    })
                    .catch((error)=>{
                         if(error.response.status == 422) {
                            this.error =  "Duplicate or Wrong Data";
                        }
                    })
            },
           },
           mounted() {
                this.allBatch();
           },
    }
</script>

<style scoped>


</style>
