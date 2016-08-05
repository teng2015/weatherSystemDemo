<template>
  <router-view></router-view>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'assets/style/reset.css'
  import store from '../vuex/store.js'
  export default {
    store
  }
</script>
