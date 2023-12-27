<template>
    <div class="Catefory">
        <h3>{{title}}分类</h3>
        <ul>
            <li v-for="(item ,index) in listData" :key="index" >{{item}}</li>
          
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Catefory',
        props:['listData','title']
    }
</script>

<style>
    .Catefory{
        background-color: rebeccapurple;
        width: 200px;
        height: 300px;
    }
</style>