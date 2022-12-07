<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="my-5" style="display:flex;justify-content: space-between; margin-bottom: 10px;">
                    <button class="button_back">   Course  </button>
                    <button class="button_back">   Extras <i class="bi bi-arrow-right"></i> </button>
                </div>
                <div class="reading_wrapper">
                    <div class="reading-title">
                        {{this.lesson_detail.title}} :  {{this.lesson_detail.unit_name}} 
                    </div>
                    <div class="inner_content">
                        <div class="content_title">Listen the Audio Track and answer the following questions  </div>
                        <div class="passage_content">
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <h4>Track title will go here</h4>
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
                                                        <button @click="setSpeed(1.5)" class="player_button"><i class="bi bi-collection-play-fill"></i>  1.5x </button>
                                                        <button @click="setSpeed(1)" class="player_button"><i class="bi bi-collection-play-fill"></i>  1x </button>
                                                        <button @click="setSpeed(0.5)" class="player_button"><i class="bi bi-collection-play-fill"></i>  0.5x </button>
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

                            <div class="row my-5">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="row">
            <div class="col-md-12">
               <div style="margin-bottom: 20px; padding: 10px;">

                        <div>
                            <table class=" table-striped " id="module">
                                <tr>
                                    <th>Sl</th>
                                    <th>Question</th>
                                    <th>Marks</th>
                                    <th>Type</th>
                                    <th>Action </th>
                                </tr>
                                <tr v-for="(quiz_item, index) in quiz_list" :key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{quiz_item.question}}</td>
                                    <td>{{quiz_item.marks}}</td>
                                    <td>Fill Blank</td>
                                    <td> 
                                        <button class="bsimple_button_1 btn-danger button-rounded"> Delete </button>
                                    </td>
                                </tr>
                            </table>   
                        </div> 

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
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="single-form">
                                        <label class="label">Quiz Question:</label>
                                        <input type="text" placeholder="Lesson Title or Topics" v-model="quiz_title">
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-form">
                                                <label class="label">Marks:</label>
                                                <input type="number" min="1" placeholder="Marks for this quiz" v-model="quiz_marks">
                                            </div>
                                        </div>
                                         <div class="col-md-6">
                                            <div class="single-form">
                                                <label class="label">Time Limit (opitonal):</label>
                                                <input type="number" min="1" placeholder="Marks for this quiz" v-model="quiz_timelimit">
                                            </div>
                                        </div>
                                    </div>        

                        
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">

                                        <div class="fill_blank">
                                            <div style="margin-bottom: 5px">
                                                <button class="simple_button_1" @click.prevent="addText"><i class="bi bi-plus-circle-fill"></i> Add Text</button>
                                                <button class="simple_button_1" @click.prevent="addInput"><i class="bi bi-plus-circle-fill"></i> Add Blank</button>
                                                <button class="simple_button_1" @click.prevent="addSerial"><i class="bi bi-plus-circle-fill"></i> Add Serial</button>
                                            </div>
                                            <div v-for="(ans,indix) in inputs_fillblank">
                                                <div class="single-form" style="display: flex">
                                                    <div v-if="ans.element_type=='text'" style="width: 90%;">
                                                        <input type="text" placeholder="Text Content" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div> 
                                                    <div v-if="ans.element_type=='input'" style="width: 90%;">
                                                        <input type="text" placeholder="Correct Answer" v-model="ans.value" style="margin-right: 5px;" required>
                                                    </div>  
                                                    <div style="margin-top: 7px;margin-left: 6px;">
                                                        <button class="simple_button_1" @click.prevent="removeFillblank(indix)"><i class="bi bi-trash3-fill"></i></button>
                                                    </div>         
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
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
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import LessonDataService from "../services/LessonDataService";
import ContentDataService from "../services/ContentDataService";
import QuestionCount from "../student_components/spare_components/quiz/QuestionCount.vue";

export default {
    name: 'Content Quiz',
     components: {
      draggable: VueDraggableNext, QuestionCount
    },
    data() {
        return {
        lesson_id: this.$route.params.lesson,
        lesson_detail: {},
        quiz_list: {},
        alert_next:[],
        alert_success:null,
        iscomplete:false,
        quiz_title: null,
        quiz_marks: 0,
        quiz_timelimit: 0,
        listening_track: [],
        currentTime: 0,
        checked: true,
        inputs_fillblank:[],
        auth_token: this.$store.state.authToken,
        serial: 0,
        trackplaying:true,
        quiz_type:5,
        selected_quiztype:5
        };
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
  methods: {
    quizList(){
          ContentDataService.quizList(this.lesson_id, this.auth_token)
        .then((response) => {
             this.quiz_list = response.data.quizlist;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 
    addText(){
      this.inputs_fillblank.push({name:'',value:'',element_type:'text'});
    },
    addInput(){
      this.inputs_fillblank.push({name:'',value:'',element_type:'input'});
    },
    addSerial(){
        this.serial+=1;
        this.inputs_fillblank.push({name:'',value:this.serial,element_type:'serial'});
    },
   
    removeFillblank(index) {
      this.inputs_fillblank.splice(index, 1);
    },
    
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

    insertFillblank(){
        const token = this.auth_token;
        const payload = {
                            lesson_id:this.lesson_id,
                            question:this.quiz_title,
                            quiz_type:this.selected_quiztype,
                            marks:this.quiz_marks,
                            time_limit:this.quiz_timelimit,
                            inputs_fillblank:this.inputs_fillblank
                        };
        ContentDataService.insertFillblank(payload, token)
        .then(response => {
            console.log(response);
            this.alert_success = response.data.message;
            this.alert_next = [];
            this.quizList();
        })
        .catch(error=>{
            console.log(error);
        })
    },
    retriveListeningTrack(){
                    LessonDataService.retriveListeningTrack(this.lesson_id,this.auth_token)
                    .then(response=>{
                        this.listening_track = response.data[0];
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                },
    handeSubmit(){

        if(this.quiz_title==null){
            this.alert_next.push('Please write a Title');
        }else{
            this.iscomplete = true;
        }

        if(this.quiz_marks==0){
            this.alert_next.push('Please Input  Quiz Marks');
        }else{
            this.iscomplete = true;
        }

    
        this.insertFillblank();
     
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

    
  }, // methods end
  mounted() {
    this.lessonById(this.lesson_id, this.auth_token);
    this.quizList(this.lesson_id, this.auth_token);
    this.retriveListeningTrack();
  },
};
</script>

<style>
.option_input{
    width: 90%;
    margin-right: 10px;
}

.fill_blank_element{
 margin-right: 5px;
}
</style>