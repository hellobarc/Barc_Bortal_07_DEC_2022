<template>
        <div class="section overflow-hidden position-relative" id="wrapper">
            <div class="py-0 px-5">
                <div class="">
                    <div class="container-fluid">
                            <div class="section section-padding mt-n10">
                                <div class="container">
                                    <div class="row gx-10">
                                        <div class="col-lg-8">
                                            <button class="button_back">   <router-link :to="'/course-detail/'+course_id"> <i class="bi bi-arrow-left"></i>   Course Detail  </router-link></button>
                                            <div class="courses-details">


                                               <table class=" table-striped " id="module">
                                                   <tr>
                                                       <th>Topics</th>
                                                       <th>Status</th>
                                                       <th>View </th>
                                                       <th>Start Learning</th>
                                                   </tr>
                                                    <tr>
                                                       <td>Your fav Hobby</td>
                                                       <td>Pending</td>
                                                       <td> <button class="btn btn-warning"> View </button>
                                                       </td>
                                                       <td>
                                                            <button class="btn btn-success"><router-link :to="'/student/reading_study'" :class="{btn:true}">Start <i class="bi bi-arrow-right"></i></router-link></button>
                                                       </td>
                                                   </tr>
                                                       <tr>
                                                       <td>Your fav Travel</td>
                                                       <td>Completed</td>
                                                       <td> <button class="btn btn-warning"> Preview </button>
                                                       </td>
                                                       <td>
                                                            <button class="btn btn-success"><router-link :to="'/student/reading_study'" :class="{btn:true}">Revission <i class="bi bi-arrow-right"></i></router-link></button>
                                                       </td>
                                                   </tr>

                                               </table>

                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="sidebar">
                                                <div class="sidebar-widget widget-information">
                                                    <div class="info-price">
                                                        <span class="price">A2 Reading</span>
                                                    </div>
                                                    <div class="info-list">
                                                        <ul>
                                                            <li><i class="icofont-book-alt"></i> <strong>Units</strong> <span>8</span></li>
                                                            <li><i class="icofont-clock-time"></i> <strong>Duration</strong> <span>08 hr 15 mins</span></li>
                                                            <li><i class="icofont-ui-video-play"></i> <strong>Lessons</strong> <span>29</span></li>
                                                            <li><i class="icofont-bars"></i> <strong>Level</strong> <span>Foundation</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
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

    export default {
        name: "Module_page",
        components: { },
            data(){
                return {
                    page : "Module Page",
                    course_id: this.$route.params.course_id,
                    course_module: this.$route.params.module_name,
                }
            },
            created(){
                  console.log(this.course_module);
            },
            mounted() {
                console.log("CoursedetailComponent");
            },
    }
</script>

<style scoped>

#module {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#module td, #module th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#module tr:nth-child(even){background-color: #f2f2f2;}

#module tr:hover {background-color: #ddd;}

#module th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04AA6D;
  color: white;
}

.btn {
    color: #fff;
}

.btn:hover {
    color: #ddd;
}

</style>


