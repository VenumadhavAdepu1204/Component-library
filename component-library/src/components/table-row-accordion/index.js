import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

import {
  AccordionWrapper,
  AccordionContent,
  AccordionButton
} from './styles'

const TableRowAccordion = (props) => {
  const [active, setActiveState] = useState(false)

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(active === false && true)
  }

  return (
    <AccordionWrapper>
      <AccordionButton onClick={toggleAccordion} data-testid='table-row-accordion' >
        {props.title}
        {active ? <Icon data-test-id='arrow-up' iconName='ArrowUp' color='blue' />
          : <Icon data-test-id='arrow-down' iconName='ArrowDown' color='blue' /> }
      </AccordionButton>
      <AccordionContent ref={content} active={active}>
        {props.content}
      </AccordionContent>
    </AccordionWrapper>
  )
}

TableRowAccordion.propTypes = {
  titleElement: PropTypes.object,
  bodyElement: PropTypes.object
}

TableRowAccordion.defaultProps = {
}

export default TableRowAccordion
