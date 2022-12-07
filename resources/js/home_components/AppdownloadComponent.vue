<template>
    <!-- Download App Start -->
<div class="section section-padding download-section">

    <div class="app-shape-1"></div>
    <div class="app-shape-2"></div>
    <div class="app-shape-3"></div>
    <div class="app-shape-4"></div>

    <div class="container">

        <!-- Download App Wrapper Start -->
        <div class="download-app-wrapper mt-n6">

            <!-- Section Title Start -->
            <div class="section-title section-title-white">
                <h5 class="sub-title">Ready to start?</h5>
                <h2 class="main-title">Download our mobile app. for easy to start your course.</h2>
            </div>
            <!-- Section Title End -->

            <img class="shape-1 animation-right" :src="image_data[0].shape_14_img" alt="Shape">

            <!-- Download App Button End -->
            <div class="download-app-btn">
                <ul class="app-btn">
                    <li><a href="#"><img :src="image_data[0].google_play" alt="Google Play"></a></li>
                    <li><a href="#"><img :src="image_data[0].app_store" alt="App Store"></a></li>
                </ul>
            </div>
            <!-- Download App Button End -->

        </div>
        <!-- Download App Wrapper End -->

    </div>
</div>
<!-- Download App End -->
</template>

<script>
import images from '../json/images.json';
import { defineComponent } from 'vue';

export default defineComponent({
        data(){
            return {
                title: 'Apps Download',
                image_data: images,
            }
        }
})
</script>
