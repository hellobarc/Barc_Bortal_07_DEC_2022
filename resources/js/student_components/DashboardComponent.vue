<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <student-sidebar/>
        </div>
        <main class="col ps-md-2 pt-2" style="overflow:hidden">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"
                style="background: green;color: #fff;">
                <i class="bi bi-list bi-lg py-2 p-1"></i> Menu
            </a>

           <StudentHeader/>

            <p class="lead">A complete e-Learning Solution</p>
            <div class="" style="font-weight: bold">  Welcome ! <span class="name_color">{{user_data.name}}</span> (Student ID: {{profile_data.student_id}})</div>
            <hr>
             <div class="row">
                <div class="col-md-6 col-md-6">
                    <div class="content_container">
                        <BarChart :barc_chart_data="barc_chart_data"/>
                    </div>
                </div>
                <div class="col-md-6 col-md-6">
                    <div class="content_container">
                        <LineChart :reading_data="reading_data" :listening_data="listening_data" :grammar_data="grammar_data" :vocabulary_data="vocabulary_data"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row my-10 mx-10">
                <div class="col-md-4">
                    <div class="single-box stats_card icesky_bg">
                        <h5 class="title">Class Attendance</h5>
                        <div class="count">{{stats.attendance}}</div>
                        <p><span>{{stats.attendance}}</span> This months</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-box stats_card lightorange_bg">
                        <h5 class="title">Lesson Completed</h5>
                        <div class="count">
                            {{stats.lessons_count}}
                            <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                        </div>
                        <p><span>{{stats.lessons_count}}</span> This months</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-box stats_card icesky_bg">
                        <h5 class="title">Minutes Studied</h5>
                        <div class="count"> {{stats.study_minutes}}M</div>
                        <p><span>{{stats.study_minutes}}</span> This months</p>
                    </div>
                </div>
            </div>
            <hr/>
            <!---
             <div class="row">
                <div class="col-md-4 col-md-4">
                    <DonutChart/>
                </div>
                 <div class="col-md-8 col-md-8">
                    <DoublebarChart/>
                </div>
            </div>
         -->

            <div class="row">
                <div class="col-md-12">
                    <div class="page-header pt-3">
                        <h2>My Courses</h2>
                    </div>
                    <p class="lead">Your enrolled courses</p>
                    <hr>
                    <enrolled-courses/>
                </div>
            </div>
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
                     <KeepLearning/>
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
    import TestComponent from './partials/TestComponent.vue';
    import EnrolledCourses from './EnrolledCourses.vue';
    import StudentDataService from '../services/StudentDataService';
    import StudentSidebar from './partials/StudentSidebar.vue';
    import BarChart from '../charts/BarChart.vue';
    import DonutChart from '../charts/DonutChart.vue';
    import LineChart from '../charts/LineChart.vue';
    import DoublebarChart from '../charts/DoublebarChart.vue';
    import KeepLearning from './partials/KeepLearning.vue';
    import StudentHeader from './StudentHeader.vue';

    export default {
        components: { TestComponent, EnrolledCourses, StudentSidebar, BarChart, DonutChart, LineChart, LineChart, DoublebarChart, KeepLearning, StudentHeader },
           data(){
               return{
                   title: "Student Dashboard",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   stats: [],
                   profile_data:[],
                   user_data:[],
                   barc_chart_data:[],
                   reading_data:[],
                   listening_data:[],
                   grammar_data:[],
                   vocabulary_data:[],
                   notification:[]
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
                unitwiseProgress(){
                    StudentDataService.unitwiseProgress(1,this.auth_token)
                    .then(response=>{
                        const myvalue =  Object.values(response.data.percentage) ;
                        myvalue.forEach(item=>{
                            this.barc_chart_data.push(item);
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                readingProgress(){
                    StudentDataService.readingProgress(1,this.auth_token)
                    .then(response=>{
                        const myvalue =  Object.values(response.data.percentage) ;
                        myvalue.forEach(item=>{
                            this.reading_data.push(item);
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },

                listeningProgress(){
                    StudentDataService.listeningProgress(1,this.auth_token)
                    .then(response=>{
                        const myvalue =  Object.values(response.data.percentage) ;
                        myvalue.forEach(item=>{
                            this.listening_data.push(item);
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                grammarProgress(){
                    StudentDataService.grammarProgress(1,this.auth_token)
                    .then(response=>{
                        const myvalue =  Object.values(response.data.percentage) ;
                        myvalue.forEach(item=>{
                            this.grammar_data.push(item);
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                vocabularyProgress(){
                    StudentDataService.vocabularyProgress(1,this.auth_token)
                    .then(response=>{
                        const myvalue =  Object.values(response.data.percentage) ;
                        myvalue.forEach(item=>{
                            this.vocabulary_data.push(item);
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                get_profile(){
                    StudentDataService.get_profile(this.auth_token)
                    .then(res=>{
                        console.log(res);
                        this.profile_data= res.data.profile_data[0];
                        this.user_data= res.data.user_data;

                    })
                    .catch(err=>{
                         console.log(err);
                    })
                },
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
             this.studentStats();
             this.get_profile();
             this.unitwiseProgress();
             this.readingProgress();
             this.listeningProgress();
             this.grammarProgress();
             this.vocabularyProgress();
             this.studentNotification();
           }
    }
</script>

<style scoped>
.content_container{
    padding: 40px;
}


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

<!-- Chart https://github.com/apertureless/vue-chartjs  eta use kori nai-->
