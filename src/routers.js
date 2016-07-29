'use strict'

export default function (router) {
  router.map({
    '/index': {
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
  })

  router.redirect({
    '/': '/index',
    '*': '/index'
  })
}
