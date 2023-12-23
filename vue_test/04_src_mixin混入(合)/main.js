//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 全局混合
import {hunhe,hunhe2} from '../src/mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe)
// 创建vm
new Vue({
	el:'#app',
  	render: h => h(App),	
})
