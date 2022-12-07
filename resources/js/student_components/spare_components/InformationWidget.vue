<template lang="">
    <div>
        <div class="sidebar-widget widget-information">
            <div class="info-price">
                <span class="price" style="text-transform:capitalize">{{course_name}} - {{module}}</span>
            </div>
            <div class="info-list">
                <ul>
                    <li><i class="icofont-book-alt"></i> <strong>Units</strong> <span>8</span></li>
                    <li><i class="icofont-clock-time"></i> <strong>Duration</strong> <span>{{study_minutes}} Minutes</span></li>
                    <li><i class="icofont-ui-video-play"></i> <strong>Lessons</strong> <span>{{lesson_count}}</span></li>
                    <li><i class="icofont-bars"></i> <strong>Level</strong> <span>Foundation</span></li>
                </ul>
            </div>
        </div>
</div>
</template>
<script>
export default {
    props:['study_minutes','lesson_count','course_name','module_id','module'],
    data(){
        return {
            title:"Information Widget"
        }
    },
    computed:{
        modeuleName(){
            if(this.module_id==6){
                return 'Vocabulary';
            }
        }
    }

}
</script>
<style lang="">

</style>
