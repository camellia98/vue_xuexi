<template>
        <!-- 组件的结构 -->
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2> 
        <h2>学生年龄：{{myAge+1}}</h2> 
        <button @click="updateAge">尝试修改收到的年龄</button>
        </div>
</template>

<script>
        export default{
            name:'School',
            data(){
                return{
                msg:'我是大美女',
                myAge:this.age
                }
            },
            methods:{
                updateAge(){
                    this.myAge++
                }
            },
            // prop属性，优先
            //简单声明接受
            props:['name','age','sex']

            // 接受的同时对数据进行类型限制
            /*props:{
                name:String,
                age:Number,
                sex:String
            }*/

            // 接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
            /*props:{
                name:{
                    type:String,//类型
                    required:true//required必须的
                },
                age:{
                    type:Number,
                    default:99//默认值
                },
                sex:{
                    type:String,
                    required:true
                }
            }*/

        }
</script>

<style>
    /* 组件的样式   */
    .demo{
        background-color: rebeccapurple;
    }
</style>