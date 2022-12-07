<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>BARC Portal e-Learning Platform</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
            <div class="row">
                  <div class="col-md-12">
                       <div class="page-header pt-3">
                            <h2>Change Password</h2>
                        </div>
                        <hr>
                  </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 mx-auto">
                    <div class="" v-if="error_msg!=null">
                        <div class="alert alert-danger" role="alert">
                            {{error_msg}}
                        </div>
                    </div>

                    <div class="" v-if="messege!=null">
                        <div class="alert alert-success" role="alert">
                            {{messege}}
                        </div>
                    </div>

                    <form @submit.prevent="handleSubmit">
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" aria-describedby="password" v-model="form_data.password">
                            <div  class="form-text">We'll never share your password with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="confirm_password" class="form-label">Confirm Password</label>
                            <input type="confirm_password" class="form-control" id="confirm_password" v-model="form_data.confirm_password">
                            <div  class="form-text">Confirm your password.</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import StudentDataService from '../services/StudentDataService';
    import StudentSidebar from './partials/StudentSidebar.vue';
   // import { mapState, mapMutations } from 'vuex';

    export default {
        components: {  StudentSidebar },
           data(){
               return{
                   title: "Student Dashboard",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   stats: [],
                   form_data:{
                        password:'',
                        confirm_password:''
                   },
                   error_msg:null,
                   messege:null,
               }
           },
           methods: {
                studentStats(){
                    StudentDataService.studentStats(this.auth_token)
                    .then(response=>{
                        this.stats = response.data.stats;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                handleSubmit(){
                    if(this.form_data.password!=this.form_data.confirm_password){
                        this.error_msg =  "Password does not match";
                        return;
                    }
                    StudentDataService.changePassword(this.form_data,this.auth_token)
                    .then(response=>{
                        this.messege = response.data.messege;
                        this.error_msg= null;
                    })
                    .catch(error=>{
                        console.log(error);
                    })

                }
           },
           mounted(){
             this.studentStats();
           }
    }
</script>

<style scoped>


</style>
