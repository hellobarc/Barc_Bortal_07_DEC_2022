<template>
        <div class="section overflow-hidden position-relative" id="wrapper">
            <div class="py-0 px-5">
                <div class="">
                    <div class="container-fluid">
                            <div class="section section-padding mt-n10">
                                <div class="container">
                                    <div class="row gx-10">
                                        <div class="col-lg-8">
                                           <div class="my-3">
                                                <div v-if="module_id==6">
                                                    <button class="button_back">   <router-link :to="'/sub-module/writing/3/1'"> <i class="bi bi-arrow-left"></i>   Module   </router-link></button>
                                                </div>
                                                <div v-else>
                                                    <button class="button_back">   <router-link :to="'/course-detail/'+course_id"> <i class="bi bi-arrow-left"></i>   Course Detail  </router-link></button>
                                                </div>
                                           </div>
                                            <div class="table-responsive sm">
                                               <table class="table-striped" id="module">
                                                    <tr>
                                                       <th>Topics</th>
                                                       <th>Unit</th>
                                                       <th>Status</th>
                                                       <th>Start Learning</th>
                                                    </tr>
                                                    <tr v-for="(lesson,index) in lesson_list" :key="index">
                                                        <td>{{lesson.title}}</td>
                                                        <td>{{lesson.unit_name}}</td>
                                                        <td> <div :class="{badge_started:BatchStarted(lesson.status),badge_completed:BatchCompleted(lesson.status)}">{{lesson.status}}</div> </td>
                                                        <td>
                                                            <div v-if="lesson.status=='submitted'">
                                                                 <router-link :to="{ name: 'lesson_review', params: { lesson_id: lesson.lesson_id, module_id: module_id, course_id: course_id} }" :class="{btn:true}" class="orange_small_btn"> Review <i class="bi bi-arrow-right"></i></router-link>
                                                            </div>
                                                            <div v-else>
                                                                <div v-if="lesson.lesson_serial==1">
                                                                        <router-link :to="{ name: 'study_page', params: { template: lesson.template, lesson_id: lesson.lesson_id,  module_id:module_id, course_id: course_id } }" :class="{btn:true}" class="green_small_btn"> Start <i class="bi bi-arrow-right"></i></router-link>
                                                                </div>
                                                                <div v-else>
                                                                  <div class="btn gray_small_btn"> Waiting <i class="bi bi-arrow-right"></i></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                               </table>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="sidebar">
                                                <InformationWidget :study_minutes="totalMinutes" :lesson_count="lesson_list.length" :course_name="course_info.course_name" :module_id="module_id" :module="$route.params.lesson"/>
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

   import LessonDataService from '../services/LessonDataService';
  import InformationWidget from './spare_components/InformationWidget.vue';

    export default {
    components: { InformationWidget },
    data() {
        return {
            page: "Reading_Module",
            lesson: this.$route.params.lesson,
            course_id: this.$route.params.course_id,
            module_id: this.$route.params.module_id,
            lesson_list: [],
            course_info: [],
            auth_token: this.$store.state.authToken
        };
    },
    computed: {
        totalMinutes() {
            const lesson = this.lesson_list;
            const newlesson = lesson.map((item, index) => {
                return item.study_minutes;
            });
            const sumup = newlesson.reduce((qsum, ini) => {
                return qsum + parseInt(ini);
            }, 0);
            return sumup;
        }
    },
    methods: {
        retriveLesson(course_id, module_id, header_data) {
            LessonDataService.retriveLesson(course_id, module_id, header_data)
                .then(response => {
                this.lesson_list = response.data.lesson_data;
                this.course_info = response.data.course_data;
            })
                .catch(error => {
                console.log(error);
            });
        },
        BatchStarted(status){
            if(status=='started'){
                return true;
            }
        },
        BatchCompleted(status){
            if(status=='submitted'){
                return true;
            }
        }
    },
    created() {
        console.log("created Reading lesson" + this.$route.params.lesson);
    },
    mounted() {
        console.log("LessonListComponent");
        this.retriveLesson(this.course_id, this.module_id, this.auth_token);
    },

}
</script>

<style scoped>



</style>


