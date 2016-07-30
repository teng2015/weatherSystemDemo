import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import routerMap from './routers'

/* eslint-disable no-new */
Vue.use(VueRouter)

let router = new VueRouter({
  hashbang: false,
  history: false,
  saveScrollPosition: false,
  transitionOnLoad: false
})

// 全局的前置钩子函数，在路由切换开始时调用
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// 独立出来的路由
routerMap(router)

router.start(App, 'app')
