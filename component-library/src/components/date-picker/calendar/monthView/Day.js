import React from 'react'

import { Days } from '../../styles'

const Day = props => {
  const { fullDate, onClick, selectedDate, onMouseEnter, onMouseLeave, hovering, disablePreviousDates, disableAfterDates } = props
  const date = fullDate && fullDate.getDate()
  const currentDate = new Date()
  if (disablePreviousDates) {
    if (fullDate < disablePreviousDates) {
      return <Days disabled data-test-id='day-disable-before'>
        {date}
      </Days>
    }
  }
  if (disableAfterDates) {
    if (fullDate > disableAfterDates) {
      return <Days disabled data-test-id='day-disable-after'>
        {date}
      </Days>
    }
  }

  if (hovering) {
    return <Days hovering
      data-test-id='day-hovering'
      onClick={() => onClick(fullDate)}
      onMouseEnter={() => onMouseEnter(date)}
      onMouseLeave={() => onMouseLeave(date)}>
      {date}
    </Days>
  } else if (fullDate.toDateString() === (selectedDate ? selectedDate.toDateString() : '')) {
    return <Days selected
      data-test-id='day-selected'
      onClick={() => onClick(fullDate)}
      onMouseEnter={() => onMouseEnter(date)}
      onMouseLeave={() => onMouseLeave(date)}>
      {date}
    </Days>
  } else if (fullDate.toDateString() === currentDate.toDateString()) {
    return <Days current
      data-test-id='day-current'
      onClick={() => onClick(fullDate)}
      onMouseEnter={() => onMouseEnter(date)}
      onMouseLeave={() => onMouseLeave(date)}>
      {date}
    </Days>
  } else {
    return (
      <Days
        data-test-id='day-remaining'
        onClick={() => onClick(fullDate)}
        onMouseEnter={() => onMouseEnter(date)}
        onMouseLeave={() => onMouseLeave(date)}>
        {date}
      </Days>
    )
  }
}

export default Day
