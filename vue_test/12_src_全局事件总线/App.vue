<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School></School> 
        <Student></Student>
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
    }
</script>

<style>
    .app{
        background-color: red;
        padding: 5px;
    }
</style>