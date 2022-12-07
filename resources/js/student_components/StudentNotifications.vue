<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <hr/>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <h2>Notification</h2>
                    </div>
                    <div class="notification_box">
                        <div class="notification_list" v-for="(noti,indx) in notification" :key="indx">
                            <div class="notification_title">{{noti.title}}</div>
                            <div class="notification_description">{{noti.description}}</div>
                            <div class="notification_date">{{new Date(noti.created_at)}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                      <div style="margin:100px;">Keep Learning ... and go green </div>
                </div>
            </div>
            <hr/>
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
                   notification:[]
               }
           },
           methods: {
                 studentNotification(){
                    StudentDataService.studentNotification(this.auth_token)
                    .then(res=>{
                        console.log(res);
                        this.notification= res.data.notification;
                    })
                    .catch(err=>{
                         console.log(err);
                    })
                }

           },
           mounted(){
                this.studentNotification()
           }
    }
</script>

<style scoped>


.notification_title{
    font-weight: bold;
    color: forestgreen;
    font-style: italic;
}

.notification_date{
    text-align: right;
    font-size: 12px;
}

</style>
