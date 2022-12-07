<template lang="">
    <div>
        <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="batch">Select Batch</label>
                        <select class="myselect" id="batch" v-model="selected_batch" @change="changeBatch($event)" required>
                            <option disabled value="0">Select Batch</option>
                            <option v-for="(batch,index) in all_batch" :value="batch.id" :key="index">{{batch.batch_name}}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                     <div class="form-group">
                        <label for="unit">Select Unit / Test</label>
                        <select class="myselect"  v-model="selected_unit"  @change="changeUnit($event)" required>
                            <option disabled value="0">Select Unit</option>
                            <option value="1">Unit-1</option>
                            <option value="2">Unit-2</option>
                            <option value="3">Unit-3</option>
                            <option value="4">Unit-4</option>
                            <option value="5">Unit-5</option>
                            <option value="6">Unit-6</option>
                            <option value="7">Unit-7</option>
                            <option value="8">Unit-8</option>
                        </select>
                    </div>
                </div>
                 <div class="col-md-4">
                     <div class="form-group">
                        <label for="date_attendance">Select Date</label>
                        <Datepicker class="myselect" v-model="date_of_attendance" @update:modelValue="changeDate($event)"></Datepicker>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-md-12">
                    <div v-if="student_list.length">
                        <table class="table-striped" id="module">
                        <tr>
                            <th>Student Name</th>
                            <th>Student ID</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Delay </th>
                        </tr>
                        <tr v-for="(list, index) in student_list" :key="index">
                            <td>{{list.student_name}}</td>
                            <td>{{list.student_id}}</td>
                            <td>Pending</td>
                            <td>
                                <button class="simple_sm_button" @click="makePresent(list.user_id,index)" :class="{present:list.is_present}">Present</button>
                                <button class="simple_sm_button_red" @click="makeAbsent(list.user_id,index)" :class="{absent:list.is_absent}">Absent</button>
                                <button class="simple_sm_button_yell" @click="makeTardy(list.user_id,index)" :class="{tardy:list.is_tardy}">Tardy</button>
                            </td>
                            <td>
                                <input type="number" style="width: 50px;">
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import images from '../json/images.json';
    import AdminDataService from '../services/AdminDataService';

    export default {
            data(){
               return{
                   title: "Batches Management",
                   image_data: images,
                   auth_token: this.$store.state.authToken,
                   date_of_attendance: null,
                   all_batch: [],
                   selected_batch: 0,
                   selected_unit: 0,
                   student_list: [],
               }
           },
           computed:{

           },
           methods: {
            allBatch(){
                AdminDataService.allBatch(this.auth_token)
                .then(res=>{
                    this.all_batch = res.data;
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            changeBatch(event){
                this.selected_batch = event.target.value;
                AdminDataService.studentByBatch(this.selected_batch,this.auth_token)
                .then(res=>{
                    this.student_list = res.data.student_list;
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            changeUnit(event){
                this.selected_unit = event.target.value;
            },
            changeDate(event){
                console.log("seleted");
                alert(this.selected_unit);
            },
            makePresent(student_id,index){
                const validate =   this.checkValidate();

                if(validate){
                    const payload = {batch_id:this.selected_batch, unit:this.selected_unit, date:this.date_of_attendance, student_id:student_id , status: 'present'};
                    AdminDataService.makeAttendance(payload,this.auth_token)
                    .then(res=>{
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })

                    this.student_list[index].is_present = true;
                }



            },
            makeAbsent(student_id,index){
                const validate =   this.checkValidate();

               if(validate){
                    const payload = {batch_id:this.selected_batch, unit:this.selected_unit, date:this.date_of_attendance, student_id:student_id , status: 'absent'};
                    AdminDataService.makeAttendance(payload,this.auth_token)
                    .then(res=>{
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })

                     this.student_list[index].is_absent = true;
               }

            },
            makeTardy(student_id,index){
                const validate =   this.checkValidate();

                if(validate){
                    const payload = {batch_id:this.selected_batch, unit:this.selected_unit, date:this.date_of_attendance, student_id:student_id , status: 'tardy'};
                    AdminDataService.makeAttendance(payload,this.auth_token)
                    .then(res=>{
                        console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })

                    this.student_list[index].is_tardy = true;
                }

            },
            checkValidate(){
                if(this.selected_unit==null || this.selected_unit==0 ){
                    this.$swal('Please Select a Unit');
                    return false;
                }else if(this.date_of_attendance==null){
                    this.$swal('Please Select Date');
                }else{
                    return true;
                }
            },
            handleSubmit(){

            },
           },
           mounted() {
                this.allBatch();
           },
}
</script>
<style>
    .present{
        background: rgb(1, 90, 1);
        color: #fff;
    }

    .absent{
        background: rgb(100, 3, 3);
        color: #fff;
    }

    .tardy{
        background: rgb(1, 90, 1);
        color: rgb(239, 243, 240);
    }

</style>
