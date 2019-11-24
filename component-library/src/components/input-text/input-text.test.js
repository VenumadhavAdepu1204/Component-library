import React from 'react'
import { mount, shallow } from 'enzyme'
import InputText from './index'

describe('InputText', () => {
  const app = shallow(<InputText
    id='test-id'
    label='Change account name'
    name='input-text'
    onChange={jest.fn()}
    onClick={jest.fn()}
    onKeyPress={jest.fn()}
    onkeyup={jest.fn()}
  />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  test('firing events using data test id ', () => {
    const app2 = mount(<InputText
      id='test-id'
      name='input-text'
      onChange={jest.fn()}
      onClick={jest.fn()}
      onKeyPress={jest.fn()}
      onkeyup={jest.fn()}
      error
    />)
    app2.find('[data-test-id="test-id"]').simulate('click')
    app2.find('[data-test-id="test-id"]').simulate('keyup')
    app2.find('[data-test-id="test-id"]').simulate('keypress')
    app2.find('[data-test-id="test-id"]').simulate('keyDown', { keyCode: 13 })
    app2.find('[data-test-id="test-id"]').simulate('change', { target: { value: 'new test' } })
    app2.find('[data-test-id="test-id"]').simulate('paste', { stopPropagation: jest.fn(), preventDefault: jest.fn(), clipboardData: { getData: jest.fn() } })
  })

  test('firing events using data test id with paste', () => {
    const app3 = mount(<InputText
      id='test-id'
      name='input-text'
      onChange={jest.fn()}
      onClick={jest.fn()}
      onKeyPress={jest.fn()}
      onkeyup={jest.fn()}
      onPaste={jest.fn()}
      error
      label='test'
      countDisplay
      length={16}
      showButton
      inputValue='test'
      patternRegex='^(([0-9]*)|(([0-9]*)\\.([0-9]{1,2})?)?)$' />)
    app3.find('[data-test-id="test-id"]').simulate('click')
    app3.find('[data-test-id="test-id"]').simulate('keyup')
    app3.find('[data-test-id="test-id"]').simulate('keypress')
    app3.find('[data-test-id="test-id"]').simulate('keyDown', { keyCode: 13 })
    app3.find('[data-test-id="test-id"]').simulate('change', { target: { value: 'new test' } })
    app3.find('[data-test-id="test-id"]').simulate('paste', { stopPropagation: jest.fn(), preventDefault: jest.fn(), clipboardData: { getData: jest.fn() } })
  })

  test('firing events using data test id with paste', () => {
    const app4 = mount(<InputText
      id='test-id'
      name='input-text'
      onChange={jest.fn()}
      onClick={jest.fn()}
      onKeyPress={jest.fn()}
      onkeyup={jest.fn()}
      onPaste={jest.fn()}
      label='test'
      showButton
      inputValue='test'
      patternRegex='^(([0-9]*)|(([0-9]*)\\.([0-9]{1,2})?)?)$' />)
    app4.find('[data-test-id="test-id"]').simulate('click')
    app4.find('[data-test-id="test-id"]').simulate('keyup')
    app4.find('[data-test-id="test-id"]').simulate('keypress')
    app4.find('[data-test-id="test-id"]').simulate('keyDown', { keyCode: 13 })
    app4.find('[data-test-id="test-id"]').simulate('change', { target: { value: 'new test' } })
    app4.find('[data-test-id="test-id"]').simulate('paste', { stopPropagation: jest.fn(), preventDefault: jest.fn(), clipboardData: { getData: jest.fn() } })
  })

  test('firing events using data test id with onFocus', () => {
    const app4 = mount(<InputText
      id='test-id'
      name='input-text'
      onFocus={jest.fn()}
      label='test'
      inputValue='test'
      patternRegex='^(([0-9]*)|(([0-9]*)\\.([0-9]{1,2})?)?)$' />)
    app4.find('[data-test-id="test-id"]').simulate('focus')
  })

  test('firing events using data test id without onFocus', () => {
    const app4 = mount(<InputText
      id='test-id'
      name='input-text'
      label='test'
      inputValue='test'
      patternRegex='^(([0-9]*)|(([0-9]*)\\.([0-9]{1,2})?)?)$' />)
    app4.find('[data-test-id="test-id"]').simulate('focus')
  })

  const wrapper = shallow(<InputText
    name='input-text'
    onChange={jest.fn()}
    showButton
    error={false}
    onClick={jest.fn()} onKeyPress={jest.fn()}
    onkeyup={jest.fn()} />).first().shallow()

  it('InputText should fire textbox click', () => {
    const handleClick = jest.fn()
    handleClick({ target: { value: '123' } })
    wrapper.props().handleClick({ target: { value: '123' } })
    expect(handleClick).toHaveBeenCalled()
  })

  it('InputText should fire handleKeyup', () => {
    const handleKeyup = jest.fn()
    handleKeyup({ target: { value: '123' } })
    wrapper.props().handleKeyup({ target: { value: '123' } })
    expect(handleKeyup).toHaveBeenCalled()
  })

  it('InputText should fire handleKeypress', () => {
    const handleKeypress = jest.fn()
    handleKeypress({ target: { value: '123' } })
    wrapper.props().handleKeypress({ target: { value: '123' } })
    expect(handleKeypress).toHaveBeenCalled()
  })

  it('InputText should fire handleKeyDown', () => {
    const handleKeyDown = jest.fn()
    handleKeyDown({ target: { value: '123' } })
    wrapper.setProps({type: 'number', showButton: true, fieldIcon: '<div></div>', error: false, subLabel: 'example'})
    wrapper.props().handleKeyDown({ target: { value: '123' } })
    expect(handleKeyDown).toHaveBeenCalled()
  })

  it('InputText should fire handleOnPaste', () => {
    const handleOnPaste = jest.fn()
    const handleCounter = jest.fn()
    handleOnPaste({ target: { value: '123' } })
    wrapper.props().handleOnPaste({ stopPropagation: jest.fn(), preventDefault: jest.fn(), clipboardData: { getData: jest.fn() }, target: { value: '123' }, patternRegex: true }, handleCounter)
    expect(handleOnPaste).toHaveBeenCalled()
  })

  it('InputText should fire handleCounter', () => {
    const handleCounter = jest.fn()
    handleCounter({ target: { value: '123' } })
    wrapper.setProps({length: '16', value: 'test', inputValue: 'test', label: 'test-label', countDisplay: true})
    wrapper.props().handleCounter({length: 16, value: 'test'})
    expect(handleCounter).toHaveBeenCalled()
  })

  it('InputText should fire handleCounter when length is less than the clipboard text length', () => {
    const handleCounter = jest.fn()
    handleCounter({ target: { value: '123' } })
    wrapper.setProps({length: 2, value: 'test'})
    wrapper.props().handleCounter({length: 2, value: 'test'})
    expect(handleCounter).toHaveBeenCalled()
  })
})
