<template>
    <div class="title">
        <h2>学生姓名：{{name}}</h2>
        <h2 class="atguigu">学生性别：{{sex}}</h2> 
        </div>
</template>

<!-- npm view webpack versions查看版本 -->
<script>
        export default{
            name:'Student',
            data(){
                return{
                name:'张三',
                sex:'男'
                }
            }
        }
</script>

<!-- 不写lang就是默认css -->
<style lang="less" scoped>
// less可以嵌套的写
    .title{
    background-color: rebeccapurple;
    .atguigu{
        font-size: 40px;
    }
  }
</style>