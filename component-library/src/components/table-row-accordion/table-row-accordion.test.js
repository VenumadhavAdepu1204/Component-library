import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import TableRowAccordion from './index'

describe('TableRowAccordion', () => {
  afterEach(cleanup)
  test('renders properly', () => {
    const titleContent = <p>Title content</p>
    const bodyContent = <p>Body content</p>
    const { container } = render(<TableRowAccordion titleContent={titleContent} bodyContent={bodyContent} />)
    expect(container).toMatchSnapshot()
  })

  test('link calls handleClick on click', () => {
    const titleContent = <p>Title content</p>
    const bodyContent = <p>Body content</p>
    const { getByTestId } = render(<TableRowAccordion titleContent={titleContent} bodyContent={bodyContent} />)
    const accordionButton = getByTestId('table-row-accordion')
    fireEvent.click(accordionButton)
  })
})
