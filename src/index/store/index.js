/**
* @author: leikai
* @create: 2020/6/18
* @describe: store输出文件
*/
import Vue from 'vue';
import Vuex from 'vuex';
// import index from './modules/index';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// export default new Vuex.Store({
//   modules: {
//     index
//   },
//   strict: debug
// })

const state = {
  breadcrumb: {}
}

const mutations = {
  changeBreadcrumb(state, value) {
    state.breadcrumb = value;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
