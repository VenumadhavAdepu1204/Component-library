import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import InputText from '../input-text'

import { Wrapper, SearchContainer, Link, NoItems } from './styles'

const SearchList = props => {
  let { list, filterPlaceholder, noMatchText } = props

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    setFilteredList(list)
  }, [])

  const clearSearchInput = () => {
    setFilteredList(list)
    setSearchTerm('')
  }

  const onInputChange = searchTerm => {
    setSearchTerm(searchTerm)
    setFilteredList(props.handleFilter(list, searchTerm))
  }

  return (
    <Wrapper>
      <SearchContainer>
        <Link>
          <Icon iconName='Search' />
        </Link>
        <InputText
          ariaLabel={filterPlaceholder}
          ariaRequired={false}
          id='search-input'
          name='search-input'
          data-test-id='search-input'
          placeholderText={filterPlaceholder}
          onChange={onInputChange}
          inputValue={searchTerm}
        />
        {searchTerm.length > 0 ? (
          <Link
            id='clear-search'
            name='clear-search'
            data-test-id='clear-search'
            data-testid='clear-icon'
            tabIndex={0}
            onClick={clearSearchInput}
            onKeyPress={clearSearchInput}
          >
            <Icon iconName='CrossIcon' />
          </Link>
        ) : null}
      </SearchContainer>
      {filteredList && filteredList.length > 0 ? (
        props.renderList(filteredList)
      ) : props.handleNoMatch ? props.handleNoMatch(searchTerm) : (
        <NoItems>{noMatchText}</NoItems>
      )}
    </Wrapper>
  )
}

SearchList.propTypes = {
  list: PropTypes.array,
  filterPlaceholder: PropTypes.string,
  noMatchText: PropTypes.string,
  renderList: PropTypes.func,
  handleFilter: PropTypes.func,
  handleNoMatch: PropTypes.func
}

SearchList.defaultProps = {
  list: [],
  filterPlaceholder: '',
  noMatchText: ''
}

export default SearchList
