import React from 'react'
import { mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DecadeView from '../calendar/decadeView/DecadeView'

configure({ adapter: new Adapter() })

const app = render(<DecadeView
  onYearClick={jest.fn()}
  getDecadeView={jest.fn()}
  selectedDate={new Date()}
  year={2019}
/>)
test('renders properly', () => {
  expect(app).toMatchSnapshot()
})

test('on year click', () => {
  const wrapper = mount(<DecadeView
    onYearClick={jest.fn()}
    getDecadeView={jest.fn()}
    selectedDate={new Date()}
    year={2019}
  />)
  wrapper.find('[data-test-id="date-picker-year"]').first().simulate('click')
})

test('onYearClick method should call when click on the selected year', () => {
  const wrapper = mount(<DecadeView
    onYearClick={jest.fn()}
    getDecadeView={jest.fn()}
    selectedDate={new Date()}
    year={2019}
  />)
  wrapper.find('[data-test-id="date-picker-year"]').first().simulate('click')
})
