<template>
    <div id="sidebar" class="collapse collapse-horizontal show border-end">
        <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">

            <router-link :to="{name: 'content-dashboard'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-bootstrap"></i>
                <span>Overview</span>
            </router-link>

            <router-link :to="{name:'all_lesson'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-book-half"></i>
                <span> Lessons</span>
            </router-link>

            <router-link :to="{name:'all_articles'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-textarea"></i>
                <span> Articles</span>
            </router-link>

             <router-link :to="{name:'all_listening_track'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-playstation"></i>
                <span> Listenign Track</span>
            </router-link>

            <router-link :to="{name:'all_quizes'}"  class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-clock"></i>
                <span> Quizes</span>
            </router-link>

            <router-link :to="{name:'writing_task'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-pen"></i>
                <span> Writing Task</span>
            </router-link>

            <router-link :to="{name:'all_extras'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-boxes"></i>
                <span> Extras</span>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            course_id:1,
        }
    }
}
</script>

<style>

</style>

