<template>
    <div class="section overflow-hidden position-relative" id="wrapper">
        <div class="container-fluid">
            <div class="section section-padding mt-n10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div class="" style="display:flex;justify-content: space-between; ">
                                <div> 
                                    <button class="button_back">                                                 
                                        <router-link :to="{ name: 'lesson_list', params: { lesson: 'reading', module_id:1, course_id: course_id } }"> <i class="bi bi-arrow-left"></i>   Lesson List  </router-link>
                                    </button>
                                </div> 
                                <div class="back"> <router-link :to="'/course-detail/'+course_id">    Extras <i class="bi bi-arrow-right"></i> </router-link></div>
                            </div>
                            <div class="reading_wrapper">
                                <div class="reading-title">
                                    {{lesson_detail.title }} :  {{unit_detail.unit_name}}
                                    <p> {{lesson_detail.description }} </p>
                                </div>
                                <div class="inner_content">
                                    <div class="content_title">Read The Passage and answer the following questions  </div>
                                    <div class="passage_content">
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                                <div class="reading_passage">
                                                    <h4>{{article.title}}</h4>
                                                    <div>{{article.content}}</div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                                <div>
                                                    <div class="quiz_indicator">
                                                        <div class="indicator_progress" :style="`width: ${indicatorWidth}%`"> </div>
                                                    </div>
                                                    <div v-if="is_complete">
                                                        <QuizCongratulation  lesson="reading" :lesson_id="lesson_id" :course_id="course_id" :module_id="1"/>
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
import QuizRadio from './spare_components/quiz/QuizRadio.vue';
import QuizDragdrop from './spare_components/quiz/QuizDragdrop.vue';
import QuizReorder from './spare_components/quiz/QuizReorder.vue';
import QuizMultiple from './spare_components/quiz/QuizMultiple.vue';
import QuizTrueFalse from './spare_components/quiz/QuizTrueFalse.vue';
import QuestionCount from './spare_components/quiz/QuestionCount.vue';
import QuizInput from './spare_components/quiz/QuizInput.vue';
import QuizDropdwon from './spare_components/quiz/QuizDropdwon.vue';
import QuizCongratulation from './spare_components/quiz/QuizCongratulation.vue';

    export default {
        components: { QuizMultiple, QuizTrueFalse, QuizReorder, QuizDragdrop, QuizRadio, QuizInput, QuestionCount, QuizCongratulation ,QuizDropdwon},
            data(){
                return {
                    page : "Reading Page",
                    module_name : "Reading",
                    auth_token: this.$store.state.authToken,
                    course_id: this.$route.params.course_id,
                    lesson_id: this.$route.params.lesson_id,
                    lesson_detail: {},
                    article: {},
                    unit_detail: [],
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
                    }
                }
            },
            computed:{
                indicatorWidth(){
                      return parseInt(this.current_index) * 100 / this.quizez.length ;
                  },
                  quizCount(){
                      return this.quizez.length;
                  }
            },
            methods:{
                retriveReadingDetail(){
                    LessonDataService.retriveReadingDetail(this.lesson_id,this.auth_token)
                    .then(response=>{
                        console.log(response.data);
                        this.lesson_detail = response.data.lesson;
                        this.article = response.data.article[0];
                        this.unit_detail = response.data.lesson.unit;
                        this.quizez = response.data.quiz;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                handleClickNext(event){
                    this.current_index +=1;
                    const lesson_id = this.lesson_id;
                    const quiz_id = event.quiz_id;
                    const quiz_type = event.quiz_type;
                    const quiz_index = this.current_index;
                    const selected_ans = event.selected_ans;
                    const payload = {lesson_id:lesson_id,quiz_type:quiz_type,quiz_id:quiz_id,quiz_index:quiz_index,selected_ans:selected_ans};

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
                    const lesson_id = this.lesson_id;
                    const quiz_id = event.quiz_id;
                    const quiz_type = event.quiz_type;
                    const quiz_index = this.current_index;
                    const selected_ans = event.selected_ans;
                    const payload = {lesson_id:lesson_id,quiz_type:quiz_type,quiz_id:quiz_id,quiz_index:quiz_index,selected_ans:selected_ans}

                    LessonDataService.submitQuiz(payload,this.auth_token)
                    .then(res=>{
                        this.is_complete = true;
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                },
                
            },
            created(){
                 // console.log("created Reading lesson"+this.$route.params.lesson);
            },
            mounted() {
                console.log("ReadingComponent");
                this.retriveReadingDetail();
            },
    }
</script>

<style scoped>

</style>
