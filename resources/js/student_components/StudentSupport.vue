<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>

            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <h2>Support Center</h2>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <button class="btn btn-danger" @click="show_form=!show_form">Create Ticket</button>
                    </div>
                    <hr>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">

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
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control" id="subject" aria-describedby="Subject" v-model="form_data.subject" required >
                                        <div  class="form-text">Subject</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto">
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea class="form-control" id="message" aria-describedby="Message"  v-model="form_data.message" required></textarea>
                                        <div id="name" class="form-text">Your Message</div>
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
                            <th>Ticket#</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                        <tr v-for="(ticket,index) in support_ticket" :key="index">
                            <td>{{ticket.id}}</td>
                            <td>{{ticket.subject}}</td>
                            <td>{{ticket.message}}</td>
                            <td>{{ticket.status}}</td>
                        </tr>
                    </table>
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
                   title: "Student Support",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   error_msg:null,
                   messege:null,
                   support_ticket:[],
                   show_form:false,
                   form_data:{
                        subject:null,
                        message:null,
                   }
               }
           },
           methods: {
            sendMessage(){
                const payload ={subject:this.form_data.subject,message:this.form_data.message}
                StudentDataService.studentSupportOpenTicket(payload,this.auth_token)
                .then(res=>{
                    this.messege = "Support Message Sent Successfully";
                    this.studentSupoortTickets();
                    this.show_form = false;
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            studentSupoortTickets(){
                StudentDataService.studentSupoortTickets(this.auth_token)
                .then(res=>{
                    this.support_ticket = res.data.support_data
                })
                .catch()
            }

           },
           mounted(){
                this.studentSupoortTickets()
           }
    }
</script>

<style scoped>

#module {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#module td, #module th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#module tr:nth-child(even){background-color: #f2f2f2;}

#module tr:hover {background-color: #ddd;}

#module th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04AA6D;
  color: white;
}

.btn {
    color: #fff;
}

.btn:hover {
    color: #ddd;
}

.badge_started{
    background: rgb(32, 181, 240);
    text-transform: capitalize;
    color: #fff;
    border-radius: 8px;
}

.badge_completed{
    background: rgb(3, 214, 133);
      text-transform: capitalize;
    color: #fff;
    border-radius: 8px;
}

.support_form{
    border: 2px solid rgb(177, 212, 190);
    padding: 50px;
    margin: 50px;
}


</style>
