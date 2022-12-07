<template>
<!-- Brand Logo Start -->
<div class="section section-padding-02">
    <div class="container">

        <!-- Brand Logo Wrapper Start -->
        <div class="brand-logo-wrapper">

            <img class="shape-1" :src="image_data[0].shape_19_img" alt="Shape">

            <img class="shape-2 animation-round" :src="image_data[0].shape_20_img" alt="Shape">

            <!-- Section Title Start -->
            <div class="section-title shape-03">
                <h2 class="main-title">Best Supporter of <span> British American Resource Center.  </span></h2>
            </div>
            <!-- Section Title End -->

            <!-- Brand Logo Start -->
            <div class="brand-logo brand-active">
                <div class="swiper-container">
                    <div class="swiper-wrapper">

                        <!-- Single Brand Start -->
                        <div class="single-brand swiper-slide">
                            <img :src="image_data[0].brand_logo1" alt="Brand">
                        </div>
                        <!-- Single Brand End -->

                        <!-- Single Brand Start -->
                        <div class="single-brand swiper-slide">
                            <img :src="image_data[0].brand_logo2" alt="Brand">
                        </div>
                        <!-- Single Brand End -->

                        <!-- Single Brand Start -->
                        <div class="single-brand swiper-slide">
                            <img :src="image_data[0].brand_logo3" alt="Brand">
                        </div>
                        <!-- Single Brand End -->

                        <!-- Single Brand Start -->
                        <div class="single-brand swiper-slide">
                            <img :src="image_data[0].brand_logo4" alt="Brand">
                        </div>
                        <!-- Single Brand End -->

                        <!-- Single Brand Start -->
                        <div class="single-brand swiper-slide">
                            <img :src="image_data[0].brand_logo5" alt="Brand">
                        </div>
                        <!-- Single Brand End -->

                        <!-- Single Brand Start -->
                        <div class="single-brand swiper-slide">
                            <img :src="image_data[0].brand_logo6" alt="Brand">
                        </div>
                        <!-- Single Brand End -->

                    </div>
                </div>
            </div>
            <!-- Brand Logo End -->

        </div>
        <!-- Brand Logo Wrapper End -->

    </div>
</div>
<!-- Brand Logo End -->

</template>

<script>

import images from '../json/images.json';

export default {
  data() {
        return {
            image_data: images
        }
    }
}
</script>
