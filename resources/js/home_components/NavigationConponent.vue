<template>
 <!-- Header Main Start -->
            <div class="header-main-wrapper">

                <!-- Header Logo Start -->
                <div class="header-logo">
                    <router-link to="/">  <img :src="image_data[0].logo_img"></router-link>
                </div>
                <!-- Header Logo End -->

                <!-- Header Menu Start -->
                <div class="header-menu d-none d-lg-block">
                    <ul class="nav-menu">
                        <li><router-link to="/"> Home</router-link></li>
                        <li><a href="https://hellobarc.com/category/articles-and-blog/" target="_blank">Blog</a></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>

                </div>
                <!-- Header Menu End -->

                <!-- Header Sing In & Up Start -->
                <div class="header-sign-in-up d-none d-lg-block">
                    <ul>
                        <li> <router-link to="/login">Sign In</router-link></li>
                        <li> <router-link to="/signup">Sign Up</router-link></li>
                    </ul>
                </div>
                <!-- Header Sing In & Up End -->

                <!-- Header Mobile Toggle Start -->
                <div class="header-toggle d-lg-none">
                    <a class="menu-toggle"  data-bs-toggle="dropdown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                      <ul class="dropdown-menu">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/login">Sign In</router-link></li>
                            <li><router-link to="/signup">Sign Up</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                     </ul>
                </div>

            </div>
            <!-- Header Main End -->

</template>
<script>
import images from '../json/images.json';
export default {
    data() {
        return {
            title:'Navigation',
            image_data: images

        }
    }
}
</script>

<style scoped>
li {
    text-align: center;
    color: #666;
    /* border-top: 1px solid; */
    /* border-bottom: 1px solid #ccc; */
    font-weight: bold;
    padding: 5px;
}
</style>
