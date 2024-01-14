// 该文件同于创建vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)
// 求和功能相关的配置
const countOptions = {
    // 命名空间
    namespaced:true,
    actions:{
        jiaOdd(context,value) {
            console.log('actions中的jiaOdd被调用了');
           if(context.state.sum % 2){
            context.commit('JIA',value)
           }
        },
      
        jiaWait(context,value) {
            console.log('actions中的jiaWait被调用了');
            setTimeout(() => {
            context.commit('JIA',value)
          },500);
        },
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的JIA被调用了');
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的JIAN被调用了');
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}
// 人员管理功能相关的配置
const personOptions = {
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了');
            state.personList.unshift(value)
    }},
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{}

}

// 创建并暴露store
export default new Vuex.Store({
    // 模块
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})

