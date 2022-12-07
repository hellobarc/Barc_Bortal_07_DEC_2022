<template>
<div class="footer">
        <div class="section footer-section">
            <div v-for="(pages,index) in footer_pages" :key="index">
                <div v-if="this.$route.name==pages">
                    <BigfooterComponent/>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <div class="copyright-wrapper">
                        <div class="copyright-link">
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Sitemap</a>
                            <a href="#">Security</a>
                        </div>
                        <div class="copyright-text">
                            <p>&copy; 2022 <span> BARC Portal </span> Developed <i class="icofont-heart-alt"></i> by <a href="https://hellobarc.com" target="blank">British American Resource Center</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a href="#" class="back-to-top">
                <i class="icofont-simple-up"></i>
            </a>
        </div>
</div>
</template>

<script>
import BigfooterComponent from './BigfooterComponent.vue';

import images from '../json/images.json';

export default {
    components:{BigfooterComponent},
    data(){
        return {
             image_data: images,
             footer_pages: ['login','signup','home']
        }
    }
}
</script>

<style>
    .footer{
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 999;
    }
</style>
