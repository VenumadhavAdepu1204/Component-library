import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import SearchList from './index'
import CardListJson from '../stubs/cardList.json'

jest.mock('../../../IB/components/icon', () => 'Icon')

jest.mock(
  '@anz/icon/dist/line/arrows-and-symbols/information',
  () => 'InfoIcon'
)

describe('SearchList', () => {
  afterEach(cleanup)

  test('renders properly', () => {
    const { container } = render(
      <SearchList list={CardListJson.cards} renderList={jest.fn()} />
    )
    expect(container).toMatchSnapshot()
  })

  test('on enter of filter text', () => {
    const { getByPlaceholderText } = render(
      <SearchList
        cardlist={CardListJson.cards}
        filterPlaceholder='search'
        handleFilter={jest.fn()}
        renderList={jest.fn()}
      />
    )
    fireEvent.change(getByPlaceholderText(/search/), { target: { value: 's' } })
  })

  test('on click of cross icon', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SearchList
        cardlist={CardListJson.cards}
        filterPlaceholder='search'
        handleFilter={jest.fn()}
        renderList={jest.fn()}
      />
    )
    fireEvent.change(getByPlaceholderText(/search/), { target: { value: 's' } })
    fireEvent.click(getByTestId(/clear-icon/))
  })
})
