<template>
    <div class="header-section">
        <div class="header-top d-none d-lg-block">
            <div class="container">
                <div class="header-top-wrapper">
                    <div class="header-top-left">
                        <p>Get upto 50% off for all Courses  <a href="#">British American Resource Center.</a></p>
                    </div>
                    <div class="header-top-medal">
                        <div class="top-info">
                            <p><i class="flaticon-phone-call"></i> <a href="tel:01617-302010">01617-302010</a></p>
                            <p><i class="flaticon-email"></i> <a href="mailto:barcnew@gmail.com">barcnew@gmail.com</a></p>
                        </div>
                    </div>
                    <div class="header-top-right">
                        <ul class="social">
                            <li><a href="https://www.facebook.com/hellobarc/"><i class="flaticon-facebook"></i></a></li>
                            <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                            <li><a href="#"><i class="flaticon-skype"></i></a></li>
                            <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <div class="header-main">
        <div class="container">
            <navigation-conponent/>
        </div>
    </div>
</div>
</template>
<script>
import NavigationConponent from './NavigationConponent.vue';
import images from '../json/images.json';
export default {
  components: { NavigationConponent },
     data() {
        return {
            title:'barcportal'
            }
    }
}
</script>
