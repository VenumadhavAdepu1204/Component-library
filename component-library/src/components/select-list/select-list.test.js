import React from 'react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SelectList from './index'

describe('Select List', () => {
  test('Select List renders properly without any error', () => {
    const testLabel = [{ label: 'label1' }, { label: 'label2' }]
    const { container } = render(<SelectList navListData={testLabel} />)
    expect(container).toMatchSnapshot()
  })
  test('Select List renders properly with empty data', () => {
    const testLabel = []
    const { container } = render(<SelectList navListData={testLabel} />)
    expect(container).toMatchSnapshot()
  })
  test('Select List renders properly when props not passed', () => {
    const { container } = render(<SelectList />)
    expect(container).toMatchSnapshot()
  })
  test('Select List invoked with click', () => {
    const testLabel = [{ label: 'label1' }]
    const { getByTestId } = render(<SelectList navListData={testLabel} />)
    const listDiv = getByTestId('option_label1')
    fireEvent.click(listDiv)
  })
})
