<template>
  <div class="main-content">
    <ul class="area-tab">
      <li><a v-link="{ path: '/index/table' }">实时统计表</a></li>
      <li class="tab-active"><a v-link="{ path: '/index/map' }" >地图</a></li>
      <li><a href="javascirpt:void(0);">雷达图</a></li>
      <li><a href="javascirpt:void(0);">卫星云图</a></li>
    </ul>
    <div class="area">
      <router-view  transion="fade" transion-mode="out-in"></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .clearfix() {
    *zoom: 1;
    &:before,
    &:after {
      display: table;
      content: "";
    }
    &:after {
      clear: both;
    }
  }
  .main-content{
    width:auto;
    position:absolute;
    height:100%;
    left:360px;
    right:0;
    overflow:auto;
    background-color: #fff;
    border-top: 1px solid #fff;
  }
  ul.area-tab {
    .clearfix();
    li {
      height: 60px;
      float: left;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      &:last-child {
        border-top-right-radius: 3px; 
      }
    }
    a {
      display: inline-block;
      color: #666;
      height: 100%;
      line-height: 60px;
      font-size: 22px;
      padding: 0 15px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .tab-active {
    border-top: 3px solid #666!important;
    background-color: #f5f5f5;
  }
  .area {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    top: 61px;
    background-color: blue;
  }
</style>