<template>
    <div class="quiz_wrapper">
        <div class="quiz_content">
            <div class="ans_options">
                <div style="display:flex; justify-items: auto;">
                    <div  class="option_item option_width" :class="getClassTrue">
                        TRUE
                    </div>
                    <div class="cross_icon" v-if="iscorrect=='incorrect' && myans=='TRUE'"><img src="/icon_images/incorrect.png" style="width: 50px;"></div>
                    <div class="cross_icon" v-if="iscorrect=='correct' && myans=='TRUE'"><img src="/icon_images/correct.png" style="width: 50px;"></div>
                </div>

                <div style="display:flex; justify-items: auto;">
                    <div  class="option_item option_width" :class="getClassFalse">
                        FALSE
                    </div>
                    <div class="cross_icon" v-if="iscorrect=='incorrect' && myans=='FALSE'"><img src="/icon_images/incorrect.png" style="width: 50px;"></div>
                    <div class="cross_icon" v-if="iscorrect=='correct' && myans=='FALSE'"><img src="/icon_images/correct.png" style="width: 50px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["iscorrect","myans"],
    data(){
            return {
                page : "True False Page",
                truestats: false ,
                falsestats: false ,
            }
        },
    computed:{
        getClassTrue(){
            this.truestats = true;
            if( this.iscorrect=="incorrect" && this.myans=="TRUE"){
                return 'incorrect_option';
            }else if(this.iscorrect=="correct" && this.myans=="TRUE"){
                return 'correct_option';
            }
        },
        getClassFalse(){
            this.falsestats = true;
            if( this.iscorrect=="incorrect" && this.myans=="FALSE"){
                return 'incorrect_option';
            }else if(this.iscorrect=="correct" && this.myans=="FALSE"){
                return 'correct_option';
            }
        },

    },
    methods:{
        showAlert() {
            // Use sweetalert2
             this.$swal('Please Select an Answer');
        },
    },
    mounted(){

    }
}
</script>

<style>
.incorrect_option{
    background-color: rgb(248, 89, 61);
    color: #fff;
}

.correct_option{
    background-color: rgb(75, 224, 82);

}

.cross_icon{
    font-size: 33px;
    margin-left: 5px;
    color: red;
}

.option_width{
    width: 78%;
}
</style>

