<template>
    <div class="section overflow-hidden position-relative" id="wrapper">
        <div class="">
            <div class="">
                <div class="">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 px-5 py-5">
                              <div v-if="lesson.template=='reading_with_quiz' || lesson.template=='1'">
                                <ReadingTemplate
                                        :course_id="course_id"
                                        :current_index="current_index"
                                        :detail="detail"
                                        :lesson="lesson"
                                        :lesson_id="lesson_id"
                                        :article="article"
                                        :quizez="quizez"
                                        :quizFilterd="quizFilterd"
                                        :quizfillblank="quizfillblank"
                                        :quiz_complete="quiz_complete"
                                        :module_name="module_name"
                                        :is_complete="is_complete"
                                        :indicatorWidth="indicatorWidth"
                                        @ClickPrevButton="handleClickPrev"
                                        @ClickNextButton="handleClickNext"
                                        @ClickCompleteButton="handleClickComplete"
                                        />
                            </div>
                             <div v-else-if="lesson.template==2">
                                 <ListeningTemplate
                                        :course_id="course_id"
                                        :current_index="current_index"
                                        :detail="detail"
                                        :lesson="lesson"
                                        :lesson_id="lesson_id"
                                        :article="article"
                                        :quizez="quizez"
                                        :quizFilterd="quizFilterd"
                                        :quizfillblank="quizfillblank"
                                        :quiz_complete="quiz_complete"
                                        :module_name="module_name"
                                        :is_complete="is_complete"
                                        :indicatorWidth="indicatorWidth"
                                        @ClickPrevButton="handleClickPrev"
                                        @ClickNextButton="handleClickNext"
                                        @ClickCompleteButton="handleClickComplete"
                                        :listening_track="listening_track"
                                        />
                            </div>
                            <div v-else-if="lesson.template==3">
                                Writing
                            </div>
                            <div v-else-if="lesson.template==4">
                                Speaking
                            </div>
                            <div v-else-if="lesson.template==5">
                              <GrammarTemplate
                                        :course_id="course_id"
                                        :current_index="current_index"
                                        :detail="detail"
                                        :lesson="lesson"
                                        :lesson_id="lesson_id"
                                        :article="article"
                                        :quizez="quizez"
                                        :quizFilterd="quizFilterd"
                                        :quizfillblank="quizfillblank"
                                        :quiz_complete="quiz_complete"
                                        :module_name="module_name"
                                        :is_complete="is_complete"
                                        :indicatorWidth="indicatorWidth"
                                        @ClickPrevButton="handleClickPrev"
                                        @ClickNextButton="handleClickNext"
                                        @ClickCompleteButton="handleClickComplete"
                                        />
                            </div>
                            <div v-else-if="lesson.template==6">
                                <VocabularyTemplate
                                        :course_id="course_id"
                                        :current_index="current_index"
                                        :detail="detail"
                                        :lesson="lesson"
                                        :lesson_id="lesson_id"
                                        :article="article"
                                        :quizez="quizez"
                                        :quizFilterd="quizFilterd"
                                        :quizfillblank="quizfillblank"
                                        :quiz_complete="quiz_complete"
                                        :module_name="module_name"
                                        :is_complete="is_complete"
                                        :indicatorWidth="indicatorWidth"
                                        @ClickPrevButton="handleClickPrev"
                                        @ClickNextButton="handleClickNext"
                                        @ClickCompleteButton="handleClickComplete"
                                        />
                           </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <KeepLearning/>
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
import QuizFillblank from './spare_components/quiz/QuizFillblank.vue';
import QuizCongratulation from './spare_components/quiz/QuizCongratulation.vue';
import VocabularyTemplate from './VocabularyTemplate.vue';
import ReadingTemplate from './ReadingTemplate.vue';
import ListeningTemplate from './ListeningTemplate.vue';
import GrammarTemplate from './GrammarTemplate.vue';
import KeepLearning from './partials/KeepLearning.vue';

    export default {
        components: { QuizMultiple, QuizTrueFalse, QuizReorder, QuizDragdrop, QuizRadio, QuizInput, QuestionCount, QuizFillblank, QuizCongratulation, VocabularyTemplate, ReadingTemplate, ListeningTemplate, GrammarTemplate, KeepLearning },
            data(){
                return {
                    page : "Study Page",
                    module_name : "Not fixed",
                    module_id : this.$route.params.module_id,
                    auth_token: this.$store.state.authToken,
                    course_id: this.$route.params.course_id,
                    lesson_id: this.$route.params.lesson_id,
                    lesson: [],
                    detail: [],
                    article: [],
                    listening_track:[],
                    unit: [],
                    quizfillblank: [],
                    quizez: [],
                    input_ans: [],
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
                },
                selectedAns(){
                    return this.input_ans.filter(ans=> ans!=null);
                },
                 quizFilterd(){
                    return this.quizez.filter(quiz=> quiz!=null);
                }
            },
            methods:{
                retriveGrammarDetail(){
                    LessonDataService.retriveGrammarDetail(this.lesson_id,this.auth_token)
                    .then(response=>{
                        this.lesson =  response.data.lesson;
                        this.detail = response.data;
                        this.article = response.data.article;
                        this.unit = response.data.unit;
                        this.quizez = response.data.quiz;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                retriveVocabularyDetail(){
                    LessonDataService.retriveVocabularyDetail(this.lesson_id,this.auth_token)
                    .then(response=>{
                        this.lesson =  response.data.lesson;
                        this.detail = response.data;
                        this.article = response.data.article;
                        this.unit = response.data.unit;
                        this.quizez = response.data.quiz;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                 retriveReadingDetail(){
                    LessonDataService.retriveReadingDetail(this.lesson_id,this.auth_token)
                    .then(response=>{
                        this.lesson =  response.data.lesson;
                        this.detail = response.data;
                        this.lesson_detail = response.data.lesson;
                        this.article = response.data.article[0];
                        this.unit_detail = response.data.lesson.unit;
                        this.unit = response.data.unit;
                        this.quizez = response.data.quiz;
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
                 retriveListeningDetail(){
                    LessonDataService.retriveListeningDetail(this.lesson_id,this.auth_token)
                    .then(response=>{
                        this.lesson =  response.data.lesson;
                        this.detail = response.data;
                        this.lesson_detail = response.data.lesson;
                        this.unit_detail = response.data.lesson.unit;
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
                    const quiz_type = event.quiz_type;
                    const action_type = event.action_type;
                    const quiz_id = event.quiz_id;
                    const selected_ans = event.selected_ans;
                    const payload = {quiz_id:quiz_id,quiz_type:quiz_type,action_type:action_type,selected_ans:selected_ans};

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
                    const quiz_type = event.quiz_type;
                    const action_type = event.action_type;
                    const quiz_id = event.quiz_id;
                    const selected_ans = event.selected_ans;
                    const payload = {quiz_id:quiz_id,quiz_type:quiz_type,action_type:action_type,selected_ans:selected_ans};

                    LessonDataService.submitQuiz(payload,this.auth_token)
                    .then(res=>{
                        this.is_complete = true;
                        this.retriveResult();
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                },
                retriveResult(){
                     const payload = {lesson_id:this.lesson_id};
                    console.log(payload);

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

                if(this.module_id==1){
                    this.retriveReadingDetail();
                }else if(this.module_id==2){
                    console.log("Module Id:",this.module_id);
                     this.retriveListeningDetail();
                     this.retriveListeningTrack();
                }else if(this.module_id==5){
                    this.retriveVocabularyDetail();
                }else if(this.module_id==6){
                    this.retriveVocabularyDetail();
                }
            },
    }
</script>

<style scoped>

.blank_sapce{
    margin-right: 5px;
    background: transparent;
    height: 26px;
    border-bottom: 1px solid;
    border-left: none;
    border-right: none;
    border-top: none;
    text-align: center;
}

</style>
