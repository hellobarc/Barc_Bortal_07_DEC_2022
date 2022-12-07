<template>

<!-- How It Work End -->
<div class="section section-padding mt-n1">
    <div class="container">

        <!-- Section Title Start -->
        <div class="section-title shape-03 text-center">
            <h5 class="sub-title">Over 1,235+ Course</h5>
            <h2 class="main-title">How It <span> Works?</span></h2>
        </div>
        <!-- Section Title End -->

        <!-- How it Work Wrapper Start -->
        <div class="how-it-work-wrapper">

            <!-- Single Work Start -->
            <div class="single-work">
                <img class="shape-1" :src="image_data[0].shape_15_img" alt="Shape">

                <div class="work-icon">
                    <i class="flaticon-transparency"></i>
                </div>
                <div class="work-content">
                    <h3 class="title">Find Your Course</h3>
                    <p>It has survived not only centurie also leap into electronic.</p>
                </div>
            </div>
            <!-- Single Work End -->

            <!-- Single Work Start -->
            <div class="work-arrow">
                <img class="arrow" :src="image_data[0].shape_17_img" alt="Shape">
            </div>
            <!-- Single Work End -->

            <!-- Single Work Start -->
            <div class="single-work">
                <img class="shape-2" :src="image_data[0].shape_15_img" alt="Shape">

                <div class="work-icon">
                    <i class="flaticon-forms"></i>
                </div>
                <div class="work-content">
                    <h3 class="title">Book A Seat</h3>
                    <p>It has survived not only centurie also leap into electronic.</p>
                </div>
            </div>
            <!-- Single Work End -->

            <!-- Single Work Start -->
            <div class="work-arrow">
                <img class="arrow" :src="image_data[0].shape_17_img" alt="Shape">
            </div>
            <!-- Single Work End -->

            <!-- Single Work Start -->
            <div class="single-work">
                <img class="shape-3" :src="image_data[0].shape_16_img" alt="Shape">

                <div class="work-icon">
                    <i class="flaticon-badge"></i>
                </div>
                <div class="work-content">
                    <h3 class="title">Get Certificate</h3>
                    <p>It has survived not only centurie also leap into electronic.</p>
                </div>
            </div>
            <!-- Single Work End -->


        </div>

    </div>
</div>
<!-- How It Work End -->

</template>

<script>
import images from '../json/images.json';
export default {
    data() {
         return {
              image_data: images
        }
    },
}
</script>
