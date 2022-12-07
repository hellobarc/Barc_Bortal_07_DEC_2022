<template>
        <div class="section overflow-hidden position-relative" id="wrapper">
            <div class="py-0 px-5">
                <div class="">
                    <div class="container-fluid">
                        <div class="section section-padding mt-n10">
                            <div class="container">
                                <div class="row gx-10">
                                    <div class="col-lg-8">
                                        <button class="button_back">  <router-link to="/student/dashboard"> <i class="bi bi-arrow-left"></i>   Dashboard  </router-link></button>
                                        <div class="courses-details">
                                            <div class="courses-details-images">
                                                <img :src="image_data[0].a2thumbnail" alt="Courses Details">
                                                <span class="tags">{{course_detail.short_description}}</span>
                                                <div class="courses-play">
                                                    <img src="/front_asset/assets/images/courses/circle-shape.png" alt="Play">
                                                    <a class="play video-popup" href="https://www.youtube.com/watch?v=CCZ0TOtg2GY&list=PLmVnJQ0Pt6Mdeqva3S7H2V0IykiKd14av" target="_blank"><i class="flaticon-play"></i></a>
                                                </div>
                                            </div>
                                            <h2 class="title">{{course_detail.course_title}}</h2>

                                            <div class="courses-details-tab">
                                                <div class="details-tab-menu">
                                                    <ul class="nav justify-content-center">
                                                        <li><button class="active" data-bs-toggle="tab" data-bs-target="#learning_moidules">Modules</button></li>
                                                        <li><button data-bs-toggle="tab" data-bs-target="#overview">Overview</button></li>
                                                        <li><button data-bs-toggle="tab" data-bs-target="#mylearning">My Learning</button></li>
                                                    </ul>
                                                </div>
                                                <div class="details-tab-content">
                                                    <div class="tab-content">
                                                        <div class="tab-pane fade show active" id="learning_moidules">
                                                            <div class="tab-learning_moidules">
                                                                <div class="description-wrapper module_list">
                                                                    <div class="row">
                                                                            <div class="col-md-3 col-sm-6 col-xs-12">
                                                                                <router-link :to="{ name: 'lesson_list', params: { lesson: 'reading', module_id:1, course_id: course_id } }">
                                                                                    <div class="category_box icesky_bg">
                                                                                        <div class="title">Reading</div>
                                                                                        <div class="start">
                                                                                            Start <i class="bi bi-arrow-right"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </router-link>
                                                                            </div>
                                                                            <div class="col-md-3 col-sm-6 col-xs-12">
                                                                                <router-link :to="{ name: 'sub-module', params: { lesson: 'writing', module_id:3, course_id: course_id } }">
                                                                                    <div class="category_box lightgreen_bg">
                                                                                        <div class="title">Writing</div>
                                                                                        <div class="start">
                                                                                            Start <i class="bi bi-arrow-right"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </router-link>
                                                                            </div>
                                                                                <div class="col-md-3 col-sm-6 col-xs-12">
                                                                                <router-link :to="{ name: 'lesson_list', params: { lesson: 'listening', module_id:2, course_id: course_id } }">
                                                                                    <div class="category_box lightorange_bg">
                                                                                        <div class="title">Listening</div>
                                                                                        <div class="start">
                                                                                                Start <i class="bi bi-arrow-right"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </router-link>
                                                                            </div>
                                                                            <div class="col-md-3 col-sm-6 col-xs-12">
                                                                                <div class="category_box icesky_bg">
                                                                                    <div class="title">Speaking</div>
                                                                                    <div class="start">Start <i class="bi bi-arrow-right"></i>  </div>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="tab-pane fade " id="overview">
                                                            <div class="tab-overview">
                                                                <div class="description-wrapper">
                                                                    <h3 class="tab-title">Description:</h3>
                                                                    <div v-html="course_detail.overview"></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="tab-pane fade" id="mylearning">
                                                            <div class="tab-mylearning">
                                                                <h3 class="tab-title">Learning Archived:</h3>
                                                                <div class="modal fade" id="reviewsModal">
                                                                    <div class="modal-dialog modal-dialog-centered">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header">
                                                                                <h5 class="modal-title">Add a Review</h5>
                                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <CourseSidebar :course_info="course_info"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import CourseDataService from '../services/CourseDataService';
    import images from '../json/images.json';
    import CourseSidebar from './spare_components/CourseSidebar.vue';

    export default {
        name: "Course_Detail",
        components: { CourseSidebar },
        data(){
            return {
                page : "Course Detail Page",
                image_data: images,
                course_id:this.$route.params.course_id,
                auth_token: this.$store.state.authToken,
                course_detail: [],
                course_info:{
                    unit: 8,
                    course_name: 'A2',
                    study_time: 0,
                    lesson_count: 20,
                    level: 'Foundation'
                }
            }
        },
        methods:{
            retriveCourseDetail(){
                CourseDataService.getCourseById(this.course_id,this.auth_token)
                .then(response=>{
                    console.log(response);
                    this.course_detail = response.data;
                })
                .catch(error=>{
                    console.log(error);
                });
            },
            getCourseInfoById(){
                CourseDataService.getCourseInfoById(this.course_id,this.auth_token)
                .then(response=>{
                    console.log(response);
                    this.course_info.study_time = response.data.total_minutes;
                    this.course_info.lesson_count = response.data.total_losson;
                })
                .catch(error=>{
                    console.log(error);
                });
            },

        },
        mounted(){
            console.log("CourseDetailComponent");
            this.retriveCourseDetail();
            this.getCourseInfoById();
        }
    }
</script>

<style scoped>

</style>
