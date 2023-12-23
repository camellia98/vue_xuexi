<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2> 
        </div>
</template>

<script>
// 混合不破坏原本的代码
// 生命周期不以任何为主，都实现
  // 引入一个hunhe
  import {hunhe,hunhe2} from '../mixin'
        export default{
            name:'Student',
            data(){
                return{
                name:'张三',
                sex:'男'
                }
            },
            mixins:[hunhe,hunhe2]
        }
</script>

<style>
  
</style>