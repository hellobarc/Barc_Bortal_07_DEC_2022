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
                    <h3 class="text-center">Support Tickets Moderation</h3>
                </div>
            </div>
               <hr>
            <div class="row">
                {{support_ticket}}
                <table class="table-striped" id="module">
                        <tr>
                            <th>Ticket#</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(ticket,index) in support_ticket" :key="index">
                            <td>{{ticket.id}}</td>
                            <td>{{ticket.subject}}</td>
                            <td>{{ticket.message}}

                            </td>
                            <td>{{ticket.status}}</td>
                            <td>
                                <router-link :to="{name:'all_lesson'}" class="btn btn-primary">
                                    <span> Reply</span>
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
                    batch_name:'',
                    start_date:null,
                    end_date:null,
                   },
                   support_ticket:[],
               }
           },
           computed:{

           },
           methods: {
                handleSubmit(){
                    const payload = {
                                course_id: this.selected_course,
                                batch_name: this.form_data.batch_name ,
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
