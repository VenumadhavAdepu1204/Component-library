import React from 'react'
import { shallow } from 'enzyme'
import Keypad from './index'
jest.mock('@anz/button', () => 'Button')

describe('Keypad', () => {
  const app = shallow(<Keypad callbackFromKeyPad={jest.fn()} callbackForKeyPadBack={jest.fn()}
    callbackForKeyPadClear={jest.fn()} />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  test('Keypad should render without crashing', () => {
    shallow(<Keypad />)
  })

  test('keypad button click', () => {
    app.find('[id="keypad-one"]').simulate('click')
    app.find('[id="keypad-two"]').simulate('click')
    app.find('[id="keypad-three"]').simulate('click')
    app.find('[id="keypad-four"]').simulate('click')
    app.find('[id="keypad-five"]').simulate('click')
    app.find('[id="keypad-six"]').simulate('click')
    app.find('[id="keypad-seven"]').simulate('click')
    app.find('[id="keypad-eight"]').simulate('click')
    app.find('[id="keypad-nine"]').simulate('click')
    app.find('[id="keypad-clear"]').simulate('click')
    app.find('[id="keypad-zero"]').simulate('click')
    app.find('[id="keypad-back"]').simulate('click')
  })
})
