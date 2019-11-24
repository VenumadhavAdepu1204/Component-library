import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import RadioButton from './index'

describe('<RadioButton />', () => {
  const { container } = render(<RadioButton onChange={jest.fn()} />)

  test('renders properly', () => {
    expect(container).toMatchSnapshot()
  })

  test('handleKeyPress function is called', () => {
    const { getAllByDisplayValue } = render(<RadioButton onChange={jest.fn()} value='radio button' name='test' />)
    fireEvent.keyPress(getAllByDisplayValue('radio button')[0], {
      key: 'Enter',
      charCode: 13
    })
  })

  test('handleKeyPress function is else called', () => {
    const { getAllByDisplayValue } = render(<RadioButton onChange={jest.fn()} value='radio button' name='test' />)
    fireEvent.keyPress(getAllByDisplayValue('radio button')[0], {
      key: 'Tab'
    })
  })
})
