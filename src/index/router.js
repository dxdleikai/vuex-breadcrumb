import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'
import config from '../js/config'
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../components/LayoutTwo.vue'),
      meta: { title: 'XXX系统' },
      redirect: 'summary',
      children: [
        {
          path: 'summary',
          name: 'summary',
          meta: { 
            title: '概览',
            list: [
              {name: "XXXX系统", path: ""},
              {name: "首页", path: "/summary"}
            ]
           },
          component: () => import('../views/summary/Summary.vue')
        },
        {
          path: 'taskMgmt',
          name: 'taskMgmt',
          meta: {
            title: '时间管理' ,
            list: [
              {name: "XXX系统", path: ""},
              {name: "时间管理", path: "/taskMgmt"}
            ]
           },
          component: () => import('../views/taskMgmt/TaskMgmt.vue')
        },
        {
          path: 'videoSource',
          name: 'videoSource',
          meta: { 
            title: '用户管理',
            list: [
              {name: "XXX系统", path: ""},
              {name: "用户管理", path: ""},
              {name: "编辑人员", path: "/videoSource"}
            ]
          },
          component: () => import('../views/inputSourceMgmt/VideoSource.vue')
        },
      ]
    },
    {
      path: '/404',
      component: resolve => require(['../views/404.vue'], resolve)
    },
    {
      path: '/403',
      component: resolve => require(['../views/403.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${config.title}-${to.meta.title}`
  } else {
    document.title = `${config.title}`
  }

  if (to.meta.list) {
    let list = to.meta.list;
    store.commit('changeBreadcrumb', {list});
  }
  next()
})

export default router;