<template>
  <div class="live-area">
    <div class="live-header">
      <h2>当前气象点气象实况</h2>
    </div>
    <div class="live-body">
      <div class="time-show">
        <h3>时间：2016年7月29日 14:40</h3>
      </div>
      <div class="live-show">
        <div class="left-box">
          <p>气温：32℃</p>
          <p>湿度：15%</p>
          <p>雨量：10ml</p>
        </div>
        <div class="right-box">
          <p>风向：东南风</p>
          <p>风速：3-4级</p>
          <p>气压：1012hPa</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .live-area {
    width: 580px;
    top: 0;
    left: 360px;
    height: 100%;
    position:absolute;
    display: block;
    background-color: #eee;
    border-right: 1px solid #ccc;
    text-align: center;
    h2 {
      line-height: 50px;
      letter-spacing: 3px;
      font-size: 1.5em;
      color: #666;
    }
  }
  .live-header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
    background-color: #f3f3f3;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f3f3f3), to(#e2e2e2));
    background-image: -webkit-linear-gradient(top, #f3f3f3, #e2e2e2);
    background-image: linear-gradient(to bottom, #f3f3f3, #e2e2e2);
    background-repeat: repeat-x;
    box-shadow: 0 1px 10px raba(0,0,0,0.8);
    
  }
  .live-body {
    height: 253px;
    .time-show {
      margin: 16px 0;
    }
    h3 {
      font-size: 1.3em;
    }
    .left-box {
      height: 226px;
      width: 289px;
      float: left;
    }
    .right-box {
      height: 226px;
      width: 289px;
      float: left;
    }
    p {
      font-size: 2em;
      display: block;
      margin: 18px 0;
    }
  }
</style>