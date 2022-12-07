<template>
    <div>
        <table class=" table-striped " id="module">
            <tr>
                <th>Sl</th>
                <th>Exam Name</th>
                <th>Course</th>
                <th>Exam Type</th>
                <th>Add Excersize</th>
            </tr>
            <tr v-for="(exam,indx) in exam_list" :key="indx">
                <td>
                    {{indx+1}}
                </td>
                <td>
                    {{exam.exam_name}}
                </td>
                <td>
                    {{exam.course.course_name}}
                </td>
                <td>
                    {{exam.exam_type}}
                </td>
                <td>
                    <router-link :to="{name:'instructor-manage-excersize', params:{ exam_id:exam.id}}" class="btn btn-sm btn-info">
                        <i class="bi bi-plus"></i>
                        <span> Add Excersize</span>
                    </router-link>
                </td>
            </tr>
        </table>
    </div>
    </template>
<script>

    import ExamDataService from '../services/ExamDataService';

    export default {
        data() {
            return {
                active: false,
                auth_token: this.$store.state.authToken,
                exam_list: [],
            }
        },
        methods: {
            allExam(){
                ExamDataService.allExam(this.auth_token)
                .then(res=>{
                    console.log(res)
                    this.exam_list = res.data.exam_list;
                })
                .catch(err=>{
                    consolee.log(err)
                })
            }
        },
        mounted(){
            this.allExam();
        }
    }
    </script>
<style lang="">

</style>
