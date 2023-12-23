<template>
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学生地址：{{address}}</h2> 

        </div>
</template>

<script>
// pubsub是个对象
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
            // console.log('School',this.x);
            // this.$bus.$on('hello',(data)=>{
            //   console.log('我是school组件，收到数据',data);
            // })
            this.pubId =  PubSub.subscribe('hello',(msgName,data)=>{//msgNanem消息的名字，data数据，箭头函数
              console.log(this);
              // console.log('有人发布了hello消息，hello的消息回调执行了',msgName,data)
            })
           },
           beforeDestroy(){
            // this.$bus.$off('hello')
            // unsubsrcibe取消订阅
            PubSub.unsubsrcibe( this.pubId)
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