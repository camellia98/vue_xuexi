<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <!-- transition过度 appear出现-->
        <!-- appear = :appear='true/fales' -->
        <!-- transition-group多个元素需要过度，但每个元素需要key值 -->
        <transition-group 
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group>
       
    </div>
</template>、

<script>
// animate.css动画库
    import 'animate.css'
    export default{
        name:'Test',
        data(){
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    h1{
        background-color: rebeccapurple;
       
    }

    
</style>