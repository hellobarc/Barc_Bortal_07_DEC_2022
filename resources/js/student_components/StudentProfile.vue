<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
             <student-header/>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <h2>My Profile</h2>
                    </div>
                    <hr>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto">

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

                    <form @submit.prevent="set_profile">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                 <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name"  v-model="user_data.name">
                                    <div id="name" class="form-text">Your Full name.</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                  <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="email"  v-model="user_data.email">
                                    <div id="email" class="form-text">Your Email.</div>
                                </div>
                            </div>
                        </div>
                          <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                 <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="phone" class="form-control" id="phone" aria-describedby="phone" v-model="profile_data.phone">
                                    <div id="phone" class="form-text">Your Phone Number.</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                  <div class="mb-3">
                                    <label for="avatar" class="form-label">Avatar Image</label>
                                    <input type="file" class="form-control" id="avatar" aria-describedby="avatar">
                                    <div id="email" class="form-text">Your Avatar Image.</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                 <div class="mb-3">
                                    <label for="mothers_name" class="form-label">Mother's Name</label>
                                    <input type="text" class="form-control" id="mothers_name" aria-describedby="mothers_name" v-model="profile_data.mothers_name">
                                    <div id="mothers_name" class="form-text">Your Mother's Name.</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                <div class="mb-3">
                                    <label for="fathers_name" class="form-label">Fathers's Name</label>
                                    <input type="text" class="form-control" id="fathers_name" aria-describedby="fathers_name" v-model="profile_data.fathers_name">
                                    <div id="fathers_name" class="form-text">Your Fathers's Name.</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                 <div class="mb-3">
                                    <label for="House" class="form-label">House</label>
                                    <input type="text" class="form-control" id="House" aria-describedby="House" v-model="profile_data.house">
                                    <div id="House" class="form-text"> House Number or Name.</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                <div class="mb-3">
                                    <label for="Road" class="form-label">Road</label>
                                    <input type="text" class="form-control" id="raod" aria-describedby="Road" v-model="profile_data.road">
                                    <div id="road" class="form-text">Road number or Road name.</div>
                                </div>
                            </div>
                        </div>
                          <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                 <div class="mb-3">
                                    <label for="subcity" class="form-label">Subcity</label>
                                    <input type="text" class="form-control" id="subcity" aria-describedby="Subcity" v-model="profile_data.subcity">
                                    <div id="Subcity" class="form-text"> Your Subcity / Thana.</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                <div class="mb-3">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" class="form-control" id="city" aria-describedby="city" v-model="profile_data.city">
                                    <div id="city" class="form-text">Your City / District.</div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary pull-right">Submit</button>
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
import StudentHeader from './StudentHeader.vue';
   // import { mapState, mapMutations } from 'vuex';

    export default {
        components: { StudentSidebar, StudentHeader },
           data(){
               return{
                   title: "Student Profile",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   stats: [],
                   user_data: [],
                   profile_data: {phone:'',mothers_name:'',fathers_name:'',house:'',road:'',subcity:'',city:''},
                   error_msg:null,
                   messege:null,
               }
           },
           methods: {
                get_profile(){
                    StudentDataService.get_profile(this.auth_token)
                    .then(response=>{
                        console.log(response);
                        this.user_data = response.data.user_data;
                        const profile_data = response.data.profile_data;
                        if(profile_data.length){
                            this.profile_data = response.data.profile_data[0];
                        }

                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                set_profile(){
                    const payload ={user_data:this.user_data,profile_data:this.profile_data}
                    StudentDataService.set_profile(payload,this.auth_token)
                    .then(response=>{
                        this.messege = response.data.message;
                        this.error_msg= null;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                }
           },
           mounted(){
             this.get_profile();
           }
    }
</script>

<style scoped>


</style>
