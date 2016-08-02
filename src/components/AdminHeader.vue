<template>
  <header>
    <div class="header-content clearfix">
      <h1 class="pull-left">农业气象服务管理系统</h1>
      <span class="pull-right">admin<a href="javascript:void(0);">退出</a></span>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  header {
    width: 100%;
    height: 60px;
    background-color: #f3f3f3;
    background-image: -moz-linear-gradient(top, #f3f3f3, #e2e2e2);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f3f3f3), to(#e2e2e2));
    background-image: -webkit-linear-gradient(top, #f3f3f3, #e2e2e2);
    background-image: -o-linear-gradient(top, #f3f3f3, #e2e2e2);
    background-image: linear-gradient(to bottom, #f3f3f3, #e2e2e2);
    background-repeat: repeat-x;
  }
  .header-content {
    color: #666;
    width: 980px;
    margin: 0 auto;
    line-height: 60px;
    h1 {
      font-size: 28px;
      line-height: 60px;
    }
    span {
      font-size: 24px;
    }
    a {
      color: #666;
      padding-left: 12px;
      &:hover {
        color: blue;
      }
    }
  }
</style>