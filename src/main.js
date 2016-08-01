import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './view/App'
import routerMap from './routers'

/* eslint-disable no-new */
Vue.use(VueRouter)

// var isLogin = false

let router = new VueRouter({
  hashbang: false,
  history: false,
  saveScrollPosition: false,
  transitionOnLoad: false
})

// 全局的前置钩子函数，在路由切换开始时调用
/* router.beforeEach(function () {
  if (!isLogin) {
    router.go({path: '/login'})
  } else {
    router.go({path: '/index'})
  }
  window.scrollTo(0, 0)
})

setTimeout(function () {
  isLogin = true
}, 3000) */

// 独立出来的路由
routerMap(router)

router.start(App, 'app')
