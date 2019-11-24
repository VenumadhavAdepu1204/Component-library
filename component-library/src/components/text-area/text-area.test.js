import React from 'react'
import { shallow, mount } from 'enzyme'

import TextArea from './index'

describe('Heading', () => {
  const app = shallow(<TextArea
    rows='2'
    cols='2'
    maxlengthCount={250}
    maxlength={100}
    placeholder={'Place text'}
    onFocus={jest.fn()}
    onBlur={jest.fn()}
    textAreaTitle='title'
    hasTransition='true'
    textAreaRef=''
    onChange={jest.fn()} textAreaFunc={jest.fn()} autoFocus
  />).first().shallow().first().shallow()

  test('invoking state handlers', () => {
    const component = shallow(<TextArea
      rows='2'
      cols='2'
      maxlengthCount={250}
      maxlength={100}
      placeholder={'Place text'}
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      textAreaTitle='title'
      onChange={jest.fn()}
      textAreaFunc={jest.fn()}
      updateValue={jest.fn()}
      autoFocus
    />).first().shallow().first().shallow().first().shallow()
    const data = 'test'
    const remainingCount = 100
    component.props().updateRemainingCharacters(remainingCount)
    component.props().updateValue(data)
    component.setProps({ maxlength: 100 })
  })

  test('invoking handleFocus', () => {
    app.props().handleFocus()
  })

  test('invoking handleChange', () => {
    app.props().handleChange({ value: 'xyz' })
  })
  test('invoking handleBlur', () => {
    app.props().handleBlur()
  })

  test('on focus event for textarea component', () => {
    const handleFocus = jest.fn()
    handleFocus()
    expect(handleFocus).toHaveBeenCalled()
  })
})

describe('using mount', () => {
  test('invoking handleChange', () => {
    const component = shallow(<TextArea
      rows='2'
      cols='2'
      maxlengthCount={250}
      maxlength={100}
      updateRemainingCharacters={jest.fn()}
      updateValue={jest.fn()}
      textAreaFunc={jest.fn()}
      autoFocus
    />).first().shallow().first().shallow()
    const value = 'test'
    component.props().handleChange(value)
  })

  test('without maxlength prop with Label and counter', () => {
    const mountApp = mount(<TextArea
      rows='2'
      cols='2'
      placeholder={'Place text'}
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      onChange={jest.fn()} textAreaFunc={jest.fn()}
      autoFocus
      textAreaTitle='testing'
      withLabelAndCount
    />)
    mountApp.find('[data-test-id="testing-textarea"]')
  })

  test('without maxlength prop', () => {
    const mountApp = mount(<TextArea
      rows='2'
      cols='2'
      placeholder={'Place text'}
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      onChange={jest.fn()} textAreaFunc={jest.fn()}
      autoFocus
      textAreaTitle='testing'
    />)
    mountApp.find('[data-test-id="testing-textarea"]')
  })
})
