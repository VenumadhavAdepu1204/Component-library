import React from 'react'
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Year from '../calendar/yearView/Year'

configure({ adapter: new Adapter() })

const app = render(<Year
  onMonthClick={jest.fn()}
  yearNumber={2019}
  selectedDate={new Date(2019, 4, 20)}
/>)
test('renders properly', () => {
  expect(app).toMatchSnapshot()
})

// test('on month click', () => {
//   // const wrapper = app.find('[data-test-id="date-picker-month"]').first()
//   // app.find(MonthName).first().simulate('click')
// })
