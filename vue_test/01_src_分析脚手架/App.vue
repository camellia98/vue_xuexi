<template>
  <!-- 方便方式一个<V就可以快速显示Vue -->
    <!-- 第三步 使用 -->
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 第一步 引入
    import School from './components/School.vue'   //import引入
    import Student from './components/Student.vue'
    export default {
        name:"APP",//App汇总所有有的组件

        //第二步 注册组件
        components:{
            School,
            Student
        }
    }
</script>

<style>

</style>