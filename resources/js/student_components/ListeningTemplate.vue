<template>
    <div class="">
        <div class="">
            <div class="section__">
                    <div class="container__">
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
                                <hr/>
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

                                                        </div>
                                                        <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                                            <div class="">
                                                                <div v-if="trackplaying==false" >
                                                                    <button @click="play" class="player_button"><i class="bi bi-play-circle-fill"></i> Play Audio Track</button>
                                                                </div>
                                                                <div v-else>
                                                                    <div>
                                                                        <button @click="play" class="player_button"><i class="bi bi-stop-circle"></i>  Playing  ({{ listeningTime }} M) </button>
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
                                                    <div>
                                                        <div class="quiz_indicator">
                                                            <div class="indicator_progress" :style="`width: ${indicatorWidth}%`"> </div>
                                                        </div>
                                                        <div v-if="is_complete">
                                                            <QuizCongratulation   :lesson_id="lesson_id" :course_id="course_id" :module_id="1"/>
                                                        </div>
                                                            <div v-else>
                                                                <div v-if="quizez.length==0" class="text-center my-5"><h4>No Quiz / Test is available for this Lesson</h4></div>
                                                                <div v-for="(quiz, index) in quizez" :key="index">
                                                                <div v-if="quiz.quiz_type==1" v-show="index==current_index">
                                                                    <QuizTrueFalse  :quizz_count="quizez.length" :index="index" :current_index="current_index" :quiz_info="quizez[index]"  @ClickNextButton="handleClickNext" @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                </div>
                                                                <div v-else-if="quiz.quiz_type==2" >
                                                                    <div v-if="index==current_index">
                                                                        <QuizMultiple :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                    </div>
                                                                </div>
                                                                <div v-else-if="quiz.quiz_type==3">
                                                                    <div v-if="index==current_index">
                                                                        <QuizReorder :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                    </div>
                                                                </div>
                                                                <div v-else-if="quiz.quiz_type==4"  v-show="index==current_index">
                                                                    <div v-if="index==current_index">
                                                                    <QuizRadio :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                    </div>
                                                                </div>
                                                                <div v-else-if="quiz.quiz_type==5"  v-show="index==current_index">
                                                                    <div v-if="index==current_index">
                                                                        <QuizInput :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete" />
                                                                    </div>
                                                                </div>
                                                                <div v-else-if="quiz.quiz_type==6"  v-show="index==current_index">
                                                                    <div v-if="index==current_index">
                                                                        <QuizDropdwon :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
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
        </div>
    </div>
</template>

<script>

import LessonDataService from '../services/LessonDataService';

import QuizCongratulation from './spare_components/quiz/QuizCongratulation.vue';
import QuizRadio from './spare_components/quiz/QuizRadio.vue';
import QuizDragdrop from './spare_components/quiz/QuizDragdrop.vue';
import QuizReorder from './spare_components/quiz/QuizReorder.vue';
import QuizMultiple from './spare_components/quiz/QuizMultiple.vue';
import QuizTrueFalse from './spare_components/quiz/QuizTrueFalse.vue';
import QuestionCount from './spare_components/quiz/QuestionCount.vue';
import QuizInput from './spare_components/quiz/QuizInput.vue';
import QuizFillblank from './spare_components/quiz/QuizFillblank.vue';
import QuizDropdwon from './spare_components/quiz/QuizDropdwon.vue';

import AudioPlayer from 'vue3-audio-player';
import 'vue3-audio-player/dist/style.css';

    export default {
        components: { QuizMultiple, QuizTrueFalse, QuizReorder, QuizDragdrop, QuizRadio, QuizInput, QuestionCount, QuizFillblank,QuizDropdwon, QuizCongratulation,AudioPlayer },
        props:['course_id','detail','lesson','lesson_id','article','current_index','quizez','quizFilterd','quizfillblank','quiz_complete','module_name','indicatorWidth','is_complete','listening_track'],
            data(){
                return {
                    page : "Listening Page",
                    auth_token: this.$store.state.authToken,
                    unit: [],
                    quiz_submit:0,
                    currentTime: 0,
                    seekValue: 0,
                    trackplaying: false
                }
            },
            computed:{
                listeningTime(){
                    return Math.round(this.currentTime / 60);
                },
                quizCount(){
                      return this.quizez.length;
                }
            },
            methods:{
                handleClickPrev() {
                    this.$emit("ClickPrevButton");
                },
                handleClickNext(event){
                    this.$emit("ClickNextButton",{quiz_type:event.quiz_type,quiz_id:event.quiz_id,selected_ans:event.selected_ans,action_type:'next'});
                },
                handleClickComplete(event){
                this.$emit("ClickCompleteButton",{quiz_type:event.quiz_type,quiz_id:event.quiz_id,selected_ans:event.selected_ans,action_type:'complete'});
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
                console.log("ListeningTemplate");

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
