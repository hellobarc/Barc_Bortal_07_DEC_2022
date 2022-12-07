<template lang="">
    <div>
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
                {{lesson.title }} :  {{lesson.unit.unit_name}}
                <p> {{lesson.description }} </p>
            </div>
            <div class="inner_content">
                <div class="content_title">Read The Passage and answer the following questions   </div>
                <div class="passage_content">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div class="reading_passage">
                                <h4>{{article.title}}</h4>
                                <div v-html="article.content"></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
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
</template>
<script>
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


export default {
    components: { QuizMultiple, QuizTrueFalse, QuizReorder, QuizDragdrop, QuizRadio, QuizInput, QuestionCount, QuizFillblank,QuizDropdwon, QuizCongratulation },
    props:['course_id','detail','lesson','lesson_id','article','current_index','quizez','quizFilterd','quizfillblank','quiz_complete','module_name','indicatorWidth','is_complete'],
    data(){
        return {
            title: "Reading Template",
            auth_token: this.$store.state.authToken,
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
        }
    }
}
</script>
<style lang="">

</style>
