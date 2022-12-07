<template>
    <!-- Blog Start -->
<div class="section section-padding mt-n1">
    <div class="container">

        <!-- Section Title Start -->
        <div class="section-title shape-03 text-center">
            <h5 class="sub-title">Latest News</h5>
            <h2 class="main-title">Educational Tips & <span> Tricks</span></h2>
        </div>
        <!-- Section Title End -->

        <!-- Blog Wrapper Start -->
        <div class="blog-wrapper">
            <div class="row">
                <div class="col-lg-4 col-md-6">

                    <!-- Single Blog Start -->
                    <div class="single-blog">
                        <div class="blog-image">
                            <a href="blog-details-left-sidebar.html"><img :src="image_data[0].blog1_img" alt="Blog"></a>
                        </div>
                        <div class="blog-content">
                            <div class="blog-author">
                                <div class="author">
                                    <div class="author-thumb">
                                        <a href="#"><img :src="image_data[0].author1_img" alt="Author"></a>
                                    </div>
                                    <div class="author-name">
                                        <a class="name" href="#">Jason Williams</a>
                                    </div>
                                </div>
                                <div class="tag">
                                    <a href="#">Science</a>
                                </div>
                            </div>

                            <h4 class="title"><a href="blog-details-left-sidebar.html">Data Science and Machine Learning with Python - Hands On!</a></h4>

                            <div class="blog-meta">
                                <span> <i class="icofont-calendar"></i> 21 March, 2021</span>
                                <span> <i class="icofont-heart"></i> 2,568+ </span>
                            </div>

                            <a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>
                        </div>
                    </div>
                    <!-- Single Blog End -->

                </div>
                <div class="col-lg-4 col-md-6">

                    <!-- Single Blog Start -->
                    <div class="single-blog">
                        <div class="blog-image">
                            <a href="blog-details-left-sidebar.html"><img :src="image_data[0].blog2_img" alt="Blog"></a>
                        </div>
                        <div class="blog-content">
                            <div class="blog-author">
                                <div class="author">
                                    <div class="author-thumb">
                                        <a href="#"><img :src="image_data[0].author2_img" alt="Author"></a>
                                    </div>
                                    <div class="author-name">
                                        <a class="name" href="#">Pamela Foster</a>
                                    </div>
                                </div>
                                <div class="tag">
                                    <a href="#">UX Design</a>
                                </div>
                            </div>

                            <h4 class="title"><a href="blog-details-left-sidebar.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

                            <div class="blog-meta">
                                <span> <i class="icofont-calendar"></i> 21 March, 2021</span>
                                <span> <i class="icofont-heart"></i> 2,568+ </span>
                            </div>

                            <a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>
                        </div>
                    </div>
                    <!-- Single Blog End -->

                </div>
                <div class="col-lg-4 col-md-6">

                    <!-- Single Blog Start -->
                    <div class="single-blog">
                        <div class="blog-image">
                            <a href="blog-details-left-sidebar.html"><img :src="image_data[0].blog3_img" alt="Blog"></a>
                        </div>
                        <div class="blog-content">
                            <div class="blog-author">
                                <div class="author">
                                    <div class="author-thumb">
                                        <a href="#"><img :src="image_data[0].author3_img" alt="Author"></a>
                                    </div>
                                    <div class="author-name">
                                        <a class="name" href="#">Patricia Collins</a>
                                    </div>
                                </div>
                                <div class="tag">
                                    <a href="#">Business</a>
                                </div>
                            </div>

                            <h4 class="title"><a href="blog-details-left-sidebar.html">Culture & Leadership: Strategies for a Successful Business</a></h4>

                            <div class="blog-meta">
                                <span> <i class="icofont-calendar"></i> 21 March, 2021</span>
                                <span> <i class="icofont-heart"></i> 2,568+ </span>
                            </div>

                            <a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>
                        </div>
                    </div>
                    <!-- Single Blog End -->

                </div>
            </div>
        </div>
        <!-- Blog Wrapper End -->

    </div>
</div>
<!-- Blog End -->
</template>
<script>

import images from '../json/images.json';

export default {

 data() {
        return {
             title: "Blog Section",
             image_data: images
        }
    }
}
</script>
