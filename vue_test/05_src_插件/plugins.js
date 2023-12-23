// 简写
export default {
    install(Vue,x,y,q){//方法
        console.log(x,y,q);
        Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})

        //定义全局指令
		 Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) 

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }}
        })

        // 给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = ()=>{alert('你好呀')}
    }
}
/*// 插件
const obj = {
    install(){//方法

    }
}

// 暴露,default默认暴露
export default obj*/