export let selectTimeData = (function () {
  let allName = ['1小时', '3小时', '6小时', '12小时', '今天', '昨天', '前天', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '一季度', '二季度', '三季度', '四季度', '上半年', '下半年', '全年']
  let len = allName.length
  let data = []
  let temp = null
  for (var i = 0; i < len; i++) {
    temp = {
      name: allName[i],
      selected: false
    }
    data.push(temp)
  }
  return data
})()
