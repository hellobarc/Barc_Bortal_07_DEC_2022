<template>

<div class="mobile-menu">
    <a class="menu-close" href="javascript:void(0)">
        <i class="icofont-close-line"></i>
    </a>

    <div class="mobile-top">
        <p><i class="flaticon-phone-call"></i> <a href="tel:9702621413">01617-302010</a></p>
        <p><i class="flaticon-email"></i> <a href="mailto:support@barcportal.com">support@barcportal.com</a></p>
    </div>

    <div class="mobile-sign-in-up">
        <ul>
           <li> <router-link to="/login">Sign In</router-link></li>
          <li> <router-link to="/signup">Sign Up</router-link></li>
        </ul>
    </div>

    <div class="mobile-menu-items">
        <ul class="nav-menu">
            <li><router-link to="/"> Home</router-link></li>
            <li><a href="https://hellobarc.com/category/articles-and-blog/" target="_blank">Blog</a></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>

    <div class="mobile-social">
        <ul class="social">
            <li><a href="#"><i class="flaticon-facebook"></i></a></li>
            <li><a href="#"><i class="flaticon-twitter"></i></a></li>
            <li><a href="#"><i class="flaticon-skype"></i></a></li>
            <li><a href="#"><i class="flaticon-instagram"></i></a></li>
        </ul>
    </div>
</div>
    <div class="overlay"></div>
</template>
<script>
export default {
    setup: () => ({
        title: 'BARC Portal is Developing with vue 3 and Laravel 8x'
    })
}
</script>
