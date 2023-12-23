<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <!-- transition过度 appear出现-->
        <!-- appear = :appear='true/fales' -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
       
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
/* 进入的时候激活的样式，进入过程中 */
    .hello-enter-active{
        animation: atguigu 1s;
    }
/* 离开的时候激活的样式 ，离开过程中*/
/* 如果没有起名字是v，起名字就得用名字 */
    .hello-leave-active{
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }
</style>