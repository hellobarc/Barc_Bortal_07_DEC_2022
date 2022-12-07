<template>
    <div>
        <div v-if="mark_percent > 60"><img :src="`/fun_image/${congratulation_anim.file_name}`" style="max-width: 100%;margin: 15px auto; width: 50%; display: block;"/>
            <h4>Congratulation !! You did a Good Job</h4>
        </div>
        <div v-else> <img :src="`/fun_image/${coffee_anim.file_name}`" style="max-width: 100%;margin: 15px auto; width: 50%; display: block;"/>
            <h4>Advise : Please have a cup of Coffe and Study more..</h4>
        </div>
             <div class="table-responsive sm">
                <table class="table-striped" id="module">
                    <tr>
                        <th>Lesson:</th> <td>{{lesson.title}}</td>
                    </tr>
                    <tr>
                        <th>Unit:</th> <td>{{unit.unit_name}}</td>
                    </tr>
                    <tr>
                        <th>Study Time:</th> <td>{{lesson.study_minutes}} minutes</td>
                    </tr>
                    <tr>
                        <th>Marks Obtained:</th> <td>{{obtained_marks}} out of {{total_marks}}</td>
                    </tr>
                    <tr>
                        <th>Marks Percent:</th> <td>{{Math.round(mark_percent)}}%</td>
                    </tr>
                </table>
            </div>
            <div style="display: flex; justify-content: space-between;" class="my-5">
                <div><router-link :to="'/course-detail/'+1" :class="{btn:true}" class="green_small_btn"><i class="bi bi-arrow-left"></i> Keep Learning </router-link></div>
                <div><router-link :to="{ name: 'lesson_list', params: { lesson: 'reading', module_id: module_id, course_id: course_id } }" :class="{btn:true}" class="green_small_btn"> Lesson <i class="bi bi-arrow-right"></i></router-link></div>
            </div>

            <div style="display: flex; justify-content: space-between;" class="my-5">
                <div><router-link :to="{ name: 'lesson_review', params: { lesson: 'reading', module_id: module_id, course_id: course_id } }" :class="{btn:true}" class="green_small_btn"><i class="bi bi-arrow-left"></i> Review this Lesson </router-link>
                </div>
            </div>
    </div>
</template>

<script>
import BasicDataService from '../../../services/BasicDataService';
import LessonDataService from '../../../services/LessonDataService';

    export default{
        name:'congratulation',
        props:["lesson_id","module_id","course_id"],
        data() {
            return {
                title: 'Congrates',
                congratulation_anim: '',
                coffee_anim: '',
                lesson:'',
                unit:'',
                total_marks:'',
                obtained_marks:'',
                mark_percent:'',
                auth_token: this.$store.state.authToken,
            }
        },
        methods:{
           getCongratulationPic(){
            BasicDataService.getCongratulationPic()
            .then((response)=>{
                console.log(response);
                this.congratulation_anim = response.data[0];
            })
            .catch((error)=>{
                console.log(error);
            })

           },
           getCoffeePic(){
                BasicDataService.getCoffeePic()
                .then((response)=>{
                    console.log(response);
                    this.coffee_anim = response.data[0];
                })
                .catch((error)=>{
                    console.log(error);
                })
           },
           retriveQuizResult(){
                const payload = {lesson_id:this.lesson_id};
                LessonDataService.retriveQuizResult(payload,this.auth_token)
                .then((response)=>{
                    console.log(response);
                    this.lesson = response.data.lesson;
                    this.unit = response.data.lesson.unit;
                    this.total_marks = response.data.total_marks;
                    this.obtained_marks = response.data.obtained_marks;
                    this.mark_percent = response.data.mark_percent;
                })
                .catch((error)=>{
                    console.log(error);
                })
           }
        },
       mounted(){
            this.retriveQuizResult();
            this.getCongratulationPic();
            this.getCoffeePic();

       }
    }
</script>

<style scoped>
ul.info{
    display: flex;
    justify-content: space-around;
}

ul.info li{
  font-weight: bold;
}
</style>
