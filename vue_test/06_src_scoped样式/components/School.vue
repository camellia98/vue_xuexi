<template>
    <div class="demo">
        <h2 >学校名称：{{name}}</h2>
        <h2>学生地址：{{address}}</h2> 
        </div>
</template>

<script>
        export default{
            name:'School',
            data(){
                return{
                name:'尚硅谷12364',
                address:'青岛'
                }
            }
        }
</script>

<style>
/* scoped局部的，作用域 */
  .demo{
    background-color: skyblue;
  }
</style>