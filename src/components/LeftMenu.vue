<template>
  <div class="left-menu">
    <div class="county">
      <p>禄劝县各气象点</p>
    </div>
    <div class="menu-station">
      <ul class="all-station">
        <li>
          <a href="javascript:void(0)" @click="changeCurrentStation(-1)" :class="{'active-station': getCurrentStation == -1}">全部气象站</a>
        </li>
        <li v-for="n in 20">
          <a href="javascript:void(0)" @click="changeCurrentStation($index)" :class="{'active-station': getCurrentStation == $index}">第{{ $index+1 }}气象站</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getCurrentStation } from '../vuex/getters.js'
  import { changeCurrentStation } from '../vuex/actions.js'
  export default {
    vuex: {
      getters: {
        getCurrentStation
      },
      actions: {
        changeCurrentStation
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-bgc() {
    background: #3a3633;
    background: -moz-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(93%, #3a3633), color-stop(100%, #2a2725));
    background: -webkit-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -o-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -ms-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: linear-gradient(to right, #3a3633 93%, #2a2725 100%);
  }
  // 设置滚动条
  ::-webkit-scrollbar {
    width: 14px;
    .common-bgc();
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(110,110,110);
    &:hover {
      background-color: rgb(120,120,120);
    }
  }
  .left-menu {
    width: 360px;
    top: 0;
    left: 0;
    height: 100%;
    position:absolute;
    display: block;
    .common-bgc();
  }
  .county {
    height: 60px;
    p {
      color: #FFF;
      font-size: 22px;
      text-align: center;
      line-height: 60px;
    }
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
    border-bottom: 1px solid #525151;
  }
  .menu-station {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    overflow: auto;
    .all-station {
      text-align: center;
      a {
        display: inline-block;
        color: #c0bbb7;
        width: 100%;
        height: 68px;
        line-height: 68px;
        font-size: 18px;
        &:hover {
          background-color: #505050;
          color: #fff;
        }
      }
    }
  }
  .active-station {
    background-color: #505050;
    color: #fff;
  }
</style>