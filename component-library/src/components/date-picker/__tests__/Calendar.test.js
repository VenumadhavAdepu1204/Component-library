import React from 'react'
import { mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calendar from '../calendar/Calendar'

configure({ adapter: new Adapter() })

describe('Calendar', () => {
  const app = render(<Calendar
    selectedDate={new Date(2018, 10, 4)}
    focusTextInput={jest.fn()}
    activeDate={new Date(2018, 10, 4)}
    onYearClick={jest.fn()}
    onMonthClick={jest.fn()}
    onDayClicking={jest.fn()}
    getPreviousMonth={jest.fn()}
    getPreviousYear={jest.fn()}
    getPreviousDecade={jest.fn()}
    getNextMonth={jest.fn()}
    getNextYear={jest.fn()}
    getNextDecade={jest.fn()}
    drillUp={jest.fn()}

  />)
  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  const wrapper = mount(<Calendar
    selectedDate={new Date(2018, 10, 4)}
    focusTextInput={jest.fn()}
    activeDate={new Date(2018, 10, 4)}
    onYearClick={jest.fn()}
    onMonthClick={jest.fn()}
    onDayClicking={jest.fn()}
    getPreviousMonth={jest.fn()}
    getPreviousYear={jest.fn()}
    getPreviousDecade={jest.fn()}
    getNextMonth={jest.fn()}
    getNextYear={jest.fn()}
    getNextDecade={jest.fn()}
    drillUp={jest.fn()}
  />)

  test('onDayClick invocation', () => {
    wrapper.find('[data-test-id="day-remaining"]').first().simulate('click')
  })
  test('onMonthClick invocation', () => {
    wrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    wrapper.find('[data-test-id="date-picker-month"]').first().simulate('click')
  })

  test('onYearClick invocation', () => {
    wrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    wrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    wrapper.find('[data-test-id="date-picker-year"]').first().simulate('click')
  })
})

describe('with 1 depth shallow', () => {
  const app = mount(
    <Calendar
      view='decade'
      selectedDate={new Date(2018, 10, 4)}
      focusTextInput={jest.fn()}
      activeDate={new Date(2018, 10, 4)}
      onYearClick={jest.fn()}
      onMonthClick={jest.fn()}
      onDayClicking={jest.fn()}
      getPreviousMonth={jest.fn()}
      getPreviousYear={jest.fn()}
      getPreviousDecade={jest.fn()}
      getNextMonth={jest.fn()}
      getNextYear={jest.fn()}
      getNextDecade={jest.fn()}
    />)

  test('invoking onLeftArrowClick', () => {
    app.find('[data-test-id="left-arrow"]').first().simulate('click')
    app.find('[data-test-id="navigation-label"]').first().simulate('click')
    app.find('[data-test-id="left-arrow"]').first().simulate('click')
    app.find('[data-test-id="navigation-label"]').first().simulate('click')
    app.find('[data-test-id="left-arrow"]').first().simulate('click')
  })

  test('invoking onRightArrowClick', () => {
    app.find('[data-test-id="right-arrow"]').first().simulate('click')
    app.find('[data-test-id="navigation-label"]').first().simulate('click')
    app.find('[data-test-id="right-arrow"]').first().simulate('click')
    app.find('[data-test-id="navigation-label"]').first().simulate('click')
    app.find('[data-test-id="right-arrow"]').first().simulate('click')
  })
})
