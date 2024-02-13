import dayjs from "dayjs"

const datesHelpers = {
  // addDaysToLocalDate(localDate, daysToAdd) {
  //   const newDate = dayjs(localDate).add(daysToAdd, 'day')
  //   return newDate.format('DD MMM, YYYY')
  // },

  // getDateDifference(date1, date2) {
  //   if (!date1 || !date2) return

  //   const dayjsDate1 = dayjs(date1, 'DD MMM, YYYY').subtract(1, 'day')
  //   const dayjsDate2 = dayjs(date2, 'DD MMM, YYYY')

  //   const diff = dayjsDate2.diff(dayjsDate1, 'day')

  //   return diff
  // },

  dateFormated(date: string, format: string) {
    return dayjs(date).format(format)
  }

  // getDatesBasedOnParams(params) {
  //   const currentDate = dayjs()

  //   if (params === 'today') {
  //     return {
  //       dateFrom: currentDate.format('YYYY-MM-DD')
  //     }
  //   } else if (params === 'week') {
  //     const weekAgo = currentDate.clone().subtract(1, 'week')
  //     return {
  //       dateFrom: weekAgo.format('YYYY-MM-DD'),
  //       dateTo: currentDate.format('YYYY-MM-DD')
  //     }
  //   } else if (params === 'month') {
  //     const monthAgo = currentDate.clone().subtract(1, 'month')
  //     return {
  //       dateFrom: monthAgo.format('YYYY-MM-DD'),
  //       dateTo: currentDate.format('YYYY-MM-DD')
  //     }
  //   } else {
  //     return params
  //   }
  // },

  // getNextDay(date, format) {
  //   if (!date) return

  //   const currentDate = dayjs(date)
  //   const nextDay = currentDate.add(1, 'day').format(format)

  //   return nextDay
  // }
}

export { datesHelpers }
