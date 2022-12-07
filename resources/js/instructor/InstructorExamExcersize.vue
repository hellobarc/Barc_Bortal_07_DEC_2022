<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <SidebarInstructor/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>BARC Portal e-Learning Platform</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <div v-if="this.$store.state.isOnline==false" class="alert alert-danger" role="alert">Connection is Offline</div>
            <hr>
            <div class="row">
                <div class="col-md-4">

                        <AlertMessage :alert_next="alert_next" :alert_success="alert_success" />

                        <form @submit.prevent="createExcersize()">
                            <div class="form-group">
                                <label for="excersize_name">Excersize Name Name</label>
                                <input type="text" class="form-control" id="excersize_name" v-model="excersize_name" aria-describedby="excersize_name" placeholder="Excersize name" required>
                            </div>
                            <div class="form-group">
                                <label for="unit">Select Module</label>
                                <select class="myselect"  v-model="selected_module"  @change="changeModule($event)" required>
                                    <option disabled value="0">Select Module</option>
                                    <option  value="reading">Reading</option>
                                    <option  value="listening">Listening</option>
                                    <option  value="grammar">Grammar</option>
                                    <option  value="vocabulary">Vocabulary</option>
                                    <option  value="writing_submit">Writing Submit</option>
                                    <option  value="reading">Speakin g</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="excersize_name">Time Limit</label>
                                <input type="number" class="form-control"  v-model="time_limit" aria-describedby="time_limit" placeholder="Time Limit" required>
                            </div>
                            <br/>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary text-center">Submit</button>
                            </div>
                        </form>
                </div>
                <div class="col-md-8">
                    {{excersize_list}}
                    <table class="table-striped" id="module">
                        <tr>
                            <th>Sl</th>
                            <th>Excersize Name</th>
                            <th>Module</th>
                            <th>Time Limit</th>
                            <th>Add Element</th>
                        </tr>
                        <tr v-for="(excersize,indx) in excersize_list" :key="indx">
                            <td>
                                {{indx+1}}
                            </td>
                            <td>
                                {{excersize.excersize_name}}
                            </td>
                            <td>
                                {{excersize.excersize_module}}
                            </td>
                            <td>
                                {{excersize.time_limit}}
                            </td>
                            <td>
                                <router-link :to="{name:'instructor-exam-article', params:{ excersize_id:excersize.id} }" class="btn btn-sm btn-info mx-1">
                                    <i class="bi bi-plus"></i>
                                    <span> Add Passage</span>
                                </router-link>
                                <router-link :to="{name:'instructor-manage-excersize', params:{ excersize_id:excersize.id} }" class="btn btn-sm btn-info mx-1">
                                    <i class="bi bi-plus"></i>
                                    <span> Add Audio</span>
                                </router-link>
                                <router-link :to="{name:'instructor-exam-question', params:{ excersize_id:excersize.id, excersize_module:excersize.excersize_module} }" class="btn btn-sm btn-info mx-1">
                                    <i class="bi bi-plus"></i>
                                    <span> Add Question </span>
                                </router-link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
import ExamDataService from '../services/ExamDataService';
    import SidebarInstructor from './SidebarInstructor.vue';
import AlertMessage from '../common_component/AlertMessage.vue';

    export default {
        components: { SidebarInstructor, AlertMessage },
           data(){
               return{
                   title: "Manage Excersize of Exam",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   excersize_list: [],
                   exam_id: this.$route.params.exam_id,
                   excersize_name: null,
                   selected_module: 0,
                   time_limit: null,
                   alert_next: 0,
                   alert_success: 0,
               }
           },
           methods:{
            createExcersize(){
                const payload = {exam_id:this.exam_id,excersize_name:this.excersize_name,excersize_module:this.selected_module,time_limit:this.time_limit};
                ExamDataService.createExcersize(payload,this.auth_token)
                .then(res=>{
                    console.log(res);
                    this.alert_success = res.data.message;
                })
                .catch(error=>{
                    console.log(error);
                })
            },
            allExcersize(){
                ExamDataService.allExcersize(this.exam_id,this.auth_token)
                .then(res=>{
                    console.log(res);
                    this.excersize_list = res.data.exam_list;
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            changeModule(event){
                this.selected_module = event.target.value;
            }

           },
           watch: {

           },
           mounted(){
                this.allExcersize();
           }
    }
</script>

<style scoped>


</style>
