<template lang="">
    <div class="container">
        <div class="row flex-nowrap">
            <div class="col-md-12">
                <div style="padding: 10px; border: 1px solid #ddd; margin: 10px;">
                      <h4>Lesson : {{excersize_detail.excersize_name}} (Add a Passage for this Lesson) </h4>
                    <div>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="reading_wrapper">
                    <div class="reading-title" style="display:flex">
                        <div> {{excersize_detail.excersize_name}} </div>
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
                                            <h3>Question goes here ?</h3>
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
import ExamDataService from "../services/ExamDataService";
import CustomInput from "../common_component/parts/CustomInput.vue";
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components:{CustomInput,QuillEditor},
    data() {
        return {
            searchText:'',
            auth_token: this.$store.state.authToken,
            excersize_id: this.$route.params.excersize_id,
            excersize_detail: [],
            article: [],
            form_data:{
                    article_title: '',
                    article_content: '',
                },
            alert_next:[],
            iscomplete: false,
        };
    },
    computed:{

    },
    methods: {
        exsesizeByID(){
            ExamDataService.exsesizeByID(this.excersize_id, this.auth_token)
            .then((response) => {
               this.excersize_detail = response.data.excersize;
            })
            .catch((error) => {
                 console.log(error);
            });
        },
        handeSubmit(){

            let article_title = this.article.length?this.articleTitle:this.form_data.article_title;
            let article_content = this.article.length?this.articleContent:this.form_data.article_content;

               const payload = {
                                excersize_id:this.excersize_id,
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
            ExamDataService.addArticle(payload,this.auth_token)
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
            ExamDataService.updateArticle(article_id,payload,this.auth_token)
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
        this.exsesizeByID();
    },

};
</script>
<style lang=""></style>
