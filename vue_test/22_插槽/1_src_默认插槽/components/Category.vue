<template>
    <div class="Catefory">
        <h3>{{title}}分类</h3>
        <!-- slot插槽,定义一个插槽（挖个坑，等着组件使用者进行填充） -->
        <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
       
    </div>
</template>

<script>
    export default{
        name:'Catefory',
        props:['title']
    }
</script>

<style scoped>
    .Catefory{
        background-color: rebeccapurple;
        width: 200px;
        height: 300px;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>