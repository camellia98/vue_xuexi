<template>
    <div>
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
        components:{
            Student,
            School
        },
        }
</script>

<style>

</style>