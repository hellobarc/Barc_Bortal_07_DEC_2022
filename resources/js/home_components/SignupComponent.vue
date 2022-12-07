<template>

<div class="section section-padding top100">
    <div class="container">
        <div class="register-login-wrapper">
            <div class="row align-items-center">
                <div class="col-lg-6 d-none d-sm-block">
                    <div class="register-login-images">
                        <div class="shape-1">
                            <img :src="image_data[0].shape_26_img" alt="Shape">
                        </div>
                        <div class="images">
                            <img :src="image_data[0].register_login" alt="Register Login">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="register-login-form">
                        <h3 class="title">Registration <span>Now {{token}}</span></h3>
                        <div class="form-wrapper">
                            <form @submit.prevent="handeRegister">
                                <div class="single-form">
                                    <input type="text" placeholder="Name" v-model="form.name" required>
                                </div>
                                <div class="single-form">
                                    <input type="email" placeholder="Email" v-model="form.email" required>
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="Password"  v-model="form.password" required>
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="Confirm Password"  v-model="form.password_confirmation" required>
                                </div>
                                <div class="single-form">
                                    <a class="btn btn-secondary btn-outline w-100" href="#">Create an account</a>
                                </div>
                            </form>
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
