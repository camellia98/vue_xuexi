<template>
        <!-- 组件的结构 -->
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        </div>
</template>

<script>
    //组件交互相关的代码（数据、方法等的）
        export default{
            name:'Student',//组件名称
            data(){
                return{
                name:'张三',//数据名
                age:18
                }
            }
        }
</script>
 <!-- 没有样式就可以不用写
<style>
</style> -->