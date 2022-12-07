<template>
    <div>
        <div class="section section-padding-02" style="margin-top: 100px;">
            <div class="container">
                <div class="contact-map-wrapper">
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=British%20american%20resource%20center&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                </div>
            </div>
        </div>
        <div class="section section-padding">
            <div class="container">
                <div class="contact-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="contact-info">
                                <img class="shape animation-round" :src="image_data[0].shape_12_img" alt="Shape">
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Phone No.</h6>
                                        <p><a href="tel:01617-302010">01617-302010</a></p>
                                    </div>
                                </div>
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-email"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Email Address.</h6>
                                        <p><a href="mailto:admin@barcportal.com">admin@barcportal.com</a></p>
                                    </div>
                                </div>
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-pin"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Office Address.</h6>
                                        <p>34 Garib-E-Newaz  Avenue, Sector:  11 Uttara,  Dhaka  1230</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-form">
                                <h3 class="title">Get in Touch <span>With Us</span></h3>
                                <div class="form-wrapper">
                                    <form id="contact-form" action="" method="POST">
                                        <div class="single-form">
                                            <input type="text" name="name" placeholder="Name">
                                        </div>
                                        <div class="single-form">
                                            <input type="email" name="email" placeholder="Email">
                                        </div>
                                        <div class="single-form">
                                            <input type="text" name="subject" placeholder="Subject">
                                        </div>
                                        <div class="single-form">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <p class="form-message"></p>
                                        <div class="single-form">
                                            <button class="btn btn-primary btn-hover-dark w-100">Send Message <i class="flaticon-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import SliderComponent from './SliderComponent.vue';
    import HowitworksComponent from './HowitworksComponent.vue';
    import AppdownloadComponent from './AppdownloadComponent.vue';
    import TestimonialComponent from './TestimonialComponent.vue';
    import BrandlogoComponent from './BrandlogoComponent.vue';
    import BlogsectionComponent from './BlogsectionComponent.vue';
    import FooterComponent from '../common_component/FooterComponent.vue';
    import API_URL from '../config';
    import axios from 'axios';


    import images from '../json/images.json';

    import { mapState, mapMutations } from 'vuex';

    export default {

    components: { SliderComponent , HowitworksComponent, AppdownloadComponent,TestimonialComponent,BrandlogoComponent,BlogsectionComponent,FooterComponent},
        data() {
            return {
                title:'Login',
                image_data: images,
                token: "",
                form:{
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: ""
                }
            }
        },
        methods:{
            handeRegister(){
                let form_data =  this.form;
                axios.post(API_URL + 'signup',form_data)
                .then((response)=>{
                    this.token = response.data.token;
                }).catch(function (error) {
                    console.log(error.response.data)
                })
            }
        }

    }
</script>
