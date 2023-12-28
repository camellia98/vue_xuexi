<template>
	<div class="container">
		<Catefory title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
	</Catefory>
		<Catefory title="游戏" >
			<ul>
            <li v-for="(g ,index) in games" :key="index" >{{g}}</li>
          
        	</ul>
		</Catefory>
		<Catefory title="电影" >
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</Catefory>
    </div>


<!-- avatar_url头像地址；html_url（github主页地址）；login用户的登录名 -->
</template>

<script> 
	import Catefory from './components/Category.vue'
	export default {
		name:'App',
		components:{
			Catefory
		},
		data(){
			return{
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		}
		
	}
	
</script>

<style lang="css">
	.container{
		display: flex;
		justify-content: space-around;
	}
	h3{
		text-align: center;
		background-color: orange;
	}

</style>
