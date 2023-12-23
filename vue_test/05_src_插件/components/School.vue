<template>
    <div>
        <h2 > 学校名称：{{name | mySlice}}</h2>
        <h2>学生地址：{{address}}</h2> 
        <button @click="test">点我测试一个hello</button>
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
            },
            methods:{
                test(){
                    this.hello()
                }
            }
        }
</script>

<style>
  
</style>