<template>
    <div class="quiz_wrapper">

             <div class="question_count">
                <QuestionCount text="Drag and Drop" :index="index" :quizz_count="quizz_count"></QuestionCount>
            </div>

           <div class="quiz_content">
                <div class="quiz_question">
                   What is the correct word to be placed in correct way.
                </div>
                <div class="ans_options">
                    <!--
                    <div id="div1" @drop="drop($event)" @dragover="allowDrop($event)"></div>
                    <br>
                    -->
                    Drag here ..1 <input type="text" placeholder="Drag here" class="form-control">
                    <br>
                     Drag here ..2 <input type="text" placeholder="Drag here" class="form-control">
                    <br>
                    <p id="drag1" draggable="true" @dragstart="drag($event)" style="font-weight: bold">Draggable 1</p>
                    <p id="drag2" draggable="true" @dragstart="drag($event)" style="font-weight: bold">Draggable 2</p>


                </div>

                  <SubmitButton :quizz_count="quizz_count" :index="index"  @ClickPrev="handleClickPrev"  @ClickNext="handleClickNext" @ClickComplete="handleComplete"/>


           </div>
    </div>
</template>

<script>

import QuestionCount from './QuestionCount.vue';
import SubmitButton from './parts/SubmitButton.vue';

export default {
    props: ["quizz_count", "index", "current_index"],
    components:{QuestionCount,SubmitButton},
    data(){
            return {
                page : "Reading Page",
                multiple_items: {item1:false,item2:false,item3:false},
                quiz_data: null,
                selected_ans: null
            }
        },
    methods:{
         allowDrop(ev) {
            ev.preventDefault();
          },

        drag(ev) {
         ev.dataTransfer.setData("Text", ev.target.innerText);
         console.log(ev.target);
        },

        drop(ev) {
            var data = ev.dataTransfer.getData("Text");
             ev.target.appendChild(document.getElementById(data));
             ev.preventDefault();
        },

        handleClickNext() {
            console.log("Next button clicked in Drag and drop component");
            this.$emit("ClickNextButton");
        },
        handleClickPrev() {
            console.log("Prev button clicked in Drag and drop component");
            this.$emit("ClickPrevButton");
        },
        handleComplete(){
            this.$emit("ClickCompleteButton");
        },
        handleSubmit(){
            alert("Wait eta kortesi . It will be amazing");
        }
    }
}
</script>

<style>

#div1 {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

</style>



<!--https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_draggable-->
