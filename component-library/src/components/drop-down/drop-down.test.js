import React from 'react'
import { shallow, mount } from 'enzyme'

import DropDown from './index'

const items = ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Argentina', 'Armenia', 'Aruba']

describe('DropDown', () => {
  let wrapper = shallow(<DropDown
    id='drop-down'
    name='Dropdown'
    placeholder='Search Country'
    label='Country Name'
    items={items}
    onResultSelect={jest.fn()}
    isError={false}
    value='India'
  />)

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('invoking withStateHandlers successfully', () => {
    const app = shallow(<DropDown
      id='drop-down'
      name='Dropdown'
      placeholder='Search Country'
      label='Country Name'
      items={items}
      onResultSelect={jest.fn()}
      isError={false}
      value='India'
    />)

    const wrapper = app.first().shallow()
    const state = 'isitemSelected'
    const value = false
    wrapper.props().updateState(state, value)
    wrapper.props().updateResultsHover(true)
    wrapper.props().updateResultsFocus(true)
    wrapper.props().updateSelected(-1)

    expect(wrapper).toMatchSnapshot()
  })

  test('invoking withHandlers successfully', () => {
    const app = shallow(<DropDown
      id='drop-down'
      name='Dropdown'
      placeholder='Search Country'
      label='Country Name'
      items={items}
      onResultSelect={jest.fn()}
      isError={false}
      value='India'
    />)
    const focusFirstItem = jest.fn()

    const component = app.first().shallow()
    const state = 'isitemSelected'
    const value = true
    component.props().updateState(state, value)
    component.props().onDropdownChange('test')
    component.props().handleDownArrow()
    component.props().handleUpArrow()
    component.props().handleClick(focusFirstItem)
    component.props().onKeyDown()

    component.setProps({'focused': true})
  })

  test('invoking optionHandleKey function', () => {
    const app = shallow(<DropDown
      id='drop-down'
      name='Dropdown'
      placeholder='Search Country'
      label='Country Name'
      items={items}
      onResultSelect={jest.fn()}
      isError={false}
      value='India'
    />)

    const component = app.first().shallow()
    const handleClick = jest.fn()
    const handleDownArrow = jest.fn()
    const handleUpArrow = jest.fn()
    const focusFirstItem = jest.fn()

    component.props().optionHandleKey({keyCode: 13, preventDefault: jest.fn()}, handleClick, focusFirstItem, handleDownArrow, handleUpArrow)
    component.props().optionHandleKey({keyCode: 40, preventDefault: jest.fn()}, handleClick, focusFirstItem, handleDownArrow, handleUpArrow)
    component.props().optionHandleKey({keyCode: 38, preventDefault: jest.fn()}, handleClick, focusFirstItem, handleDownArrow, handleUpArrow)
    component.props().optionHandleKey({keyCode: 3, preventDefault: jest.fn()}, handleClick, focusFirstItem, handleDownArrow, handleUpArrow)
  })

  test('invoking accessibilityHandleKeyDown function', () => {
    const app = shallow(<DropDown
      id='drop-down'
      name='Dropdown'
      placeholder='Search Country'
      label='Country Name'
      items={items}
      onResultSelect={jest.fn()}
      isError={false}
      value='India'
    />)

    const component = app.first().shallow()
    const onHandleClick = jest.fn()
    const handleClick = jest.fn()
    const onKeyDown = jest.fn()
    const focusFirstItem = jest.fn()

    component.props().accessibilityHandleKeyDown({keyCode: 13, preventDefault: jest.fn()}, onHandleClick, handleClick, onKeyDown, focusFirstItem)

    component.setProps({ selected: 1 })
    component.props().accessibilityHandleKeyDown({keyCode: 13, preventDefault: jest.fn()}, onHandleClick, handleClick, onKeyDown, focusFirstItem)

    component.setProps({ focused: false })
    component.props().accessibilityHandleKeyDown({keyCode: 40, preventDefault: jest.fn()}, onHandleClick, handleClick, onKeyDown, focusFirstItem)
    component.props().accessibilityHandleKeyDown({keyCode: 38, preventDefault: jest.fn()}, onHandleClick, handleClick, onKeyDown, focusFirstItem)

    component.props().accessibilityHandleKeyDown({keyCode: 3, preventDefault: jest.fn()}, onHandleClick, handleClick, onKeyDown, focusFirstItem)

    component.setProps({ isitemSelected: true })
    component.props().accessibilityHandleKeyDown({keyCode: 40, preventDefault: jest.fn()}, onHandleClick, handleClick, onKeyDown, focusFirstItem)
  })

  test('Click on Dropdown up arrow', () => {
    const wrapper = mount(<DropDown id='0' name='Dropdown' placeholder='Search Country' label='Country Name' items={items} onResultSelect={jest.fn()} isError={false} value='India' />)
    wrapper.find('[data-test-id="drop-down-0-close"]').first().simulate('click')
  })

  test('Invoking onHandleClick method when user select the item from dropdown list', () => {
    const onHandleClick = jest.fn()
    onHandleClick()
    const wrapper = mount(<DropDown id='0' name='Dropdown' placeholder='Search Country' label='Country Name' items={items} onResultSelect={jest.fn()} isError={false} value='India' />)
    wrapper.find('[data-test-id="drop-down-0-field"]').first().simulate('click')
    wrapper.find('[data-test-id="drop-down-0-result-0"]').first().simulate('click')
    expect(onHandleClick).toHaveBeenCalled()
  })

  test('Invoking methods for dropdown list', () => {
    const updateResultsHover = jest.fn()
    updateResultsHover()
    const wrapper = mount(<DropDown id='0' name='Dropdown' placeholder='Search Country' label='Country Name' items={items} onResultSelect={jest.fn()} isError={false} value='India' />)
    wrapper.find('[data-test-id="drop-down-0-field"]').first().simulate('click')
    wrapper.find('[data-test-id="drop-down-0-results"]').first().simulate('mouseenter')
    wrapper.find('[data-test-id="drop-down-0-results"]').first().simulate('mouseleave')
    expect(updateResultsHover).toHaveBeenCalled()
  })

  test('Invoking methods for dropdown list item', () => {
    const updateResultsFocus = jest.fn()
    updateResultsFocus()
    const wrapper = mount(<DropDown id='0' name='Dropdown' placeholder='Search Country' label='Country Name' items={items} onResultSelect={jest.fn()} isError={false} value='India' />)
    wrapper.find('[data-test-id="drop-down-0-field"]').first().simulate('click')
    wrapper.find('[data-test-id="drop-down-0-result-0"]').first().simulate('focus')
    wrapper.find('[data-test-id="drop-down-0-result-0"]').first().simulate('blur')
    wrapper.find('[data-test-id="drop-down-0-result-0"]').first().simulate('keydown', {keyCode: 40})
    expect(updateResultsFocus).toHaveBeenCalled()
  })

  test('Invoking accessibilityHandleKeyDown method on Key Down', () => {
    const accessibilityHandleKeyDown = jest.fn()
    accessibilityHandleKeyDown()
    const wrapper = mount(<DropDown id='0' name='Dropdown' placeholder='Search Country' label='Country Name' items={items} onResultSelect={jest.fn()} isError={false} value='India' />)
    wrapper.find('[data-test-id="drop-down-0-field"]').first().simulate('keyDown', {keyCode: 13})
    wrapper.find('[data-test-id="drop-down-0-field"]').first().simulate('keyDown', {keyCode: 40})
    expect(accessibilityHandleKeyDown).toHaveBeenCalled()
  })
})
