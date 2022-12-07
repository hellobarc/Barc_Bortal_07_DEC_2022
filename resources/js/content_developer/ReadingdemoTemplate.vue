<template lang="">
    <div>
        <div class="reading_wrapper">
                    <div class="reading-title">
                           {{article.title}} : {{lesson_detail.unit_name}}
                    </div>
                    <div class="inner_content">
                        <div class="content_title">Read The Passage and answer the following questions  </div>
                        <div class="passage_content">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="reading_passage">
                                        <h4> {{article.title}}</h4>
                                        <div v-html="article.content"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div>
                                        <div class="quiz_wrapper">
                                            <div class="question_count">
                                                <div v-if="question_type!=null">
                                                    <QuestionCount :text="question_type || 'Not set'" :index="0" :quizz_count="1" />
                                                </div>
                                            </div>
                                            <div class="quiz_content">
                                                <div class="quiz_question" v-html="quiz_title">
                                                </div>
                                                <div v-if="selected_quiztype==1">
                                                    <div class="ans_options">
                                                        <div v-for="ans in inputs_truefalse">
                                                            <div :class="{option_item_selected:ans.iscorrect }" class="option_item" >
                                                                {{ans.value}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="selected_quiztype==2">
                                                    <div class="ans_options">
                                                        <div v-for="ans in inputs_muilteple">
                                                            <div :class="{option_item_selected:ans.iscorrect }" class="option_item">
                                                            {{ans.value}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="selected_quiztype==3">
                                                    <draggable v-model="inputs_reorder" >
                                                        <transition-group>
                                                            <div v-for="(element,index) in inputs_reorder" :key="index" class="draggable_item" @dragstart="handeMouseup($event,element.id)" >
                                                                <div :key="index">{{element.value}}</div>
                                                            </div>
                                                        </transition-group>
                                                    </draggable>
                                                </div>

                                                <div v-if="selected_quiztype==4">
                                                    <div class="ans_options">
                                                        <div v-for="ans in inputs_radio">
                                                            <input type="radio" name="radio">
                                                            {{ans.value}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="selected_quiztype==5">
                                                    <div class="ans_options">
                                                        <div v-for="ans in inputs_fillblank" class="inline_content">
                                                            <div v-if="ans.element_type === 'text'" >
                                                                    {{ans.value}}
                                                            </div>
                                                            <div v-if="ans.element_type === 'input'"  >
                                                                <input type="text" :value="ans.blank_ans" class="fill_blank_element">
                                                            </div>
                                                            <div v-if="ans.element_type === 'serial'" >
                                                                    <strong>( {{ans.value}} )</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                 <div v-if="selected_quiztype==6">
                                                    <div class="ans_options">
                                                        <div v-for="ans in inputs_dropdown" class="inline_content">
                                                            <div v-if="ans.element_type === 'text'" >
                                                                    {{ans.value}}
                                                            </div>
                                                            <div v-if="ans.element_type === 'dropdown'"  >
                                                                <div v-if="ans.value.length>0" class="mx-2">
                                                                    <select class="form-select" aria-label="Filter select">
                                                                        <option v-for="option_text in ans.value.split('/')">{{option_text}}</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div v-if="ans.element_type === 'serial'" >
                                                                    <strong>( {{ans.value}} )</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div v-if="selected_quiztype!=0">
                                                    <div style="display:flex; justify-content: space-between;">
                                                        <div class="submit_button">
                                                            <button class="btn btn-primary btn-xs"> Complete </button>
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
import { VueDraggableNext } from 'vue-draggable-next';
import QuestionCount from "../student_components/spare_components/quiz/QuestionCount.vue";

export default {
    props:['lesson_detail','article','question_type','quiz_title','selected_quiztype','inputs_truefalse','inputs_muilteple','inputs_reorder','inputs_reorder','inputs_radio','inputs_fillblank','inputs_dropdown'],
     components: {
      draggable: VueDraggableNext, QuestionCount
    },
    data(){
        return{
            title: "Reading Demo Template"
        }
    },
    mounted(){
        console
    }

}
</script>
<style lang="">

</style>
