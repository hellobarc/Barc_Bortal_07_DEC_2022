<template>
  <div>
    <AlertSuccess :message="message" v-if="message!=null"/>
    <table class=" table-striped " id="module">
        <tr>
            <th>Sl</th>
            <th>Task question</th>
            <th>Course</th>
            <th>Unit</th>
            <th>Task Serial</th>
            <th>Study Minutes</th>
            <th>Action </th>
        </tr>
        <tr v-for="(task,indx) in task_list" :key="indx">
            <td>{{indx+1}}</td>
            <td>{{task.title}}</td>
            <td>{{task.course.course_name}}</td>
            <td>{{task.unit.unit_name}}</td>
            <td>Task-{{task.task_serial}}</td>
            <td>{{task.study_minutes}} Minitues</td>
            <td>
                <button class="bsimple_button_1 btn-warning button-rounded mx-1" @click="handleDelete(task.id)"> Delete </button>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
import ContentDataService from '../services/ContentDataService';
import AlertSuccess from '../common_component/parts/AlertSuccess.vue';

export default {
    components:{AlertSuccess},
    props:["task_list"],
    data(){
        return {
            title:'Reading Lesson List',
            message: null,
        }
    },
    methods:{
        handleDelete(id) {
            ContentDataService.deleteWritingTask(id, this.auth_token)
                .then(response => {
                this.message = response.data.message;
                this.allArticle();
            })
                .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>
