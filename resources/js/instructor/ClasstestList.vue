<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
           <SidebarInstructor/>
        </div>
        <main class="col ps-md-2 pt-2">
           <div class="row">
                <div class="col-md-12">
                    <table class="table-striped" id="module">
                        <tr>
                            <th>Date</th>
                            <th>Batch</th>
                            <th>Test Name</th>
                            <th>Module</th>
                            <th>Attendees</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(test,index) in test_list">
                            <td>
                                 {{test.test_date}}
                            </td>
                             <td>
                                {{test.batch.batch_name}}
                            </td>
                            <td>
                                 {{test.test_name}}
                            </td>
                             <td>
                                {{test.module.module_name}}
                            </td>

                             <td>
                                 {{test.studentmarks_count}}
                            </td>

                             <td>
                                <router-link :to="{name:'class-test-marks', params:{test_id:test.id}}" class="btn btn-sm btn-info">Set Marks</router-link>
                            </td>
                        </tr>
                    </table>
                </div>
           </div>
        </main>
    </div>
</div>
</template>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import SidebarInstructor from './SidebarInstructor.vue';
    import AdminDataService from '../services/AdminDataService';

    export default {
        components: {SidebarInstructor},
           data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   test_list:[],
               }
           },
           computed:{

           },
           methods: {
             classTestList(){
                    AdminDataService.classTestList(this.auth_token)
                    .then((response)=>{
                        this.test_list = response.data.class_test;
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                },
           },
           mounted() {
                this.classTestList();
           },
    }
</script>

<style scoped>


</style>
