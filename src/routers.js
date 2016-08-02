'use strict'

export default function (router) {
  router.map({
    '/index': {// index开始
      component: require('./view/App.vue'),
      subRoutes: {
        '/': {
          component: require('./view/Index.vue'),
          subRoutes: {
            '/': {
              component: require('./view/MainArea.vue'),
              subRoutes: {
                '/': {
                  component: require('components/mainArea/DataTable.vue')
                },
                'table': {
                  component: require('components/mainArea/DataTable.vue')
                },
                'map': {
                  component: require('components/mainArea/GoogleMap.vue')
                }
              }
            }
          }
        }
      }
    }, // index 结束
    '/login': {
      component: require('./view/Login.vue')
    }
  })

  router.redirect({
    '/': '/index',
    '*': '/index'
  })
}
