<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2> 
        <h2>当前求和为：{{ number }}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前student组件的实例(vc)</button>
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
                number:0
                }
            },
            methods:{
              add(){
                console.log('add回调被调用了');
                this.number++;
              },
                sendStudentName(){
                // 触发student组件实例身上的atguigu事件
                this.$emit('atguigu',this.name,2000,300)//emit爆发
                this.$emit('demo')//emit爆发
              },
              unbind(){
                // 解绑
                // this.$off('atguigu')//解绑一个自定义事件
                this.$off(['atguigu'])//解绑一个自定义事件
              },
              death(){
                this.$destroy()//销毁当前student组件的实例(vc)，销毁后所有student实例的自定义事件全都不奏效了
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