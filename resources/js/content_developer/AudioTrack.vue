<template lang="">
    <div class="container">

        <div class="row" >
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="reading_wrapper mt-5" style="">
                    <div class="reading-title">
                            {{lesson_detail.title}} : {{lesson_detail.unit_name}}
                    </div>
                    <div class="inner_content  pt-4" >
                        <div class="content_title">Listen the Audio Track and answer the following questions  </div>
                        <div class="passage_content">
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <h4>{{form_data.track_title}}</h4>
                                        </div>
                                    </div>
                                        <div class="row">
                                        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                                <audio
                                                :src="`/listening_track/${listening_track.file_name}`"
                                                ref="audioPlayer"
                                                @timeupdate="onPlaying"
                                            >
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
                                                        <button @click="setSpeed(1.5)" class="player_button"><i class="bi bi-collection-play-fill"></i>  1.5x </button>
                                                        <button @click="setSpeed(2)" class="player_button"><i class="bi bi-collection-play-fill"></i>  2x </button>
                                                        <button @click="setSpeed(1)" class="player_button"><i class="bi bi-collection-play-fill"></i>  1x </button>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div v-html="form_data.listening_description"></div>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    Quiz is here
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
                        <div class="single-form">
                            <label class="label">Track Title:</label>
                            <input type="text" placeholder="Lesson Title or Topics" v-model="form_data.track_title">
                        </div>
                        <div class="single-form">
                            <label class="label">Listening Description / Instruction :</label> 
                                <QuillEditor theme="snow" v-model:content="form_data.listening_description" contentType="html"/>
                        </div>
                        <div class="single-form">
                            <input style="display: none;" ref="fileInput" type="file"  placeholder="Upload your Track"  required="required"  @change="onFileSelected"/>
                            <div class="upload_box text-center" @click="$refs.fileInput.click()" > <i class="bi bi-cloud-upload-fill"></i> Click here to pick a Listening Track</div>
                        </div>
                        <div class="single-form text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
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

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components:{QuestionCount,QuillEditor},
  data() {
    return {
      lesson_id: this.$route.params.lesson,
      lesson_detail: {},
      alert_next:[],
      alert_success:null,
      iscomplete:false,
      form_data: {
        track_title: null,
        listening_description: null,
      },
      auth_token: this.$store.state.authToken,
      listening_track: {listening_track:null,},
      listeningTime:null,
      trackplaying: null,
      selected_file:null,
    };
  },
  methods: {
    lessonById(lesson_id, token) {
      LessonDataService.lessonById(lesson_id, token)
        .then((response) => {
          console.log(response.data.data[0]);
          this.lesson_detail = response.data.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
       onFileSelected(event){
            this.selected_file = event.target.files[0];
        },
        handeSubmit(){

            this.alert_next = [];

            if(this.form_data.track_title==null){
                this.alert_next.push("Please in a Title Text");
                this.iscomplete = false;
            }else{
                this.iscomplete = true;
            }

            if(this.form_data.listening_description==null){
                this.alert_next.push("Please in a Content of  the Article/Passage");
                this.iscomplete = false;
            }else{
                this.iscomplete = true;
            }

            const token = this.auth_token;
            const payload = new FormData();
            payload.append('track',this.selected_file,this.selected_file.name);
            payload.append('lesson_id',this.lesson_id);
            payload.append('title',this.form_data.track_title);
            payload.append('description',this.form_data.listening_description);

      
            ContentDataService.addTrack(payload,token)
                .then(response=>{

                    if(response.data.status=="duplicate"){
                                this.alert_next.push(response.data.message);
                    }

                    if(response.data.status=="success"){
                        this.alert_success = response.data.message;
                        this.form_data.track_title = null;
                        this.form_data.listening_description = null;
                    }
            

                })
                .catch(error=>{
                    console.log(error);
                });

        },
 
   
  }, // methods end
  mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
  },
};
</script>
<style>
.upload_box{
    width: 100%;
    border: 2px solid rgb(198, 250, 211);
    background-color: rgb(218, 245, 221);
    padding: 10px;
        margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
