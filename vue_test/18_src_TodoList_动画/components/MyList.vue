<template>
	<ul class="todo-main">
		<transition-group name="todo" appear>
		<!-- 标签缩进 -->
		<MyItem 
			v-for="todoObj in todos"
			:key="todoObj.id" 
			:todo="todoObj" 
		/>
		</transition-group>
		
	</ul>
</template>

<script>
	
	import MyItem from './MyItem'

	export default {
		name:'MyList',
		components:{MyItem},
		//声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
		props:['todos',]
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
	
	.todo-enter-active{
        animation: atguigu 1s;
    }
/* 离开的时候激活的样式 ，离开过程中*/
/* 如果没有起名字是v，起名字就得用名字 */
    .todo-leave-active{
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0%);
        }
    }
</style>