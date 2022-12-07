<template lang="">
    <div>
        <div class="footer-widget-section">
                <img class="shape-1 animation-down" :src="image_data[0].shape_22_img" alt="Shape">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
                            <div class="footer-widget">
                                <div class="widget-logo">
                                    <a href="#"><img :src="image_data[0].logo_img" alt="Logo"></a>
                                </div>
                                <div class="widget-address">
                                    <h4 class="footer-widget-title">British American Resource Center</h4>
                                    <p>Uttara and Mirpur.</p>
                                </div>
                                <ul class="widget-info">
                                    <li>
                                        <p> <i class="flaticon-email"></i> <a href="mailto:barcnew@gmail.com">barcnew@gmail.com</a> </p>
                                    </li>
                                    <li>
                                        <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(+88) 01617-302010</a> </p>
                                    </li>
                                </ul>
                                <ul class="widget-social">
                                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 order-md-3 order-lg-2">
                            <div class="footer-widget-link">
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Category</h4>
                                    <ul class="widget-link">
                                        <li><a href="#">English Foundation</a></li>
                                        <li><a href="#">IELTS Prepartion</a></li>
                                        <li><a href="#">Business English</a></li>
                                        <li><a href="#">School English</a></li>
                                        <li><a href="#">Kids English</a></li>
                                        <li><a href="#">Immigration Consultancy</a></li>
                                    </ul>
                                </div>
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Quick Links</h4>

                                    <ul class="widget-link">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Discussion Forum</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Customer Support</a></li>
                                        <li><a href="#">Course FAQ’s</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Subscribe</h4>

                                <div class="widget-subscribe">
                                    <p>Please subscribe for our periodical Journal and Newsletter.</p>

                                    <div class="widget-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email here">
                                            <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="shape-2 animation-left" :src="image_data[0].shape_22_img" alt="Shape">
            </div>
    </div>
</template>
<script>
import images from '../json/images.json';
export default {
     data(){
        return {
             image_data: images,
        }
    }

}
</script>
<style lang="">

</style>
