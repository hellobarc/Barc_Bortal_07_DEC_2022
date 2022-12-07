<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
           <SidebarModerator/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>BARC Portal e-Learning Platform</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
             <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center">Notification</h3>
                </div>
            </div>
               <hr>

            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <button class="btn btn-danger" @click="show_form=!show_form">Create Notification</button>
                    </div>
                    <hr>
                </div>
            </div>
            <hr/>

            <div class="row">
                {{notification}}


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

                    <div class="support_form" v-if="show_form">
                        <form @submit.prevent="sendMessage">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="titile" aria-describedby="title" v-model="form_data.title" required >
                                        <div  class="form-text">Title of the Notification</div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                    <div class="mb-3">
                                        <div class="form-group">
                                            <label for="unit">Select a Batch</label>
                                            <select class="myselect"  v-model="selected_unit"  @change="changeUnit($event)" required>
                                                <option disabled value="0">Select Unit</option>
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
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                   left
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                   right
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Notification Content</label>
                                        <textarea class="form-control" id="message" aria-describedby="Message"  v-model="form_data.message" required></textarea>
                                        <div id="name" class="form-text">Notification Content</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mx-auto">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                <table class="table-striped" id="module">
                    <tr>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(ticket,index) in notification" :key="index">
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <router-link :to="{name:'all_lesson'}" class="btn btn-primary">
                                <span> Archive </span>
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarModerator from './SidebarModerator.vue';
    import BasicDataService from '../services/BasicDataService';
    import AdminDataService from '../services/AdminDataService';


    export default {
        components: {SidebarModerator},
           data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   form_data:{
                    batch_id:'',
                    title:'',
                    message:'',
                    start_date:null,
                    end_date:null,
                   },
                   notification:[],
                   show_form:false,
               }
           },
           computed:{

           },
           methods: {
                handleSubmit(){
                    const payload = {
                                batch_id: this.form_data.batch_id,
                                titile: this.form_data.title ,
                                start_date: this.getStartDate,
                                end_date: this.getEndDate
                            };
                    AdminDataService.addBatch(payload,this.auth_token)
                    .then((response)=>{
                        console.log(response);
                        this.allBatch();
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                },

                supportTickets(){
                    AdminDataService.supportTickets(this.auth_token)
                    .then(res=>{
                        console.log(res);
                        this.support_ticket = res.data.support_ticket;
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                }
           },
           mounted() {
                this.supportTickets();
           },
    }
</script>

<style scoped>


</style>
