<template>
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学生地址：{{address}}</h2> 
        <button @click="sendSchoolName">把学校名给App</button>
        </div>
</template>

<script>
        export default{
            name:'School',
            props:['gteSchoolName'],
            data(){
                return{
                name:'尚硅谷',
                address:'青岛'
                }
            },
            methods:{
              sendSchoolName(){
                this.gteSchoolName(this.name)
              }
            }
        }
</script>

<style>
/* scoped局部的，作用域 */
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>