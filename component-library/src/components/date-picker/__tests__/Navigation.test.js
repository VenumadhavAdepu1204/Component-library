import React from 'react'
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Navigation from '../calendar/Navigation'

configure({ adapter: new Adapter() })

const app = render(<Navigation
  fullDate={new Date(2018, 2)}
  drillUp={jest.fn()}
  month='3'
  year='2019'
  currentDecadeValue='2009-2019'
  onLeftArrowClick={jest.fn()}
  onRightArrowClick={jest.fn()}
  view='month'
/>)

test('renders properly', () => {
  expect(app).toMatchSnapshot()
})
