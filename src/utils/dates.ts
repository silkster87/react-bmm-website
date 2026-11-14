const ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000
const monthFormatter = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  timeZone: 'UTC'
})

const getOrdinalSuffix = (day: number) => {
  const lastTwoDigits = day % 100
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return 'th'

  switch (day % 10) {
  case 1:
    return 'st'
  case 2:
    return 'nd'
  case 3:
    return 'rd'
  default:
    return 'th'
  }
}

const concertDates = [
  new Date('2026-09-26'),
  new Date('2026-10-24'),
  new Date('2026-11-28'),
  new Date('2026-12-19'),
  new Date('2027-01-23'),
  new Date('2027-02-20'),
  new Date('2027-03-20'),
  new Date('2027-04-24'),
  new Date('2027-05-22'),
  new Date('2027-06-26')
]
export const nextConcertDate = () => {
  const currentDateTime = new Date().getTime()
  const nextDate = concertDates.find(date => currentDateTime - date.getTime() <= ONE_DAY_MILLISECONDS) ?? concertDates[concertDates.length - 1]
  const day = nextDate.getUTCDate()
  const month = monthFormatter.format(nextDate)
  const year = nextDate.getUTCFullYear()

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`
}
