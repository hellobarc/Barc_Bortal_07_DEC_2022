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
                                            <button class="button_back">   <router-link :to="'/course-detail/'+course_id"> <i class="bi bi-arrow-left"></i>   Course Detail  </router-link></button>
                                        </div>
                                        <div class="">
                                            <div class="marks"> Marks Obtained :  {{Math.ceil(obtained_marks)}} / Total Marks : {{total_marks}} / Percentage : {{percent_marks}}%</div>
                                            <div v-if="module_id==1">
                                              <h3>Passage:</h3>
                                                <div><h5>{{supplement.title}}</h5></div>
                                                <div v-html="supplement.content"></div>
                                            </div>
                                            <div v-if="module_id==2">
                                              <h3>Audio Track: </h3>
                                                 <audio
                                                    :src="`/listening_track/${supplement.file_name}`"
                                                    ref="audioPlayer"
                                                    @timeupdate="onPlaying">
                                                    Your browser does not support the
                                                    <code>audio</code> element.
                                                </audio>

                                                <div class="">
                                                    <div v-if="trackplaying==false" >
                                                        <button @click="play" class="player_button"><i class="bi bi-play-circle-fill"></i> Play Audio Track</button>
                                                    </div>
                                                    <div v-else>
                                                        <div>
                                                            <button @click="play" class="player_button"><i class="bi bi-stop-circle"></i>  Playing  </button>
                                                            <button @click="pause" class="player_button"><i class="bi bi-pause-btn"></i>  Pause </button>
                                                            <button @click="setSpeed(0.5)" class="player_button"><i class="bi bi-collection-play-fill"></i>  0.5x </button>
                                                            <button @click="setSpeed(1)" class="player_button"><i class="bi bi-collection-play-fill"></i>  1x </button>
                                                            <button @click="setSpeed(1.5)" class="player_button"><i class="bi bi-collection-play-fill"></i>  1.5x </button>
                                                            <button @click="setSpeed(2)" class="player_button"><i class="bi bi-collection-play-fill"></i>  2x </button>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                              <hr>


                                             <div v-for="(result , index) in result_set" :key="index">
                                                <div class="single_result my-5 py-5 px-5">
                                                    <div>
                                                        <strong>Type: </strong> {{result.question_type}}
                                                    </div>
                                                    <div class="question_box">
                                                         <div class="mx-2"><strong> Q: </strong></div ><div v-html="result.quiz_quesiton"></div>
                                                    </div>

                                                    <div v-if="result.quiz_type==1">
                                                        <div> <TruefalseReview :iscorrect="result.is_correct" :myans="result.my_ans"/> </div>
                                                    </div>

                                                    <div v-if="result.quiz_type==2">
                                                        <div> <QuizMultipleReview :quiz_id="result.quiz_id" :myans="result.my_ans" /> </div>
                                                    </div>

                                                    <div v-if="result.quiz_type==3">
                                                        <div> Re-Order </div>
                                                    </div>

                                                    <div v-if="result.quiz_type==4">
                                                        <div> <QuizRadioReview :quiz_id="result.quiz_id"  :myans="result.my_ans" /> </div>
                                                    </div>

                                                     <div v-if="result.quiz_type==5">
                                                        <div> <QuizInputReview :quiz_ans="result.correct_ans" :myans="result.my_ans"/></div>
                                                    </div>

                                                    <div v-if="result.quiz_type==6">
                                                        <div> <QuizDropdwonReview  :quiz_id="result.quiz_id"  :myans="result.my_ans"  /></div>
                                                    </div>

                                                </div>
                                             </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <SidebarStatus :course_title="course_detail.course_name" :unit_name="unit_detail.unit_name" :lesson="lesson" :study_time="lesson_detail.study_minutes" :marks_percent="percent_marks"/>
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
   import SidebarStatus from './partials/SidebarStatus.vue';

  import AudioPlayer from 'vue3-audio-player';
import 'vue3-audio-player/dist/style.css';
import QuizInputReview from './spare_components/quiz/QuizInputReview.vue';
import TruefalseReview from './spare_components/quiz/TruefalseReview.vue';
import QuizMultipleReview from './spare_components/quiz/QuizMultipleReview.vue';
import QuizRadioReview from './spare_components/quiz/QuizRadioReview.vue';
import QuizDropdwonReview from './spare_components/quiz/QuizDropdwonReview.vue';

    export default {
        name: "Lesson Review",
        components: { SidebarStatus, AudioPlayer, QuizInputReview, TruefalseReview, QuizMultipleReview, QuizRadioReview, QuizDropdwonReview },
            data(){
                return {
                    page : "Lesson Review",
                    lesson: this.$route.params.lesson,
                    lesson_id: this.$route.params.lesson_id,
                    course_id: this.$route.params.course_id,
                    module_id: this.$route.params.module_id,
                    lesson_detail: '',
                    course_detail: '',
                    unit_detail: '',
                    article:'',
                    supplement:[],
                    obtained_marks: '',
                    total_marks: '',
                    percent_marks: '',
                    result_set: '',
                    currentTime: 0,
                    seekValue: 0,
                    trackplaying: false,
                    auth_token: this.$store.state.authToken
                }
            },
            computed:{

            },
            methods:{
                lessonReview(){
                    LessonDataService.lessonReview(this.lesson_id,this.auth_token)
                    .then(response=>{
                        console.log(response);
                        this.lesson_detail = response.data.lesson[0];
                        this.course_detail = response.data.lesson[0].course;
                        this.unit_detail = response.data.lesson[0].unit;
                        this.obtained_marks= response.data.obtained_marks;
                        this.total_marks= response.data.quiz_marks;
                        this.percent_marks= response.data.percent;
                        this.article= response.data.lesson[0].article;
                        this.supplement = response.data.supplement[0];
                        this.result_set= response.data.result_set;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                  play() {
                    this.$refs.audioPlayer.play();
                    this.trackplaying=true;
                },
                pause() {
                    this.$refs.audioPlayer.pause();
                    this.trackplaying= false;
                },
                stop() {
                    const { audioPlayer } = this.$refs;
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0;
                },
                setSpeed(speed) {
                     this.$refs.audioPlayer.playbackRate = speed;
                },
                onPlaying() {
                    const { audioPlayer } = this.$refs;
                    if (!audioPlayer) {
                        return;
                    }
                    this.currentTime = audioPlayer.currentTime;
                    this.seekValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                },
                onSeek() {
                    const { audioPlayer } = this.$refs;
                    const seekto = audioPlayer.duration * (this.seekValue / 100);
                }
            },
            created(){
                  console.log("created Reading lesson"+this.$route.params.lesson_id);
            },
            mounted() {
                  this.lessonReview();
            },
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

.marks{
    border: 1px solid rgb(7, 155, 39);
    padding: 5px;
    font-weight: bold;;
}
.question_box{
        display: inline-flex;
    justify-content: space-around;
    margin: 7px;

}

.incorrect{
    margin: 4px;
    text-align: right;
    background: orangered;
    color: #fff;
}

.correct{
    margin: 4px;
    text-align: right;
    background: rgb(4, 190, 103);
    color: #fff;
}

.optional{
    margin: 4px;
    text-align: right;
    background: rgb(228, 175, 3);
    color: rgb(95, 92, 92);
}
</style>


