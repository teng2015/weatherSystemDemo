let hourOfms = 3600000
let dayOfms = hourOfms * 24

export let getToday = function () {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let beginTime = year + '-' + zero(month) + '-' + zero(day) + ' 00:00:00'
  let endTime = year + '-' + zero(month) + '-' + zero(day) + ' 24:00:00'
  return {
    type: 'date',
    beginTime: beginTime,
    endTime: endTime
  }
}

export let getYesterday = function () {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  let currentDate = Date.UTC(year, month, day)
  let offset = date.getTimezoneOffset() * 60000
  let beginDate = currentDate - dayOfms
  date.setTime(beginDate + offset)
  let beginTime = parseDate(date)
  return {
    type: 'date',
    beginTime: beginTime + ' 00:00:00',
    endTime: beginTime + ' 24:00:00'
  }
}

export let getBeforeYesterday = function () {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  let currentDate = Date.UTC(year, month, day)
  let offset = date.getTimezoneOffset() * 60000
  let beginDate = currentDate - dayOfms * 2
  date.setTime(beginDate + offset)
  let beginTime = parseDate(date)
  return {
    type: 'date',
    beginTime: beginTime + ' 00:00:00',
    endTime: beginTime + ' 24:00:00'
  }
}

export let parseDate = function (date) {
  let preYear = date.getFullYear()
  let preMonth = date.getMonth() + 1
  let preDay = date.getDate()
  let tempTime = preYear + '-' + zero(preMonth) + '-' + zero(preDay)
  return tempTime
}

export let transformDate = function (dateString) {
  let date = null
  if (dateString.length <= 5) {
    switch (dateString) {
      case '1小时':
        return {
          type: 'hours',
          time: 1
        }
      case '3小时':
        return {
          type: 'hours',
          time: 3
        }
      case '6小时':
        return {
          type: 'hours',
          time: 6
        }
      case '12小时':
        return {
          type: 'hours',
          time: 12
        }
      case '今天':
        return getToday()
      case '昨天':
        return getYesterday()
      case '前天':
        return getBeforeYesterday()
    }
  } else {
    if (dateString.length > 13) {
      let start = dateString.slice(0, 10)
      let end = dateString.slice(13)
      date = {
        type: 'date',
        beginTime: start + ' 00:00:00',
        endTime: end + ' 24:00:00'
      }
    } else if (dateString.length === 13) {
      let tempDate = new Date()
      let parseTime = parseDate(tempDate)
      let beginHour = dateString.slice(0, 5)
      let endHour = dateString.slice(8)
      let beginTime = parseTime + ' ' + beginHour + ':00'
      let endTime = parseTime + ' ' + endHour + ':00'
      date = {
        type: 'date',
        beginTime: beginTime,
        endTime: endTime
      }
    } else {
      date = {
        type: 'date',
        beginTime: dateString + ' 00:00:00',
        endTime: dateString + ' 24:00:00'
      }
    }
  }
  return date
}

export let getSecondMonthDays = function (year) {
  if (year % 4) {
    return 28
  } else {
    if (year % 100) {
      return 29
    } else {
      if (year % 400) {
        return 28
      } else {
        return 29
      }
    }
  }
}

export let zero = function (n) {
  return n < 10 ? '0' + n : n
}
