import { format } from 'date-fns'

const ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000

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

  let filteredDates = [...concertDates]

  for (let i = 0; i < concertDates.length; i++) {
    if (currentDateTime - concertDates[i].getTime() > ONE_DAY_MILLISECONDS) {
      filteredDates = filteredDates.filter(date => date.getTime() !== concertDates[i].getTime())
    }
  }

  if (filteredDates.length === 0) return 'TBC'

  return format(filteredDates[0], 'iiii do MMMM') || ''
}
