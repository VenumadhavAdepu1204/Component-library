import React from 'react'
import { render, mount, configure } from 'enzyme'
import Day from '../calendar/monthView/Day'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const mountApp = mount(<Day
  key={1}
  fullDate={new Date(2018, 10, 5)}
  onClick={jest.fn()}
  selectedDate={new Date(2018, 10, 7)}
  selected={false}
  hovering={false}
  onMouseEnter={jest.fn()}
  onMouseLeave={jest.fn()}
  focusTextInput={jest.fn()}
/>)

describe('Day ', () => {
  const fullDate = new Date(2018, 10, 5)
  const app = render(<Day
    key={1}
    fullDate={fullDate}
    onClick={jest.fn()}
    selectedDate={new Date(2018, 10, 7)}
    selected={false}
    hovering={false}
    onMouseEnter={jest.fn()}
    onMouseLeave={jest.fn()}
    disablePreviousDates={new Date(2018, 9, 7)}
    disableAfterDates={new Date(2018, 11, 7)}
    focusTextInput={jest.fn()}
  />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  test('when a day is selected ', () => {
    mountApp.setProps({ hovering: false, selected: true, selectedDate: new Date(2018, 10, 5) })
    mountApp.find('[data-test-id="day-selected"]').at(0).simulate('mouseenter')
    mountApp.find('[data-test-id="day-selected"]').at(0).simulate('mouseleave')
    mountApp.find('[data-test-id="day-selected"]').at(0).simulate('click')
  })

  test('when a day is hovered ', () => {
    mountApp.setProps({ selected: false, hovering: true })
    mountApp.find('[data-test-id="day-hovering"]').at(0).simulate('mouseenter')
    mountApp.find('[data-test-id="day-hovering"]').at(0).simulate('click')
  })

  test('disable before and after', () => {
    mountApp.setProps({ fullDate: new Date(new Date(2018, 9, 6)) })
    mountApp.setProps({ fullDate: new Date(new Date(2018, 11, 8)) })
  })
})

describe('using mount', () => {
  test('for remaining days', () => {
    const wrapper = mount(<Day
      key={1}
      fullDate={new Date(2019, 4, 10)}
      onClick={jest.fn()}
      selectedDate={null}
      selected={false}
      hovering={false}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      focusTextInput={jest.fn()}
    />)
    wrapper.find('[data-test-id="day-remaining"]').at(0).simulate('mouseenter')
    wrapper.find('[data-test-id="day-remaining"]').at(0).simulate('mouseleave')
    wrapper.find('[data-test-id="day-remaining"]').at(0).simulate('click')
  })

  test('on current date', () => {
    const wrapper = mount(<Day
      key={1}
      fullDate={new Date()}
      onClick={jest.fn()}
      selectedDate={null}
      selected={false}
      hovering={false}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      focusTextInput={jest.fn()}
    />)
    wrapper.find('[data-test-id="day-current"]').at(0).simulate('mouseenter')
    wrapper.find('[data-test-id="day-current"]').at(0).simulate('mouseleave')
    wrapper.find('[data-test-id="day-current"]').at(0).simulate('click')
  })
})
