<template>
   <div>
    {{quiz_list}} {{auth_token}}
        <div><h1>All LEsson</h1></div>
        <table class=" table-striped " id="module">
            <tr>
                <th>Sl</th>
                <th>Question</th>
                <th>Title</th>
                <th>Lesson</th>
                <th>Unit</th>
                <th>Course</th>
                <th>Action</th>
                <th>View </th>
            </tr>
            <tr v-for="(quizes,indx) in quiz_list" :key="indx">
                <td>{{indx+1}}</td>
                <td>quiz question</td>
                <td>Lesson</td>
                <td>Unit</td>
                <td>cuurse</td>
                <td>
                    <router-link :to="{name: 'article_delete', params:{ quiz_id:quizes.id} }" ><button class="simple_button_1">Delete</button></router-link> 
                </td>
                <td> 
                    <button class="bsimple_button_1"> View </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import ContentDataService from '../services/ContentDataService';

export default {
    data(){
        return{
            auth_token: this.$store.state.authToken,
            article_list: [],
        }
    },
    methods:{
        allQuizes(){
            ContentDataService.allQuizes(this.auth_token)
            .then(response=>{
                this.article_list = response.data.data;
            })
            .catch(error=>{
                console.log(error);
            });
        },
    },
    mounted(){
        this.allQuizes();
    }
}
</script>

<style>

</style>