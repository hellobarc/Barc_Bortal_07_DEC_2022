<template>
    <div class="section overflow-hidden position-relative" id="wrapper">
        <div class="container-fluid">
            <div class="section section-padding mt-n10">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div class="" style="display:flex;justify-content: space-between; ">
                                    <button class="button_back">
                                        <router-link :to="'/course-detail/'+course_id"> <i class="bi bi-arrow-left"></i>  Course  </router-link>
                                    </button>
                                    <button class="button_back">
                                        <router-link :to="'/course-detail/'+course_id">    Extras <i class="bi bi-arrow-right"></i> </router-link>
                                    </button>
                                </div>
                                <div class="reading_wrapper">
                                    <div class="reading-title">
                                        {{detail.title}} : {{unit.unit_name}}
                                    </div>
                                    <div class="inner_content">
                                        <div class="content_title">Listen the Audio Track and answer the following questions  </div>
                                        <div class="passage_content">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                    <div class="row">
                                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                            <h4>{{listening_track.title}}</h4>
                                                        </div>
                                                    </div>
                                                        <div class="row">
                                                        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                                                <audio
                                                                :src="`/listening_track/${listening_track.file_name}`"
                                                                ref="audioPlayer"
                                                                @timeupdate="onPlaying">
                                                                Your browser does not support the
                                                                <code>audio</code> element.
                                                            </audio>
                                                            <div class="audiotracking">{{ listeningTime }} Mintues Played</div>
                                                        </div>
                                                        <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
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
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div v-html="listening_track.description"></div>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <div v-if="is_complete">
                                                                    <!--completed-->
                                                                <QuizCongratulation
                                                                :quiz_complete="quiz_complete"
                                                                :module_name="module_name"
                                                                />
                                                                    <!-- completed-->
                                                        </div>
                                                    <div v-else>
                                                            <div v-for="(quiz, index) in quizez" :key="index">
                                                            <div v-if="quiz.quiz_type==1" v-show="index==current_index">
                                                                <QuizTrueFalse  :quizz_count="quizez.length" :index="index" :current_index="current_index" :quiz_info="quizez[index]"  @ClickNextButton="handleClickNext" @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                            </div>
                                                                <div v-else-if="quiz.quiz_type==2"  v-show="index==current_index">
                                                                <QuizMultiple :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                            </div>
                                                                <div v-else-if="quiz.quiz_type==3"  v-show="index==current_index">
                                                                <QuizReorder :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                            </div>
                                                            <div v-else-if="quiz.quiz_type==4"  v-show="index==current_index">
                                                                <QuizRadio :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                            </div>
                                                            <div v-else-if="quiz.quiz_type==5"  v-show="index==current_index">
                                                                <QuizInput :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete" />
                                                            </div>
                                                            <div v-else-if="quiz.quiz_type==6"  v-show="index==current_index">
                                                                <QuizDragdrop :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
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
            </div>
        </div>
    </div>
</template>

<script>

import LessonDataService from '../services/LessonDataService';


import QuizRadio from './spare_components/quiz/QuizRadio.vue';
import QuizDragdrop from './spare_components/quiz/QuizDragdrop.vue';
import QuizReorder from './spare_components/quiz/QuizReorder.vue';
import QuizMultiple from './spare_components/quiz/QuizMultiple.vue';
import QuizTrueFalse from './spare_components/quiz/QuizTrueFalse.vue';
import QuestionCount from './spare_components/quiz/QuestionCount.vue';
import QuizInput from './spare_components/quiz/QuizInput.vue';
import QuizCongratulation from './spare_components/quiz/QuizCongratulation.vue';

import AudioPlayer from 'vue3-audio-player';
import 'vue3-audio-player/dist/style.css';

    export default {
        components: { QuizMultiple, QuizTrueFalse, QuizReorder, QuizDragdrop, QuizRadio, QuizInput, QuestionCount, QuizCongratulation,AudioPlayer },
            data(){
                return {
                    page : "Listening Page",
                    module_name : "Listening",
                    auth_token: this.$store.state.authToken,
                    course_id: this.$route.params.course_id,
                    lesson_id: this.$route.params.lesson_id,
                    detail: [],
                    listening_track: [],
                    unit: [],
                    quizez: [],
                    quiz_submit:0,
                    current_index: 0,
                    is_complete: false,
                    quiz_complete: {
                                unit_name: null,
                                lesson_name: null,
                                coures_id: null,
                                study_minutes: null,
                                study_hours: null,
                                marks_percent: null
                    },
                    currentTime: 0,
                    seekValue: 0,
                    trackplaying: false
                }
            },
            computed:{
                listeningTime(){
                    return Math.round(this.currentTime / 60);
                },
                indicatorWidth(){
                      return parseInt(this.current_index) * 100 / this.quizez.length ;
                },
                quizCount(){
                      return this.quizez.length;
                }
            },
            methods:{
                retriveListeningDetail(){
                    LessonDataService.retriveListeningDetail(this.course_id,this.auth_token)
                    .then(response=>{
                        this.detail = response.data;
                        this.unit = response.data.unit;
                        this.quizez = response.data.quiz;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                retriveListeningTrack(){
                    console.log("Listening track");
                    LessonDataService.retriveListeningTrack(this.lesson_id,this.auth_token)
                    .then(response=>{
                        this.listening_track = response.data[0];
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                handleClickNext(event){
                    this.current_index +=1;
                    const quiz_id = event.quiz_id;
                    const selected_ans = event.selected_ans;
                    const payload = {quiz_id:quiz_id,selected_ans:selected_ans};

                    LessonDataService.submitQuiz(payload,this.auth_token)
                    .then(res=>{
                        console.log(res.data);
                    })
                    .catch(err=>{
                            console.log(err);
                    })

                },
                handleClickPrev(){
                    this.current_index -=1;
                },
                handleClickComplete(event){
                    this.current_index +=1;
                    const quiz_id = event.quiz_id;
                    const selected_ans = event.selected_ans;
                    const payload = {quiz_id:quiz_id,selected_ans:selected_ans};

                    LessonDataService.submitQuiz(payload,this.auth_token)
                    .then(res=>{
                        console.log(res.data);
                        this.is_complete = true;

                        this.retriveQuizResult();

                    })
                    .catch(err=>{
                        console.log(err);
                    })
                },
                retriveQuizResult(){
                    let lesson_id = this.lesson_id;
                    const payload = {lesson_id:lesson_id};
                    LessonDataService.retriveQuizResult(payload,this.auth_token)
                    .then(res=>{
                        this.quiz_complete.coures_id = res.data.coures_id;
                        this.quiz_complete.unit_name = res.data.lesson.unit.unit_name;
                        this.quiz_complete.lesson_name = res.data.lesson.title;
                        this.quiz_complete.study_minutes = res.data.lesson.study_minutes;
                        this.quiz_complete.study_hours = res.data.lesson.study_hour;
                        this.quiz_complete.marks_percent = res.data.mark_percent;
                    })
                    .catch(err=>{

                    })

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
                    audioPlayer.currentTime = seekto;
                },
            },
            created(){
                 // console.log("created Reading lesson"+this.$route.params.lesson);
            },
            mounted() {
                console.log("ListeningComponent");
                this.retriveListeningDetail();
                this.retriveListeningTrack()
            },
    }
</script>

<style scoped>
.audiotracking{
        border: 1px solid;
    text-align: center;
    padding: 10px;
    font-family: cursive;
    font-weight: 900;
}
</style>
