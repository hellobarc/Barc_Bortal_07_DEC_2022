<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <SidebarContent/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>Content Developer</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
            <div class="row">
                <div class="col-md-12">

                </div>
            </div>
            <div class="row">
                  <div class="col-md-2">
                        <div class="single-box text-center stats_card icesky_bg">
                            <h5 class="title">Total Lesson</h5>
                            <div class="count">{{stats.total_lesson}}</div>
                            <p><span>{{stats.total_lesson}}</span> This months</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card lightgreen_bg">
                            <h5 class="title">Reading Lesson</h5>
                            <div class="count">{{stats.reading_lesson}}</div>
                            <p><span>{{stats.reading_lesson}}</span> This months</p>
                        </div>
                    </div>
                       <div class="col-md-2"> 
                        <div class="single-box text-center stats_card lightorange_bg">
                            <h5 class="title">Total Listening</h5>
                            <div class="count">{{stats.listening_lesson}}</div>
                            <p><span>{{stats.listening_lesson}}</span> This months</p>
                        </div>
                    </div>
                     <div class="col-md-2">
                        <div class="single-box text-center stats_card icesky_bg">
                            <h5 class="title">Grammar Lesson</h5>
                            <div class="count">{{stats.grammar_lesson}}</div>
                            <p><span>{{stats.grammar_lesson}}</span> This months</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card lightgreen_bg">
                            <h5 class="title">Vocabulary Lesson</h5>
                            <div class="count">{{stats.vocabulary_lesson}}</div>
                            <p><span>{{stats.vocabulary_lesson}}</span> This months</p>
                        </div>
                    </div>
                 
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card lightorange_bg">
                            <h5 class="title">Total Article</h5>
                            <div class="count">{{stats.total_articles}}</div>
                            <p><span>{{stats.total_articles}}</span> This months</p>
                        </div>
                    </div>
            </div>
            <div class="row">
                  <div class="col-md-2">
        
                            <div class="single-box text-center stats_card icesky_bg">
                                <h5 class="title">A2 Lesson</h5>
                                <div class="count">{{stats.a2_lesson}}</div>
                                <p><span>{{stats.a2_lesson}}</span> This months</p>
                            </div>
                      
                    </div>
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card lightgreen_bg">
                            <h5 class="title">B1 Lesson</h5>
                            <div class="count">{{stats.b1_lesson}}</div>
                            <p><span>{{stats.b1_lesson}}</span> This months</p>
                        </div>
                    </div>
                     <div class="col-md-2">
                        <div class="single-box text-center stats_card lightorange_bg">
                            <h5 class="title">B2 Lesson</h5>
                            <div class="count">{{stats.b2_lesson}}</div>
                            <p><span>{{stats.b2_lesson}}</span> This months</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card icesky_bg">
                            <h5 class="title">C1 Lesson</h5>
                            <div class="count">{{stats.c1_lesson}}</div>
                            <p><span>{{stats.c1_lesson}}</span> This months</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card lightgreen_bg">
                            <h5 class="title">Total Study Hours</h5>
                            <div class="count">{{stats.study_hour}}H {{stats.study_minutes}}M</div>
                            <p><span>{{stats.study_hour}}</span> This months</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="single-box text-center stats_card lightorange_bg">
                            <h5 class="title">Total Quiz</h5>
                            <div class="count">{{stats.total_quizes}}</div>
                            <p><span>{{stats.total_quizes}}</span> This months</p>
                        </div>
                    </div>
            </div>

                <div class="course_maker_wrapper">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="single-box stats_card icesky_bg">
                                <router-link :to="'/content/lesson/1'">
                                    <h3> Reading  <i class="bi bi-arrow-right"></i></h3>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-box stats_card lightgreen_bg">
                                <router-link :to="'/content/lesson/2'">
                                    <h3> Listening  <i class="bi bi-arrow-right"></i></h3>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-box stats_card lightorange_bg">
                                <router-link :to="'/content/lesson/5'">
                                    <h3> Grammar  <i class="bi bi-arrow-right"></i></h3>
                                </router-link>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="single-box stats_card lightgreen_bg">
                                <router-link :to="'/content/lesson/6'">
                                    <h3> Vocabulary  <i class="bi bi-arrow-right"></i></h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                     <div class="row">
                         <div class="col-md-12">
                               <div class="text-center">Module wise Lesson Development</div>
                         </div>
                     </div>
                </div>

                <!--
                <div class="course_maker_wrapper">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="single-box stats_card icesky_bg">
                                <router-link :to="{name:'content-course', params:{'course_id':1}}"><h3> A2  <i class="bi bi-arrow-right"></i></h3></router-link>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-box stats_card lightgreen_bg">
                                <h3> B1 <i class="bi bi-arrow-right"></i></h3>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-box stats_card lightorange_bg">
                                <h3> B2 <i class="bi bi-arrow-right"></i></h3>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-box stats_card lightgreen_bg">
                                <h3> C1 <i class="bi bi-arrow-right"></i></h3>
                            </div>
                        </div>
                    </div>
                     <div class="row">
                         <div class="col-md-12">
                              Course wise Lesson Development
                         </div>
                     </div>
                </div>
                -->
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';


    import { mapState, mapMutations } from 'vuex';

    import SidebarContent from './SidebarContent.vue';
    import ContentDataService from '../services/ContentDataService';

    export default {
        components: {SidebarContent},
           data(){
               return{
                   title: "Moderator Dashbaord",
                   image_data: images,
                   auth_token: this.$store.state.authToken, 
                   stats: []
               }
           },
           computed:{
               loggedIn() {
                     return this.$store.state.isLogin;
                },
           },
           methods: {
                ...mapMutations(["loginAuth","test"]),
                contentStats(){
                    ContentDataService.contentStats(this.auth_token)
                    .then(response=>{
                       this.stats =  response.data.stats;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                }
           },
           mounted(){
                this.contentStats();
           }
    }
</script>

<style scoped>

.course_maker_wrapper{
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;

}

.course_button{
    border: 1px solid #ddd;
    padding: 10px;
    width: 90%;
    font-weight: 600;
    margin: 10px;
    text-align: center;
    background-color: #9cf3d9;
}

.course_button:hover{
   background-color: rgb(6, 158, 108);
   color:#fff;
}





</style>
