<template>
        <div class="section overflow-hidden position-relative" id="wrapper">
            <div class="py-0 px-5">
                <div class="">
                    <div class="container-fluid">
                        <div class="section section-padding mt-n10">
                            <div class="container">
                                <div class="row gx-10">
                                    <div class="col-lg-8">
                                        <button class="button_back">  <router-link :to="'/course-detail/'+course_id"> <i class="bi bi-arrow-left"></i>   Course  </router-link></button>
                                        <div class="courses-details">
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
                                                                                <div class="category_box lightgreen_bg">
                                                                                    <div class="title">Grammar</div>
                                                                                    <div class="start">
                                                                                        <router-link :to="{ name: 'lesson_list', params: { lesson: 'grammar', module_id:5, course_id: course_id } }">
                                                                                                Start <i class="bi bi-arrow-right"></i>
                                                                                        </router-link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-3 col-sm-6 col-xs-12">
                                                                                <div class="category_box lightorange_bg">
                                                                                    <div class="title">Vocabulary</div>
                                                                                    <div class="start">
                                                                                        <router-link :to="{ name: 'lesson_list', params: { lesson: 'vocabulary', module_id:6, course_id: course_id } }">
                                                                                            Start <i class="bi bi-arrow-right"></i>
                                                                                        </router-link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                                                <div class="category_box icesky_bg">
                                                                                    <div class="title">Writing Feedback</div>
                                                                                    <div style="font-size: 12px;" class="text-center">You can submit 2 Writings for Instructor Feedback </div>
                                                                                    <div class="start">
                                                                                         <router-link :to="{ name: 'writing-list', params: { course_id: course_id } }">
                                                                                            Start <i class="bi bi-arrow-right"></i>
                                                                                        </router-link>
                                                                                    </div>
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
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem Ipsum passages desktop publishing software.</p>
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
                                        <div class="sidebar">
                                            <div class="sidebar-widget widget-information">
                                                <div class="info-price">
                                                    <span class="price">A2</span>
                                                </div>
                                                <div class="info-list">
                                                    <ul>
                                                        <li><i class="icofont-book-alt"></i> <strong>Units</strong> <span>8</span></li>
                                                        <li><i class="icofont-clock-time"></i> <strong>Duration</strong> <span>08 hr 15 mins</span></li>
                                                        <li><i class="icofont-ui-video-play"></i> <strong>Lessons</strong> <span>29</span></li>
                                                        <li><i class="icofont-bars"></i> <strong>Level</strong> <span>Foundation</span></li>
                                                    </ul>
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
</template>

<script>
    import CourseDataService from '../services/CourseDataService';

    export default {
        name: "Course_Detail",
        components: { },
        data(){
            return {
                page : "Course Detail Page",
                auth_token: this.$store.state.authToken,
                course_id:this.$route.params.course_id,
                course_detail: []
            }
        },
        methods:{
            retriveCourseDetail(course_id){
                CourseDataService.getCourseById(this.course_id,this.auth_token)
                .then(response=>{
                    console.log(response);
                    this.course_detail = response.data;
                })
                .catch(error=>{
                    console.log(error);
                });
            }
        },
        mounted(){

            console.log("SubmoduleComponent");

            this.retriveCourseDetail();
           // this.retriveCourseDetail();

        }
    }
</script>

<style scoped>

</style>
