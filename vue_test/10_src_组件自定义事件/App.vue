<template>
    <div class="app">
        <h1>{{ msg }} 学生的姓名：{{ studentName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
        <School :gteSchoolName="gteSchoolName"></School> 

        <!-- 给student实例对象vc绑定了atguigu -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用@或v-on)   -->
        <Student v-on:atguigu="gteStudentName" @demo="m1"></Student>
        <!-- <Student @atguigu.once="gteStudentName"></Student> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法：使用ref)   -->
        <Student ref="student" @click.native="show"></Student>
        <!-- native 原生的本来的-->
    </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:"APP",
        data(){
            return{
                msg:'你好呀',
                studentName:''
            }
        },
        components:{
            Student,
            School
        },
        methods:{
            gteSchoolName(name){
                console.log('App收到了学校名：',name);
            },
            gteStudentName(name,...params){
                console.log('App收到了学生名：',name,params);
                this.studentName = name
            },
            m1(){
                console.log('调用demo事件 ');
            },
            show(){
                alert(123)
            }
        },
        mounted(){
            this.$refs.student.$on('atguigu',this.gteStudentName)
            // this.$refs.student.$on('atguigu',(name,...params)=>{//原本的this是student对象，加上箭头函数就是app对象
            //     console.log('App收到了学生名：',name,params)
            //     this.studentName = name
            // })//绑定自定义事件
            // this.$refs.student.$once('atguigu',this.gteStudentName)//绑定自定义事件（一次性）
            // setTimeout(()=>{
            //     this.$refs.student.$on('atguigu',this.gteStudentName)
            // },3000)
        }
        }
</script>

<style>
    .app{
        background-color: red;
        padding: 5px;
    }
</style>