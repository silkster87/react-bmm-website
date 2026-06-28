import { format } from 'date-fns'

const ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000

const concertDates = [
  new Date('2025-09-27'),
  new Date('2025-10-25'),
  new Date('2025-11-22'),
  new Date('2025-12-20'),
  new Date('2026-01-24'),
  new Date('2026-02-28'),
  new Date('2026-03-28'),
  new Date('2026-04-25'),
  new Date('2026-05-23'),
  new Date('2026-06-27'),
  new Date('2026-09-26')
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
