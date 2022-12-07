<template lang="">
    <div>
        <div class="sidebar">
            <div class="sidebar-widget widget-information">
                <div class="info-price">
                    <span class="price">{{course_title}}</span>
                </div>
                <div class="info-list">
                    <ul>
                        <li><i class="icofont-pen"></i> <strong>Module</strong> <span>{{lesson}}</span></li>
                        <li><i class="icofont-book-alt"></i> <strong>Unit of Lesson</strong> <span>{{unit_name}}</span></li>
                        <li><i class="icofont-clock-time"></i> <strong>Study Time</strong> <span>{{study_time}} Minutes</span></li>
                        <li><i class="icofont-ui-video-play"></i> <strong>Obtained Marks</strong> <span>{{marks_percent}} %</span></li>
                        <li><i class="icofont-bars"></i> <strong>Level</strong> <span>Foundation</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        course_title:{
            type:String,
            default: 'Course Name'
        },
        unit_name:{
            type:String,
            default: 'Unit Name'
        },
        lesson:{
            type:String
        },
        study_time:{
            type:[String,Number],
            default: 'Study Time'
        },
        marks_percent:{
            type:[String, Number],
            default: 'Percentage'
        }

    }
}
</script>
<style lang="">
    
</style>