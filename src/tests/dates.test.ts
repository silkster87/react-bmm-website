import { nextConcertDate } from '../utils/dates'

describe('nextConcertDate', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('falls back to the last concert date when all concert dates have passed', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2027-07-01T12:00:00Z'))

    expect(nextConcertDate()).toBe('26th June 2027')
  })
})
