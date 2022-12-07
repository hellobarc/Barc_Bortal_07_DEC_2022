<template>
    <!-- Slider Start -->
    <div class="section slider-section">

        <!-- Slider Shape Start -->
        <div class="slider-shape">
            <img class="shape-1 animation-round" :src="image_data[0].shape_8_img" alt="Shape">
        </div>
        <!-- Slider Shape End -->

        <div class="container">

            <!-- Slider Content Start -->
            <div class="slider-content">
                <h4 class="sub-title">Start your favourite course</h4>
                <h2 class="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2>
                <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                <a class="btn btn-primary btn-hover-dark" href="#">Start A Course</a>
            </div>
            <!-- Slider Content End -->

        </div>

        <!-- Slider Courses Box Start -->
        <div class="slider-courses-box">

            <img class="shape-1 animation-left" :src="image_data[0].shape_5_img" alt="Shape">

            <div class="box-content">
                <div class="box-wrapper">
                    <i class="flaticon-open-book"></i>
                    <span class="count">8</span>
                    <p>Units</p>
                </div>
            </div>

            <img class="shape-2" :src="image_data[0].shape_6_img" alt="Shape">

        </div>
        <!-- Slider Courses Box End -->

        <!-- Slider Rating Box Start -->
        <div class="slider-rating-box">

            <div class="box-rating">
                <div class="box-wrapper">
                    <span class="count">8<i class="flaticon-star"></i></span>
                    <p>Band Guarantee</p>
                </div>
            </div>

            <img class="shape animation-up" :src="image_data[0].shape_7_img" alt="Shape">

        </div>
        <!-- Slider Rating Box End -->

        <!-- Slider Images Start -->
        <div class="slider-images">
            <div class="images">
                <img :src="image_data[0].slider1" alt="Slider">
            </div>
        </div>
        <!-- Slider Images End -->

        <!-- Slider Video Start -->
        <div class="slider-video">
            <img class="shape-1" :src="image_data[0].shape_9_img" alt="Shape">

            <div class="video-play">
                <img :src="image_data[0].shape_10_img" alt="Shape">
                <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" class="play video-popup"><i class="flaticon-play"></i></a>
            </div>
        </div>
        <!-- Slider Video End -->

    </div>
    <!-- Slider End -->

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
