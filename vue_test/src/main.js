//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

// 引入插件
import vueResource from 'vue-resource'

// 引入vuex
import Vuex from 'vuex'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)

// 使用vuex
Vue.use(Vuex)
// 创建vm
new Vue({
	el:'#app',
  	render: h => h(App),
	// mounted(){
	// 	setTimeout(() => {
	// 		this.$destroy()//destroy销毁，这个this值得vm
	// 	}, 3000);
		
	// }
	beforeCreate(){
		Vue.prototype.$bus = this
	}	
	
})

