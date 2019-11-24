import React from 'react'
import { shallow, mount } from 'enzyme'

import CardSearchList from './index'
import CardListJson from '../stubs/cardList.json'

jest.mock('../../../IB/components/icon', () => 'Icon')

jest.mock('@anz/tooltip', () => 'Tooltip')
jest.mock('@anz/tooltip', () => 'TooltipWrapper')
jest.mock('@anz/icon/dist/line/arrows-and-symbols/information', () => 'InfoIcon')

describe('Card', () => {
  const app = shallow(<CardSearchList cardlist={CardListJson} />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Card should render without crashing', () => {
    mount(<CardSearchList cardlist={CardListJson} />)
  })

  it('should filter cards when card name or number is input for search', () => {
    const spy = jest.spyOn(CardSearchList.prototype, 'onInputChange')
    const wrapper = mount(<CardSearchList cardlist={CardListJson} />)
    const inputSearch = wrapper.find('input[name="card-search-input"]')
    wrapper.setState({ searchTerm: '4509' })
    inputSearch.simulate('change')
    expect(spy).toHaveBeenCalled()
  })

  it('should show cards when card name or number is input for search and matches card name', () => {
    const spy = jest.spyOn(CardSearchList.prototype, 'onInputChange')
    const wrapper = mount(<CardSearchList cardlist={CardListJson} />)
    const inputSearch = wrapper.find('input[name="card-search-input"]')
    wrapper.setState({ searchTerm: '' })
    inputSearch.simulate('change')
    expect(spy).toHaveBeenCalled()
  })

  it('should clear the search field when cross icon is clicked', () => {
    const spy = jest.spyOn(CardSearchList.prototype, 'clearSearchInput')
    const wrapper = mount(<CardSearchList cardlist={CardListJson} handleCardSelection={jest.fn} />)
    const inputSearch = wrapper.find('input[name="card-search-input"]')
    wrapper.setState({ searchTerm: '4509' })
    inputSearch.simulate('change')
    const clearSearch = wrapper.find('a[id="clear-search"]')
    clearSearch.simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
