<template>
    <div class="container">
        <div class="row flex-nowrap">
            <div class="my-10">
                <div><h3>All Articles</h3></div>
                <AlertSuccess :message="message" v-if="message!=null"/>
                <table class=" table-striped " id="module">
                    <tr>
                        <th>Sl</th>
                        <th>Lesson Title</th>
                        <th>Unit</th>
                        <th>Article Title</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(article,indx) in article_list" :key="indx">
                        <td>{{indx+1}}</td>
                        <td>{{article.lesson.title}}</td>
                        <td>Unit - {{article.lesson.unit_id}}</td>
                        <td>{{article.title}}</td>
                        <td>
                            <router-link :to="{name: 'article', params:{ lesson:article.lesson.id} }" >
                                <button class="bsimple_button_1 btn-success button-rounded mx-1">Update</button>
                            </router-link> 
                            <button class="bsimple_button_1 btn-warning button-rounded mx-1" @click="handleDelete(article.id)"> Delete </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ContentDataService from '../services/ContentDataService';
import AlertSuccess from '../common_component/parts/AlertSuccess.vue';

export default {
    components:{AlertSuccess},
    data() {
        return {
            auth_token: this.$store.state.authToken,
            article_list: [],
            message: null,
        };
    },
    methods: {
        allArticle() {
            ContentDataService.allArticle(this.auth_token)
                .then(response => {
                this.article_list = response.data.data;
            })
                .catch(error => {
                console.log(error);
            });
        },
        handleDelete(id) {
            ContentDataService.deleteArticle(id, this.auth_token)
                .then(response => {
                this.message = response.data.message;
                this.allArticle();
            })
                .catch(error => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.allArticle();
    },
    components: { AlertSuccess }
}
</script>

<style>

</style>