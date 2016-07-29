<template>
  <div class="left-menu">
    <div class="county">
      <p>禄劝县各气象点</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .left-menu {
    width: 360px;
    top:0;
    left:0;
    height:100%;
    position:absolute;
    overflow:auto;
    display: block;
    background: #3a3633;
    background: -moz-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(93%, #3a3633), color-stop(100%, #2a2725));
    background: -webkit-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -o-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -ms-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: linear-gradient(to right, #3a3633 93%, #2a2725 100%);
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
</style>