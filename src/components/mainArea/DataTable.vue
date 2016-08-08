<template>
  <div class="data-table">
    <date-pick></date-pick>
  </div>
</template>

<script>
  import DatePick from '../datepick/DatePick.vue'
  export default {
    components: {
      DatePick
    }
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
  .data-table {
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
  
</style>