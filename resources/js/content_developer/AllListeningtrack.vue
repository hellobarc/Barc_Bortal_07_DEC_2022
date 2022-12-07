<template>
 <div class="container">
    <div class="row flex-nowrap">
        <div class="my-10">
            ddf
            {{track_list}} {{auth_token}}
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
                <tr v-for="(track,indx) in track_list" :key="indx">
                    <td>{{indx+1}}</td>
                    <td>quiz question</td>
                    <td>Lesson</td>
                    <td>Unit</td>
                    <td>cuurse</td>
                    <td>cuurse</td>
                    <td>
                        <button class="simple_button_1" @click="handleDelete">Delete</button>
                    </td>
                    <td> 
                        <button class="bsimple_button_1"> View </button>
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
            track_list: [],
        }
    },
    methods:{
        allListeningtrack(){
            ContentDataService.allListeningtrack(this.auth_token)
            .then(response=>{
                this.track_list = response.data.data;
            })
            .catch(error=>{
                console.log(error);
            });
        },
        handleDelete(){
            alert("delete korte hobe");
        }
    },
    mounted(){
        this.allListeningtrack();
    }
}
</script>

<style>

</style>