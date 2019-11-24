import React from 'react'
import { shallow, mount } from 'enzyme'

import AutoComplete from './index'

const resultsList =
[{
  'codeType': 'ICNT',
  'cmCode': 'AF',
  'codeDescription': 'Afghanistan'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AX',
  'codeDescription': 'Aland Islands'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AL',
  'codeDescription': 'Albania'
},
{
  'codeType': 'ICNT',
  'cmCode': 'DZ',
  'codeDescription': 'Algeria'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AS',
  'codeDescription': 'American Samoa'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AD',
  'codeDescription': 'Andorra'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AO',
  'codeDescription': 'Angola'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AI',
  'codeDescription': 'Anguilla'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AQ',
  'codeDescription': 'Antarctica'
},
{
  'codeType': 'ICNT',
  'cmCode': 'AG',
  'codeDescription': 'Antigua And Barbuda'
}]

describe('AutoComplete', () => {
  let wrapper = shallow(<AutoComplete
    id='auto-complete'
    name='auto-complete'
    placeholder='Test Autocomplete'
    label='Country Name'
    results={resultsList}
    onResultSelect={jest.fn()}
    isPopulated={false}
    updateIsPopulated={jest.fn()}
    onInputTextChange={jest.fn()}
    value='India'
    updateResults={jest.fn()}
    clearField={jest.fn()}
  />)

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('invoking withStateHandlers successfully', () => {
    const app = shallow(<AutoComplete id='auto-complete' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    const wrapper = app.first().shallow()
    const state = 'selectedLabel'
    const value = false
    wrapper.props().updateState(state, value)
    wrapper.props().updateFocus(true)
    wrapper.props().updateResultsHover(true)
    wrapper.props().updateResultsFocus(true)
    wrapper.props().updateSelected(-1)

    expect(wrapper).toMatchSnapshot()
  })

  test('invoking withHandlers successfully', () => {
    const app = shallow(<AutoComplete id='auto-complete' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    const component = app.first().shallow()

    const value = 'au'
    component.props().handleChange(value)
    component.props().onHandleClick()
    component.props().onkeyDown()

    const selected = 0
    const onHandleClick = jest.fn()
    const handleClick = jest.fn()
    const updateSelected = jest.fn()
    const handleArrowDown = jest.fn()
    const handleArrowUp = jest.fn()
    const handleTab = jest.fn()
    const handleEnter = jest.fn()
    const onkeyDown = jest.fn()
    const selectedLabel = false
    const isPopulated = false

    component.props().fieldIcon(isPopulated, 'id')
    component.props().checkInputValue(resultsList, -1, 'india')
    component.props().handleArrowDown(selected, updateSelected, resultsList)
    component.props().handleArrowUp(selected, updateSelected, resultsList)
    component.props().handleTab(selected, resultsList, handleClick)
    component.props().handleEnter(selected, resultsList, handleClick)
    const eve = {
      'keyCode': 13
    }
    component.props().accessibleAutocompleteKeyDownHandler(eve, selected, updateSelected, resultsList, handleClick, isPopulated, onHandleClick, onkeyDown, selectedLabel, handleArrowDown, handleArrowUp, handleTab, handleEnter)

    const eve1 = {
      'keyCode': 9
    }
    component.props().accessibleAutocompleteKeyDownHandler(eve1, selected, updateSelected, resultsList, handleClick, isPopulated, onHandleClick, onkeyDown, selectedLabel, handleArrowDown, handleArrowUp, handleTab, handleEnter)

    const eve2 = {
      'keyCode': 40
    }
    component.props().accessibleAutocompleteKeyDownHandler(eve2, selected, updateSelected, resultsList, handleClick, isPopulated, onHandleClick, onkeyDown, selectedLabel, handleArrowDown, handleArrowUp, handleTab, handleEnter)

    const eve3 = {
      'keyCode': 38
    }
    component.props().accessibleAutocompleteKeyDownHandler(eve3, selected, updateSelected, resultsList, handleClick, isPopulated, onHandleClick, onkeyDown, selectedLabel, handleArrowDown, handleArrowUp, handleTab, handleEnter)
    const isPopulated1 = true
    const selectedLabel1 = true
    component.props().accessibleAutocompleteKeyDownHandler(eve, selected, updateSelected, resultsList, handleClick, isPopulated1, onHandleClick, onkeyDown, selectedLabel1, handleArrowDown, handleArrowUp, handleTab, handleEnter)
  })

  test('Invoking handleChange method when user enter morethan 2 letters in auto complete', () => {
    const handleChange = jest.fn()
    handleChange()
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    const autoCompleteText = wrapper.find('[id="autocomplete-0-field"]').at(0)
    autoCompleteText.simulate('change', {target: { value: 'au' }})
    expect(handleChange).toHaveBeenCalled()
  })

  test('Invoking onHandleClick when user clicks on auto complete', () => {
    const onHandleClick = jest.fn()
    onHandleClick()
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    const autoCompleteText = wrapper.find('[id="autocomplete-0-field"]').at(0)
    autoCompleteText.simulate('click')
    expect(onHandleClick).toHaveBeenCalled()
  })

  test('Invoking onkeyDown method when user press any key', () => {
    const onkeyDown = jest.fn()
    onkeyDown()
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    const autoCompleteText = wrapper.find('[id="autocomplete-0-field"]').at(0)
    autoCompleteText.simulate('keyDown', {keyCode: 13})
    expect(onkeyDown).toHaveBeenCalled()
  })

  test('Click on Close Icon', () => {
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    wrapper.find('[data-test-id="autocomplete-0-close"]').first().simulate('click')
  })

  test('Invoking handleClick when user select from the auto complete result', () => {
    const handleClick = jest.fn()
    handleClick()
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    wrapper.find('[data-test-id="autocomplete-0-result-0"]').first().simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })

  test('onFocus , onMouseEnter and onMouseLeave event trigger when user select from suggestion', () => {
    const updateResultsFocus = jest.fn()
    updateResultsFocus()
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    wrapper.find('[data-test-id="autocomplete-0-result-0"]').first().simulate('focus')
    wrapper.find('[data-test-id="autocomplete-0-result-0"]').first().simulate('blur')
    wrapper.find('[data-test-id="autocomplete-0-result-1"]').first().simulate('mouseOver')
    wrapper.find('[data-test-id="autocomplete-0-result-2"]').first().simulate('mouseleave')
    expect(updateResultsFocus).toHaveBeenCalled()
  })

  test('onKeyDown trigger the accessibility function', () => {
    const wrapper = mount(<AutoComplete id='0' name='auto-complete' placeholder='Test Autocomplete' label='Country Name' results={resultsList} onResultSelect={jest.fn()}
      isPopulated={false} updateIsPopulated={jest.fn()} onInputTextChange={jest.fn()} value='India' updateResults={jest.fn()} clearField={jest.fn()} />)
    const e = { keyCode: 40 }
    wrapper.find('[id="autocomplete-0-field"]').first().simulate('keydown', e)
  })
})
