<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2> 
        <button @click="sendStudentName">把学生名给school组件</button> 
        </div>
</template>

<!-- npm view webpack versions查看版本 -->
<script>
        export default{
            name:'Student',
            data(){
                return{
                name:'张三',
                sex:'男',
                }
            },
            methods:{
                sendStudentName(){
                    this.$bus.$emit('hello',this.name)//emit触发
                }
            }
          
        }
</script>

<!-- 不写lang就是默认css -->
<style lang="less" scoped>
// less可以嵌套的写
    .student{
    background-color: rebeccapurple;
    padding: 5px;
    margin-top: 30px;

  }
</style>