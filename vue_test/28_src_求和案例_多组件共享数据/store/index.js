// 该文件同于创建vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)
// 准备actions————用于响应组件中的动作
const actions = {
    // contest上下文
    // jia(context,value) {
    //     console.log('actions中的jia被调用了');
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     console.log('actions中的jian被调用了');
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value) {
        console.log('actions中的jiaOdd被调用了');
       if(context.state.sum % 2){
        context.commit('JIA',value)
       }
    },
    // jiaOdd(context,value) {
    //     console.log('actions中的jiaOdd被调用了');
    //     console.log('处理了一些事情--demo1');
    //     context.dispatch('demo1',value)
    // },
    // demo1(context,value){
    //     console.log('处理了一些事情--demo1');
    //     context.dispatch('demo2',value)
    // },
    // demo2(context,value){
    //     console.log('处理了一些事情--demo2');
    //     if(context.state.sum % 2){
    //             context.commit('JIA',value)
    //            }
    // },
    jiaWait(context,value) {
        console.log('actions中的jiaWait被调用了');
        setTimeout(() => {
        context.commit('JIA',value)
      },500);
    },
}

// 准备mutations————用于操作数据（state）
const mutations = {
    JIA(state,value){
        console.log('mutations中的JIA被调用了');
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了');
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log('mutations中的ADD_PERSON被调用了');
        state.personList.unshift(value)
    }
}
// 准备state————用于存储数据
const state = {
    // 当前的和
    sum:0,
    school:'尚硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

// 准备getters————用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
// 创建并暴露store
export default new Vuex.Store({
    // 重名简写
    actions,
    mutations,
    state,
    getters
})

