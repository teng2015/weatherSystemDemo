let hourOfms = 3600000
let dayOfms = hourOfms * 24

export let getToday = function (year, month, day, hour) {
  let currentDate = Date.UTC(year, month, day, hour)
  let hours = 0
  let preDate = 0
  let tempDate = new Date()
  let offset = tempDate.getTimezoneOffset() * 60000
  if (hour >= 21) {
    hours = hour - 20
    preDate = currentDate - hourOfms * hours
  } else if (hour < 21) {
    hours = 4 + hour
    preDate = currentDate - hourOfms * hours
  }
  tempDate.setTime(preDate + offset)
  let beginTime = parseDate(tempDate)
  let endTime = year + '-' + zero((month + 1)) + '-' + zero(day) + ' ' + zero(hour) + ':00:00'
  console.log(beginTime, endTime)
}

export let getYesterday = function (year, month, day, hour) {
  let currentDate = Date.UTC(year, month, day)
  let tempDate = new Date()
  let offset = tempDate.getTimezoneOffset() * 60000
  let preDate = 0
  let nextDate = 0
  if (hour >= 20) {
    getToday(year, month, day, 20)
  } else if (hour < 20) {
    preDate = currentDate - dayOfms - hourOfms * 4
    nextDate = currentDate - hourOfms * 4
  }
  tempDate.setTime(preDate + offset)
  let beginTime = parseDate(tempDate)
  tempDate.setTime(nextDate + offset)
  let endTime = parseDate(tempDate)
  console.log(beginTime, endTime)
}

export let getBeforeYesterday = function (year, month, day, hour) {
  let currentDate = Date.UTC(year, month, day)
  let tempDate = new Date()
  let offset = tempDate.getTimezoneOffset() * 60000
  let preDate = currentDate - dayOfms * 2 - hourOfms * 4
  let nextDate = currentDate - dayOfms - hourOfms * 4
  tempDate.setTime(preDate + offset)
  let beginTime = parseDate(tempDate)
  tempDate.setTime(nextDate + offset)
  let endTime = parseDate(tempDate)
  console.log(beginTime, endTime)
}

export let parseDate = function (date) {
  let preYear = date.getFullYear()
  let preMonth = date.getMonth() + 1
  let preDay = date.getDate()
  let preHour = date.getHours()
  let tempTime = preYear + '-' + zero(preMonth) + '-' + zero(preDay) + ' ' + zero(preHour) + ':00:00'
  return tempTime
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
