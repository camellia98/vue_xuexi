<template>
	<!-- 对象：action动作，行为；mutation修改，加工，维护；state（是个对象）状态是数据 -->
	<!-- 函数：dispatch,commit（提交，委托），mutate加工，修改，store仓库 -->
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为：{{bigSum}}</h3>
		<h3>我在{{school}},学习{{subject}}</h3>
		<h3>Person组件的总人数是：{{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import { mapState,mapGetters, mapMutations,mapActions } from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			// 借助mapState生成计算属性，从state中读取数据（数组写法）
			... mapState('countAbout',['sum','school','subject']),
			... mapState('personAbout',['personList']),

			// 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
			...mapGetters('countAbout',{bigSum:'bigSum'})
		},
		methods: {
			// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
			...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

			// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
			...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})


		},
		mounted() {
			// console.log('Count',this)
			// const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
