<template>
    <slider-component/>
    <howitworks-component/>
    <appdownload-component/>
    <testimonial-component/>
    <brandlogo-component/>
    <div class="my-10">
        &nbsp;
    </div>
 <!--   <blogsection-component/>-->
</template>

<script>
    import SliderComponent from './SliderComponent.vue';
    import HowitworksComponent from './HowitworksComponent.vue';
    import AppdownloadComponent from './AppdownloadComponent.vue';
    import TestimonialComponent from './TestimonialComponent.vue';
    import BrandlogoComponent from './BrandlogoComponent.vue';
    import BlogsectionComponent from './BlogsectionComponent.vue';
    import FooterComponent from '../common_component/FooterComponent.vue';

    export default {
        components: { SliderComponent , HowitworksComponent, AppdownloadComponent,TestimonialComponent,BrandlogoComponent,BlogsectionComponent,FooterComponent},
           mounted(){
               if(this.$store.state.isLogin==true){
                   console.log('home component=',this.$store.state.isLogin);
               }
           }
    }
</script>
