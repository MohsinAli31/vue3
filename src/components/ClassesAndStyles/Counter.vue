<template>
    <h1>Counter </h1>
    <div class="counter-wrapper">
        <button @click="decrement">DECREMENT</button>

        <!-- <h2 :class="{'default': isActive, 'bg-danger':hasError}">{{ count }}</h2> -->
        <h2 :class="classObject">{{ count }}</h2>

        <button @click="increment">INCREMENT</button>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                count : 0,  // also called state
                isActive: false,
                hasError: false,
                classObject: { 
                    default: false,
                    'bg-danger': false
                }
            }
        },
        methods:{
            increment(){
                this.count ++;
                if(this.count>0 ){
                    this.isActive= true
                    this.classObject.default = true
                }
                if(this.count<0 ){
                    this.hasError= true
                    this.classObject['bg-danger'] = true
                }
                else{
                    this.hasError= false
                }
            },
            decrement(){
                this.count --;
                if(this.count>0 ){
                    this.isActive= true
                }
                else{
                    this.isActive= false
                }
                if(this.count<0 ){
                    this.hasError= true
                }
                else{
                    this.hasError= false
                }
            }
        },
    }
</script>
<style scoped>
    h1{
        margin: 20px 0;
        text-align: center;
    }
    .counter-wrapper{
        display: flex;
        justify-content: center;
        gap: 30px;
    }
    .default{
        color: green;
    }
    .bg-danger{
        background-color: red;
    }
</style>