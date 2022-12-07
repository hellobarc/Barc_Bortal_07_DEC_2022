<template lang="">
    <div>
        <div class="sidebar">
            <div class="sidebar-widget widget-information">
                <div class="info-price">
                    <span class="price">{{course_info.course_name}}</span>
                </div>
                <div class="info-list">
                    <ul>
                        <li><i class="icofont-book-alt"></i> <strong>Units</strong> <span>{{course_info.unit}}</span></li>
                        <li><i class="icofont-clock-time"></i> <strong>Study Time</strong> <span>{{course_info.study_time}} Minutes</span></li>
                        <li><i class="icofont-ui-video-play"></i> <strong>Lessons</strong> <span>{{course_info.lesson_count}}</span></li>
                        <li><i class="icofont-bars"></i> <strong>Level</strong> <span>{{course_info.level}}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        course_info:{
            type: Object,
        }
    }
}
</script>
<style lang="">

</style>
