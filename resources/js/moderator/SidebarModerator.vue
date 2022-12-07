<template lang="">
    <div>
         <div id="sidebar" class="collapse collapse-horizontal show border-end">
            <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">

                <router-link :to="{name:'moderator-allcourse'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-bootstrap"></i>
                    <span> Overview</span>
                </router-link>

                <router-link :to="{name:'moderator-allcourse'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-film"></i>
                    <span> Courses</span>
                </router-link>

                <router-link :to="{name:'moderator-student'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-person-lines-fill"></i>
                    <span> Student </span>
                </router-link>

                <router-link :to="{name:'student-attendance'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-bricks"></i> <span>Exam List</span>
                </router-link>

                <router-link :to="{name:'student-attendance'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-book-half"></i>
                    <span> Student Attendance </span>
                </router-link>

                <router-link :to="{name:'batch-manage'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-book-half"></i>
                    <span> Batch Manage </span>
                </router-link>

                <router-link :to="{name:'moderator-support-ticket'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-chat-dots"></i>
                    <span> Support Tickets </span>
                </router-link>

                <router-link :to="{name:'moderator-notification'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    <i class="bi bi-chat-dots"></i>
                    <span> Notification </span>
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
