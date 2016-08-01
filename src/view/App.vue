<template>
  <router-view></router-view>
</template>

<script>
  import store from '../vuex/store.js'
  export default {
    store
  }
</script>

<style lang="less">
  .fade-transition {
  transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
  opacity: 0;
  }
</style>