import React from 'react'
import PropTypes from 'prop-types'

import {
  ListWrapper,
  IconWrapper
} from './styles'

const SelectList = props => {
  const { navListData } = props
  const generateLinks = label => {
    return `/#/${label}`
  }

  return navListData ? navListData.map(item => {
    return (
      <ListWrapper
        tabIndex={0}
        id={`option_${item.label}`}
        data-test-id={`option_${item.label}`}
        data-testid={`option_${item.label}`}
        key={item.label}
        aria-label={`link${item.label}`}
        href={generateLinks(item.label)}
      >
        {item.label}
        <IconWrapper>
          <Icon iconName='Arrow Right' />
        </IconWrapper>
      </ListWrapper>
    )
  }) : null
}

SelectList.propTypes = {
  navListData: PropTypes.array.isRequired
}

export default SelectList
