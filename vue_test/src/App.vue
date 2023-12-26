<template>
	<div class="container">
		<Search/>
		<List/>
    </div>


<!-- avatar_url头像地址；html_url（github主页地址）；login用户的登录名 -->
</template>

<script> 
	import Search from './components/Search.vue'
	import List from './components/List.vue'
	export default {
		name:'App',
		components:{
			Search,
			List
		}
		
	}
	
</script>

<style>
	

</style>
