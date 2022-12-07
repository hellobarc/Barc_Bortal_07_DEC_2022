<template>
        <div class="section overflow-hidden position-relative" id="wrapper">
                    <div class="container-fluid">
                        <div class="section section-padding mt-n10">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">

                                        <div class="" style="display:flex;justify-content: space-between; ">
                                            <div>  <button class="button_back">  <router-link :to="'/course-detail/'+course_id"> <i class="bi bi-arrow-left"></i>   Course  </router-link></button></div>
                                            <div class="back"> <router-link :to="'/course-detail/'+course_id">    Extras <i class="bi bi-arrow-right"></i> </router-link></div>
                                        </div>

                                        <div class="reading_wrapper">
                                            <div class="reading-title">
                                                 {{detail.title}} : {{unit.unit_name}}
                                            </div>
                                            <div class="inner_content">
                                                <div class="content_title"> Grammar Study  </div>
                                                <div class="passage_content">
                                                    <div class="row">
                                                         <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                             <div>

                                                                <div class="quiz_indicator">
                                                                    <div class="indicator_progress" :style="`width: ${indicatorWidth}%`"> </div>
                                                                </div>
                                                                <div v-if="is_complete">
                                                                    <QuizCongratulation
                                                                    :quiz_complete="quiz_complete"
                                                                    :module_name="module_name"
                                                                    />
                                                                </div>
                                                                <div v-else>
                                                                    <!-- if not completed-->
                                                                      <div v-for="(quiz, index) in quizez" :key="index">

                                                                       Index={{index}} Current Index ={{quiz.quiz_type}}


                                                                        <div v-if="quiz.quiz_type=='ture_false'" v-show="index==current_index">
                                                                            <QuizTrueFalse :quizz_count="quizez.length" :index="index" :current_index="current_index" :quiz_info="quizez[index]"  @ClickNextButton="handleClickNext" @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                        </div>

                                                                         <div v-else-if="quiz.quiz_type=='multiple_choise'"  v-show="index==current_index">
                                                                            <QuizMultiple :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext"   @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                        </div>

                                                                         <div v-else-if="quiz.quiz_type=='re_order'"  v-show="index==current_index">
                                                                            <QuizReorder :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext(quiz.id)"  @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete"/>
                                                                        </div>

                                                                          <div v-else-if="quiz.quiz_type=='drag_drop'"  v-show="index==current_index">
                                                                            <QuizDragdrop :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext(quiz.id)"  @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete(quiz.id)"/>
                                                                        </div>

                                                                        <div v-else-if="quiz.quiz_type=='radio'"  v-show="index==current_index">
                                                                            <QuizRadio :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext(quiz.id)"  @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete(quiz.id)"/>
                                                                        </div>


                                                                        <div v-else-if="quiz.quiz_type=='input_text'"  v-show="index==current_index">
                                                                            <QuizInput :quizz_count="quizez.length" :index="index" :current_index="current_index"  :quiz_info="quizez[index]" @ClickNextButton="handleClickNext(quiz.id)"  @ClickPrevButton="handleClickPrev" @ClickCompleteButton="handleClickComplete(quiz.id)"></QuizInput>
                                                                        </div>

                                                                  </div>
                                                                    <!-- if not completed-->

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

    export default {
        components: { QuizMultiple, QuizTrueFalse, QuizReorder, QuizDragdrop, QuizRadio, QuizInput, QuestionCount, QuizCongratulation },
            data(){
                return {
                    page : "Reading Page",
                    module_name : "Reading",
                    auth_token: this.$store.state.authToken,
                    course_id: this.$route.params.course_id,
                    lesson_id: null,
                    detail: [],
                    article: [],
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
                retriveReadingDetail(course_id,header_data){
                    LessonDataService.retriveReadingDetail(course_id,header_data)
                    .then(response=>{
                        this.lesson_id =  response.data.id;
                        this.detail = response.data;
                        this.article = response.data.article;
                        this.unit = response.data.unit;
                        this.quizez = response.data.quiz;
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

                }
            },
            created(){
                 // console.log("created Reading lesson"+this.$route.params.lesson);
            },
            mounted() {
                console.log("GrammarComponent");
                this.retriveReadingDetail(this.course_id,this.auth_token);
            },
    }
</script>

<style scoped>

</style>
