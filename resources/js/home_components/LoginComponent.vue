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
                        <div class="images ">
                            <img :src="image_data[0].register_login"   alt="Register Login">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="register-login-form">
                        <h3 class="title">Login <span>Now</span></h3>
                        <div class="form-wrapper">
                            <div class="alert alert-danger" role="alert" v-if="login_status=='invalid'">
                                Wrong Username or Password
                            </div>
                            <form @submit.prevent="handleSignin">
                                <div class="single-form">
                                    <input type="email" placeholder="Username or Email" v-model="form.email">
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="Password" v-model="form.password">
                                </div>
                                <div class="single-form">
                                    <input type="submit" class="btn btn-primary btn-hover-dark w-100">
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
    import AuthenticationService from '../services/AuthenticationService';


    import images from '../json/images.json';

    export default {
        name:"Login",
        components: { SliderComponent, HowitworksComponent, AppdownloadComponent, TestimonialComponent, BrandlogoComponent, BlogsectionComponent, FooterComponent},
        data() {
            return {
                title:'Login',
                image_data: images,
                form: {
                    email: '',
                    password: '',
                },
                login_status: null
            }
        },
        mounted(){
           // console.log(this.$route);
        },
        methods:{
            async handleSignin(){

                const payload= {
                    email: this.form.email,
                    password: this.form.password
                }

                    AuthenticationService.authenticate(payload)
                    .then(response=>{
                          if(response.data.status=="Invalid"){
                                this.login_status =  "invalid";
                                return false;
                            }else{

                                localStorage.setItem("token",response.data.token);
                                localStorage.setItem("name",response.data.user.name);
                                localStorage.setItem("role",response.data.user.role_id);
                                localStorage.setItem("email",response.data.user.email);

                                this.$store.commit('login',response);
                             //   console.log("Your Role: "+response.data.user.role_id);

                                if( response.data.isLogin && response.data.user.role_id==5 ){
                                    this.$router.push('/student/dashboard');
                                }else if(response.data.isLogin && response.data.user.role_id==2){
                                    this.$router.push('/moderator/dashboard');
                                }else if(response.data.isLogin && response.data.user.role_id==3){
                                    this.$router.push('/content/dashboard');
                                }else if(response.data.isLogin && response.data.user.role_id==4){
                                    this.$router.push('/instructor/dashboard');
                                }

                            }
                    })
                    .catch(error=>{
                       // console.log(error);
                    })

            }
        }
    }
</script>
