<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <!-- transition过度 appear出现-->
        <!-- appear = :appear='true/fales' -->
        <!-- transition-group和ul差不多 -->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group>
       
    </div>
</template>、

<script>
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

    /* 进入的起点和离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%)
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5S linear;
    }
   /* 进入的终点和离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0)
    }
</style>