
import { getMonthName, getYearLabel, getMonthYearLabel } from '../shared/helpers'

describe('get month name method', () => {
  test('valid', () => {
    const name = getMonthName(0)
    expect(name).toBe('January')
  })
  test('invalid', () => {
    const name = getMonthName(-1)
    expect(name).toBe(undefined)
  })
})

describe('get year label method', () => {
  test('valid', () => {
    const date = new Date(2018, 2)
    const yearLabel = getYearLabel(date)
    expect(yearLabel).toBe(2018)
  })
  test('invalid', () => {
    const date = new Date(-18)
    const yearLabel = getYearLabel(date)
    expect(yearLabel).toBe(1970)
  })
})

describe('get month year label method', () => {
  test('valid', () => {
    const date = new Date(2018, 2)
    const monthYearLabel = getMonthYearLabel(date)
    expect(monthYearLabel).toBe('March 2018')
  })
  test('invalid', () => {
    const date = new Date(-18)
    const monthYearLabel = getMonthYearLabel(date)
    expect(monthYearLabel).toBe('January 1970')
  })
})
