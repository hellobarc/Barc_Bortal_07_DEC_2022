<template>
    <!-- Call to Action Start -->
<div class="section section-padding-02">
    <div class="container">

        <!-- Call to Action Wrapper Start -->
        <div class="call-to-action-wrapper">

            <img class="cat-shape-01 animation-round" :src="image_data[0].shape_12_img" alt="Shape">
            <img class="cat-shape-02" :src="shape12" alt="Shape">
            <img class="cat-shape-03 animation-round" :src="image_data[0].shape_13_img" alt="Shape">

            <div class="row align-items-center">
                <div class="col-md-6">

                    <!-- Section Title Start -->
                    <div class="section-title shape-02">
                        <h5 class="sub-title">Start Learning with British American Resource Center</h5>
                        <h2 class="main-title">You can join  as <span>a instructor?</span></h2>
                    </div>
                    <!-- Section Title End -->

                </div>
                <div class="col-md-6">
                    <div class="call-to-action-btn">
                        <a class="btn btn-primary btn-hover-dark" href="#">Request Information</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Call to Action Wrapper End -->

    </div>
</div>
<!-- Call to Action End -->
</template>

<script>
import images from '../json/images.json';
export default ({
    data(){
        return {
           image_data: images
        }
    }
})
</script>
