<template>
    <div>
        <!-- :age="18"中的:动态绑定 ，就变成了表达式然后返回结果-->
        <Student name="李四" sex="女" :age="18"></Student>
    </div>
</template>

<script>
    // 引入School组件
    import Student from './components/Student.vue'

    export default {
        name:"APP",
        components:{
            Student,
        },
        }
</script>

<style>

</style>