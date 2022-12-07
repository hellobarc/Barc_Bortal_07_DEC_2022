<template>
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
           <SidebarModerator/>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>BARC Portal e-Learning Platform</h2>
            </div>
            <p class="lead">A complete e-Learning Solution</p>
            <hr>
             <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center">Student Management</h3>
                </div>
            </div>
               <hr>
            <div class="row">
                <div class="col-md-6">
                    <h6>Insert a Student</h6>
                    <div class="insert_table">
                         <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="single-form">
                                        <label class="label">Select a  Batch:</label>
                                        <select class="myselect" v-model="form_data.selected_batch" @change="changeBatch($event)" required>
                                            <option value="0">Select a Batch</option>
                                            <option v-for="(batch,index) in all_batch" :value="batch.id" :key="index">{{batch.batch_name}}</option>
                                        </select>
                                        <!-- eta nia presentation er por kaj korbo
                                            <select2-multiple-control v-model="myValue" :options="myOptions" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
                                            <h4>Value: {{ myValue }}</h4>
                                        -->
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                 <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Student Name:</label>
                                        <input type="text" placeholder="Student Name" v-model="form_data.student_name">
                                    </div>
                                 </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Date of Birth:</label>
                                         <Datepicker v-model="form_data.date_of_birth"></Datepicker>
                                    </div>
                                </div>
                            </div>

                             <div class="row">
                                 <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Adviser Name:</label>
                                            <select class="myselect" v-model="form_data.selected_adviser" @change="changeAdviser($event)" required>
                                            <option value="0">Select an Adviser</option>
                                            <option v-for="(adviser,index) in all_adviser" :value="adviser.id" :key="index">{{adviser.name}}</option>
                                        </select>
                                    </div>
                                 </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Date of Admission:</label>
                                         <Datepicker v-model="form_data.admission_date"></Datepicker>
                                    </div>
                                </div>
                            </div>

                               <div class="row">
                                 <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Student ID:</label>
                                            <input type="text" placeholder="Student ID" v-model="form_data.student_id">
                                    </div>
                                 </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Invoice Number:</label>
                                          <input type="text" placeholder="Invoice Number" v-model="form_data.invoice_number">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Phone :</label>
                                         <input type="text" placeholder="Phone Number" v-model="form_data.phone">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">House:</label>
                                         <input type="text" placeholder="House Number" v-model="form_data.house">
                                    </div>
                                </div>
                            </div>

                             <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Road :</label>
                                        <input type="text" placeholder="Road Number" v-model="form_data.road">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Sub City / Village / Thana :</label>
                                       <input type="text" placeholder="Road Number" v-model="form_data.subcity">
                                    </div>
                                </div>
                            </div>

                              <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">City / Dist :</label>
                                        <input type="text" placeholder="Road Number" v-model="form_data.city">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Zip Code:</label>
                                       <input type="text" placeholder="Zip Code" v-model="form_data.zip_code">
                                    </div>
                                </div>
                            </div>

                             <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Fathers Name :</label>
                                        <input type="text" placeholder="Father's Name" v-model="form_data.fathers_name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Mothers Name:</label>
                                       <input type="text" placeholder="Mother's name" v-model="form_data.mothers_name">
                                    </div>
                                </div>
                            </div>


                             <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Education :</label>
                                        <input type="text" placeholder="Eduational qualificaiton" v-model="form_data.education">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Occupation:</label>
                                       <input type="text" placeholder="Occupation / Profession" v-model="form_data.occupation">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Email :</label>
                                        <input type="email" placeholder="Email" v-model="form_data.email">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-form">
                                        <label class="label">Password:</label>
                                       <input type="text" placeholder="Password" v-model="form_data.password">
                                       <button @click.prevent="randomString">Generate</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="my-5" v-if="error!=null">
                                        <div  class="alert alert-danger" role="alert">{{error}}</div>
                                    </div>
                                     <div class="my-5" v-if="message!=null">
                                         <div class="alert alert-success" role="alert">{{message}}</div>
                                     </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="single-form text-center my-10">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <table class="table-striped" id="module">
                        <tr>
                            <th>Student Name</th>
                            <th>Batch Name</th>
                            <th>Phone</th>
                            <th>Admission Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(student,index) in all_student" :key="index">
                            <td> {{student.student_name}} </td>
                            <td> {{student.batch_name}} </td>
                            <td> {{student.phone}} </td>
                            <td> {{student.batch_start}} </td>
                            <td><div class="green_badge">Active</div></td>
                            <td>
                                <div class="small_item_holder">
                                <button class="button btn-success  button-rounded mx-1">Profile</button>
                                <button class="button btn-danger  button-rounded mx-1">Close</button>
                                </div>
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
    import SidebarModerator from './SidebarModerator.vue';
    import BasicDataService from '../services/BasicDataService';
    import AdminDataService from '../services/AdminDataService';

    import Select2MultipleControl from 'v-select2-multiple-component';

//,'phone','avatar','address','location','batch','fathers_name','mohters_name','education','occupation'

    export default {
        components: {SidebarModerator,Select2MultipleControl},
           data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   form_data:{
                    student_name:null,
                    phone:null,
                    house:null,
                    road:null,
                    avatar:null,
                    fathers_name:null,
                    mothers_name:null,
                    education:null,
                    occupation:null,
                    city:null,
                    subcity:null,
                    zip_code:null,
                    selected_batch:0,
                    selected_adviser:0,
                    admission_date:null,
                    email:null,
                    password:123456,

                   },
                   all_batch:[],
                   all_student:[],
                   all_adviser:[],
                   message:null,
                   error:null,
                    myValue: '',
            myOptions: ['op1', 'op2', 'op3']
               }
           },
           computed:{
                getStartDate(){
                   if(this.form_data.start_date!=null){
                        let cur_date =  new Date(this.form_data.start_date);
                        return `${cur_date.getDate()}-${cur_date.getMonth()}-${cur_date.getFullYear()}`;
                   }else{
                        return null;
                   }
                },
                getEndDate(){
                      if(this.form_data.end_date!=null){
                        let cur_date =  new Date(this.form_data.end_date);
                        return `${cur_date.getDate()}-${cur_date.getMonth()}-${cur_date.getFullYear()}`;
                   }else{
                        return null;
                   }
                },
           },
           methods: {
                handleSubmit(){
                    AdminDataService.addStudent(this.form_data,this.auth_token)
                    .then((response)=>{

                        this.message =  response.data.message;

                        this.allBatch();
                        this.allstudent();
                    })
                    .catch((error)=>{
                         if(error.response.status == 422) {
                            this.error =  "Duplicate or Wrong Data";
                        }
                    })
                },
                changeBatch(event){
                    this.form_data.selected_batch = event.target.value;
                },
                allBatch(){
                    AdminDataService.allBatch(this.auth_token)
                    .then((response)=>{
                        this.all_batch = response.data;
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                },
                allstudent(){
                    AdminDataService.allStudent(this.auth_token)
                    .then((response)=>{
                        this.all_student = response.data;
                    })
                    .catch(error=>{
                       console.log(error);
                    })
                },
                allAdviser(){
                    AdminDataService.allAdviser(this.auth_token)
                    .then((response)=>{
                        console.log(response);
                        this.all_adviser = response.data;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                },
                changeAdviser(event){
                    this.form_data.selected_adviser = event.target.value;
                },
                randomString(){
                    let pass = (Math.random() + 1).toString(36).substring(7);
                    this.form_data.password = pass;
                },
                  myChangeEvent(val){
                    console.log(val);
                },
                mySelectEvent({id, text}){
                    console.log({id, text})
                }
           },
           mounted() {
                this.allstudent();
                this.allBatch();
                this.allAdviser();
           },
    }
</script>

<style scoped>
button{
    border: 1px solid #ccc;
}

</style>
