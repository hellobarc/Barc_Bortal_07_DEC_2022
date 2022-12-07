<template lang="">
    <div>
         <div id="sidebar" class="collapse collapse-horizontal show border-end">
            <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">

                    <router-link :to="{name:'instructor-dashboard'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                       <i class="bi bi-book-half"></i> <span> Dashboard </span>
                    </router-link>

                    <router-link :to="{name:'class-test-list'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                       <i class="bi bi-clipboard2-data-fill"></i><span> Class Test List </span>
                    </router-link>

                    <router-link :to="{name:'create-class-test'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                      <i class="bi bi-bookmark-plus-fill"></i><span> Create Class Test</span>
                    </router-link>

                    <router-link :to="{name:'exam-list'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                       <i class="bi bi-book-half"></i> <span> Exam List </span>
                    </router-link>

                    <router-link :to="{name:'instructor-student-attendance'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                       <i class="bi bi-book-half"></i> <span> Student Attendance </span>
                    </router-link>


                    <router-link :to="{name:'writing-assess'}"  class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                       <i class="bi bi-book-half"></i> <span> Writing Assess </span>
                    </router-link>


                    <router-link :to="{name:'speaking-assess'}"  class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                       <i class="bi bi-book-half"></i> <span> Speaking Assess </span>
                    </router-link>

            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
