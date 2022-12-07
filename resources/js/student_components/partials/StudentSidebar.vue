<template>
  <div id="sidebar" class="collapse collapse-horizontal  border-end">
        <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">

            <router-link :to="{name:'student-dashboard'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="icofont-home"></i>
                <span> My Learning (Home) </span>
            </router-link>

            <router-link :to="{name:'student-mycourse'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-film"></i>
                <span> My Course</span>
            </router-link>

            <router-link :to="{name:'student-allcourse'}"  class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-heart"></i>
                <span> All Course </span>
            </router-link>

            <router-link :to="{name:'student-myprofile'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-bricks"></i>
                <span> My Profile </span>
            </router-link>

            <router-link :to="{name:'student-changepass'}"  class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-bricks"></i>
                <span> Change Password </span>
            </router-link>

            <router-link :to="{name:'student-myattendance'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-clock"></i>
                <span> My Attendance </span>
            </router-link>

            <router-link :to="{name:'student-mylearning'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-archive"></i>
                <span> Revision </span>
            </router-link>

            <router-link :to="{name:'student-classtest'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-archive"></i>
                <span> Class Test </span>
            </router-link>

            <router-link :to="{name:'student-support'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-chat-left-heart"></i>
                <span> Support Center </span>
            </router-link>

            <router-link :to="{name:'student-notifications'}" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                <i class="bi bi-bell"></i>
                <span> Notifications </span>
            </router-link>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
