//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})

// const d = new Demo()


// prototype原型

// 创建vm
new Vue({
	el:'#app',
  	render: h => h(App),
	beforeCreate(){
		// Vue.prototype.x= this
		Vue.prototype.$bus = this //安装全局事件总线 
	}
	// mounted(){
	// 	setTimeout(() => {
	// 		this.$destroy()//destroy销毁，这个this值得vm
	// 	}, 3000);
		
	// }	
})
