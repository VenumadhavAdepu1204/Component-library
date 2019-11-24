import React from 'react'
import { render, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Month from '../calendar/monthView/Month'

configure({ adapter: new Adapter() })

describe('month ', () => {
  const fullDate = new Date()
  const dateNumber = fullDate.getDate()
  const monthNumber = fullDate.getMonth()
  const yearNumber = fullDate.getFullYear()

  const app = render(<Month
    selectedDate={new Date(2018, 10, 9)}
    date={dateNumber}
    month={monthNumber}
    year={yearNumber}
    onDayClick={jest.fn()}
    disablePreviousDates={jest.fn()}
    disableAfterDates={jest.fn()}
    focusTextInput={jest.fn()}
  />)
  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
})

describe('using mount', () => {
  const fullDate = new Date()
  const dateNumber = fullDate.getDate()
  const monthNumber = fullDate.getMonth()
  const yearNumber = fullDate.getFullYear()

  const mountApp = mount(<Month
    selectedDate={new Date(2018, 10, 9)}
    date={dateNumber}
    month={monthNumber}
    year={yearNumber}
    onDayClick={jest.fn()}
    disablePreviousDates={jest.fn()}
    disableAfterDates={jest.fn()}
  />)

  test('invoke mouse enter & leave', () => {
    mountApp.find('[data-test-id="day-component"]').first().simulate('mouseenter')
    mountApp.find('[data-test-id="day-component"]').first().simulate('mouseleave')
  })
})
