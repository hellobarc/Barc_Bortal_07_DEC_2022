<template lang="">
    <div class="container">
        <div class="row flex-nowrap">
            <div class="col-md-12">
                <div style="padding: 10px; border: 1px solid #ddd; margin: 10px;">
                      <h4>Lesson : {{lesson_detail.title}} (Add a Passage for this Lesson) </h4>
                    <div>
                        <p>
                            {{lesson_detail.description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="reading_wrapper">
                    <div class="reading-title" style="display:flex">
                        <div>{{form_data.article_title}} </div>  :  <div> {{lesson_detail.unit_name}}</div>
                    </div>
                    <div class="inner_content">
                        <div class="content_title">Read The Passage and answer the following questions  </div>
                        <div class="passage_content">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="reading_passage">
                                       <h4> {{form_data.article_title}}</h4>
                                       <div v-html="form_data.article_content"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div>
                                        <div class="quiz_wrapper">
                                            <div class="question_count">
                                                <QuestionCount text="Multiple Choise" :index="1" :quizz_count="1"></QuestionCount>
                                            </div>
                                            <div class="quiz_content">
                                                <div class="quiz_question">
                                                    Example question ?
                                                </div>
                                                <div class="ans_options">
                                                    <div v-for="ans in 3">
                                                        <div :class="{'option_item_selected':1 == 1 ? true : false }" class="option_item" >
                                                            Example Answer - {{ans}}
                                                        </div>
                                                    </div>
                                                </div>
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
       	<div class="row">
            <div class="col-md-12">
               <div style="margin-bottom: 20px; padding: 10px;">
                    <div v-if="alert_next.length!=0">
                        <div class="alert alert-danger" role="alert">
                            <div v-for="(alert, index) in alert_next" :key="index">
                                <p>{{alert}} </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="alert_success!=null">
                        <div class="alert alert-success" role="alert">
                            <p>{{alert_success}} </p>
                        </div>
                    </div>

                    <form @submit.prevent="handeSubmit">
                       <!-- <CustomInput v-model="searchText" />-->
                        <div class="single-form">
                            <label class="label">Article Title: </label>
                             <div>
                                <input type="text" placeholder="Lesson Title or Topics" v-model="form_data.article_title">
                            </div>
                        </div>
                        <div class="single-form">
                            <label class="label">Article Content:</label>
                             <div>
                                  <QuillEditor theme="snow" v-model:content="form_data.article_content" contentType="html"/>
                            </div>
                        </div>
                        <div class="single-form text-center">
                              <div v-if="article.length">
                                    <button type="submit" class="btn btn-primary">Update</button>
                              </div>
                               <div v-else>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import LessonDataService from "../services/LessonDataService";
import ContentDataService from "../services/ContentDataService";
import QuestionCount from "../student_components/spare_components/quiz/QuestionCount.vue";
import CustomInput from "../common_component/parts/CustomInput.vue";

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components:{QuestionCount,CustomInput,QuillEditor},
    data() {
        return {
            searchText:'',
            lesson_id: this.$route.params.lesson,
            lesson_detail: {},
            article: [],
            alert_next:[],
            alert_success:null,
            iscomplete:false,
            auth_token: this.$store.state.authToken,
            form_data:{
                    article_title: '',
                    article_content: '',
                }
        };
    },
    computed:{
        // articleTitle(){
        //     if(this.article.length){
        //         return this.article[0].title;
        //     }else{
        //         return null;
        //     }

        // },
        // articleContent(){
        //    if(this.article.length){
        //         return this.article[0].content;
        //     }else{
        //         return null;
        //     }
        // }
    },
    methods: {
        lessonById(lesson_id, token) {
        LessonDataService.lessonById(lesson_id, token)
            .then((response) => {
                this.lesson_detail = response.data.data[0];
                if(response.data.data[0].article!=null){
                    this.article = response.data.data[0].article;
                    this.form_data.article_title = response.data.data[0].article.title;
                    this.form_data.article_content = response.data.data[0].article.content;
                }
            })
            .catch((error) => {
                 console.log(error);
            });
        },
        handeSubmit(){
            this.alert_next = [];

            let article_title = this.article.length?this.articleTitle:this.form_data.article_title;
            let article_content = this.article.length?this.articleContent:this.form_data.article_content;

               const payload = {
                                lesson_id:this.lesson_id,
                                article_title:article_title,
                                article_content,
                            };

            if(article_title==null){
                this.alert_next.push("Please in a Title Text");
                this.iscomplete = false;
            }else{
                this.iscomplete = true;
            }

            if(article_content=null){
                this.alert_next.push("Please in a Content of  the Article/Passage");
                this.iscomplete = false;
            }else{
                this.iscomplete = true;
            }

            if(this.iscomplete){
                if(this.article.length){
                    const article_id = this.article[0].id;
                    this.updateArticle(article_id,payload);
                }else{
                    this.addArticle(payload);
                }
            }
        },

        addArticle(payload){
            ContentDataService.addArticle(payload,this.auth_token)

            .then(response=>{
                if(response.data.status=="duplicate"){
                            this.alert_next.push(response.data.message);
                }
                if(response.data.status=="success"){
                    this.alert_success = response.data.message;
                }

            })
            .catch(error=>{
                console.log(error);
            });
        },
        updateArticle(article_id,payload){
            ContentDataService.updateArticle(article_id,payload,this.auth_token)

            .then(response=>{
                if(response.data.status=="duplicate"){
                            this.alert_next.push(response.data.message);
                }
                if(response.data.status=="success"){
                    this.alert_success = response.data.message;
                }

            })
            .catch(error=>{
                console.log(error);
            });
        }
    }, // methods end
    mounted() {
        this.lessonById(this.lesson_id, this.auth_token);
    },

};
</script>
<style lang=""></style>
