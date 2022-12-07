<template>
  <div>
    <table class=" table-striped " id="module">
        <tr>
            <th>Sl</th>
            <th>Course</th>
            <th>Unit</th>
            <th>Title</th>
            <th>Quiz</th>
            <th>View </th>
        </tr>
        <tr v-for="(lesson,indx) in lesson_list" :key="indx">
            <td>{{indx+1}}</td>
            <td>{{lesson.course_name}}</td>
            <td>{{lesson.unit_name}}</td>
            <td>{{lesson.title}}</td>
            <td>
                <template v-if="lesson.quiz==null">
                    <router-link :to="{name: 'quiz_making', params:{ lesson_id:lesson.id, module_id:6} }" ><button class="simple_button_1">Add</button></router-link>
                </template>
            </td>
            <td>
                <button class="bsimple_button_1"> View </button>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    props:["lesson_list"],
    data(){
        return {
            title:'Vocabulary Lesson List'
        }
    }
}
</script>

<style>

</style>
