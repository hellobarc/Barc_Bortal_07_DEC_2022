<template>
    <div class="container">
        <div class="row flex-nowrap">
            <div class="my-10">
                
                <div> 
                    <button class="button_back">  <router-link to="/content/dashboard"> <i class="bi bi-arrow-left"></i>   Dashboard  </router-link></button>
                </div>

                <div><h3>All Lesson List</h3></div>
                <table class=" table-striped " id="module">
                    <tr>
                        <th>Sl</th>
                        <th>Course</th>
                        <th>Unit</th>
                        <th>Module</th>
                        <th>Title</th>
                        <th>Article/Passage/Track</th>
                        <th>Quiz</th>
                        <th>Action </th>
                    </tr>
                    <tr v-for="(lesson,indx) in lesson_list" :key="indx">
                        <td>{{indx+1}}</td>
                        <td>{{lesson.course_name}}</td>
                        <td>{{lesson.unit_name}}</td>
                        <td><div v-if="lesson.course_module_id==1"> Reading </div> <div v-else-if="lesson.course_module_id==2"> Listening </div> <div v-else-if="lesson.course_module_id==3"> Grammar </div> <div v-else-if="lesson.course_module_id==4"> Vocavulary </div></td>
                        <td>{{lesson.title}}</td>
                        <td>

                            <div v-if="lesson.course_module_id==1">
                                <template v-if="lesson.article==null">
                                <router-link :to="{name: 'article', params:{ lesson:lesson.id} }" ><button class="simple_button_1">Add Article</button></router-link> 
                                </template>
                                <template v-else>
                                    <router-link :to="{name: 'article', params:{ lesson:lesson.id} }" ><button class="simple_button_1">Update Article</button></router-link> 
                                </template>
                            </div>

                            <div v-else-if="lesson.course_module_id==2">
                                <template v-if="lesson.article==null">
                                <router-link :to="{name: 'article', params:{ lesson:lesson.id} }" ><button class="simple_button_1">Add Track</button></router-link> 
                                </template>
                                <template v-else>
                                    <router-link :to="{name: 'article', params:{ lesson:lesson.id} }" ><button class="simple_button_1">Update Track</button></router-link> 
                                </template>
                            </div>
                            
                        </td>
                        <td> 
                            <template v-if="lesson.quiz==null">
                                <router-link :to="{name: 'quiz_reading', params:{ lesson:lesson.id} }" ><button class="simple_button_1">Add</button></router-link> 
                            </template>
                        </td>
                        <td> 
                            <button class="bsimple_button_1 btn-warning button-rounded" @click="handleDelete(lesson.id)"> Delete </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>  
</template>

<script>
import ContentDataService from '../services/ContentDataService';

export default {
    data(){
        return{
            auth_token: this.$store.state.authToken,
            lesson_list: [],
        }
    },
    methods:{
        allLesson(){
            ContentDataService.allLesson(this.auth_token)
            .then(response=>{
                console.log(response);
                this.lesson_list = response.data.data;
            })
            .catch(error=>{
                console.log(error);
            });
        },
        handleDelete(id){
            ContentDataService.deleteLesson(id,this.auth_token)
            .then(response=>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            });
        }
    },
    computed:{
       
    },
    mounted(){
        this.allLesson();
    }
}
</script>

<style>

</style>