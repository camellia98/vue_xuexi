<template>
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学生地址：{{address}}</h2> 

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
           mounted(){
            console.log('School',this.x);
            this.$bus.$on('hello',(data)=>{
              console.log('我是school组件，收到数据',data);
            })
           },
           beforeDestroy(){
            this.$bus.$off('hello')
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