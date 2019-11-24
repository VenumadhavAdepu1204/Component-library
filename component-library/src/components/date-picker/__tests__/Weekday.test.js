import React from 'react'
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Weekday from '../calendar/monthView/Weekday'

configure({ adapter: new Adapter() })

const app = render(<Weekday />)
test('renders properly', () => {
  expect(app).toMatchSnapshot()
})
