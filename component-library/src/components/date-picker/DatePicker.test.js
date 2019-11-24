import React from 'react'
import { mount, configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DatePicker from './index'

configure({ adapter: new Adapter() })

describe('DatePicker', () => {
  const app = render(
    <DatePicker
      label='date-picker'
      id='test'
      disablePreviousDates={new Date(2018, 10, 1)}
      disableAfterDates={new Date(2018, 10, 11)}
    />
  )

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
})

describe('Date picker methods test', () => {
  it('show calendar on click on calendar icon', () => {
    const app = mount(
      <DatePicker
        label='date-picker'
        id='test-2'
        disablePreviousDates={new Date(2018, 10, 1)}
        disableAfterDates={new Date(2018, 10, 11)}
        placeholder='DD/MM/YYYY'
      />)
    app.find('[data-test-id="datepicker-icon"]').first().simulate('click')
    const calendar = app.exists('[data-test-id="date-picker-calendar"]')
    expect(calendar).toEqual(true)
    app.unmount()
  })

  it('Click on left arrow and test the getNextMonth, getNextYear and getNextDecade methdos', () => {
    const appWrapper = mount(
      <DatePicker
        label='date-picker'
        id='test-2'
        placeholder='DD/MM/YYYY'
      />)
    appWrapper.find('[data-test-id="datepicker-icon"]').first().simulate('click')
    const calendar = appWrapper.exists('[data-test-id="date-picker-calendar"]')
    expect(calendar).toEqual(true)
    appWrapper.find('[data-test-id="right-arrow"]').first().simulate('click')
    appWrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    appWrapper.find('[data-test-id="right-arrow"]').first().simulate('click')
    appWrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    appWrapper.find('[data-test-id="right-arrow"]').first().simulate('click')
  })

  it('Click on left arrow and test the getPreviousMonth, getPerviousYear and getPreviousDecade methdos', () => {
    const testWrapper = mount(
      <DatePicker
        label='date-picker'
        id='test-2'
        placeholder='DD/MM/YYYY'
      />)
    testWrapper.find('[data-test-id="datepicker-icon"]').first().simulate('click')
    const calendar = testWrapper.exists('[data-test-id="date-picker-calendar"]')
    expect(calendar).toEqual(true)
    testWrapper.find('[data-test-id="left-arrow"]').first().simulate('click')
    testWrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    testWrapper.find('[data-test-id="left-arrow"]').first().simulate('click')
    testWrapper.find('[data-test-id="navigation-label"]').first().simulate('click')
    testWrapper.find('[data-test-id="left-arrow"]').first().simulate('click')
  })

  it('click on Year and navigation label', () => {
    const testApp = mount(
      <DatePicker
        label='date-picker'
        id='test-2'
        placeholder='DD/MM/YYYY'
      />)
    testApp.find('[data-test-id="datepicker-icon"]').first().simulate('click')
    const calendar = testApp.exists('[data-test-id="date-picker-calendar"]')
    expect(calendar).toEqual(true)
    testApp.find('[data-test-id="navigation-label"]').first().simulate('click')
    testApp.find('[data-test-id="navigation-label"]').first().simulate('click')
    testApp.find('[data-test-id="date-picker-year"]').first().simulate('click')
    testApp.unmount()
  })

  it('click on month and navigation label', () => {
    const mountApp = mount(
      <DatePicker
        label='date-picker'
        id='test-2'
        placeholder='DD/MM/YYYY'
      />)
    mountApp.find('[data-test-id="datepicker-icon"]').first().simulate('click')
    const calendar = mountApp.exists('[data-test-id="date-picker-calendar"]')
    expect(calendar).toEqual(true)
    mountApp.find('[data-test-id="navigation-label"]').first().simulate('click')
    mountApp.find('[data-test-id="date-picker-month"]').first().simulate('click')
    mountApp.unmount()
  })

  // it('click on Day and navigation label', () => {
  //   const wrapper = mount(
  //     <DatePicker
  //       label='date-picker'
  //       id='test-2'
  //       placeholder='DD/MM/YYYY'
  //     />)
  //   wrapper.find('[data-test-id="datepicker-icon"]').first().simulate('click')
  //   const calendar = wrapper.exists('[data-test-id="date-picker-calendar"]')
  //   expect(calendar).toEqual(true)
  //   wrapper.find('[data-test-id="day-remaining"]').first().simulate('click')
  //   wrapper.unmount()
  // })
})
