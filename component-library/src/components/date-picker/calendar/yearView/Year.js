import React from 'react'

import { months, abbreviationForMonth } from '../../shared/helpers'
import { Wrapper, Container, LabelName, MYLabel } from '../../styles'

const Year = (props) => {
  const selectedMonth = props.selectedDate && new Date(props.selectedDate).getMonth()
  const selectedYear = props.selectedDate && new Date(props.selectedDate).getFullYear()
  const currentDate = new Date()

  const renderMonth = (month, monthIndex, onMonthClick, year) => {
    if (monthIndex === currentDate.getMonth() && year === currentDate.getFullYear()) {
      return (
        <LabelName data-test-id='date-picker-month' current key={monthIndex} onClick={() => onMonthClick(year, monthIndex)}>
          <MYLabel>{abbreviationForMonth(month).toUpperCase()}</MYLabel>
        </LabelName>
      )
    } else if (props.monthNumber === monthIndex && selectedMonth === monthIndex && selectedYear === year) {
      return (
        <LabelName data-test-id='date-picker-month' selected key={monthIndex} onClick={() => onMonthClick(year, monthIndex)}>
          <MYLabel>{abbreviationForMonth(month).toUpperCase()}</MYLabel>
        </LabelName>
      )
    } else {
      return (
        <LabelName data-test-id='date-picker-month' key={monthIndex} onClick={() => onMonthClick(year, monthIndex)}>
          <MYLabel>{abbreviationForMonth(month).toUpperCase()}</MYLabel>
        </LabelName>
      )
    }
  }
  const monthsMarkup = months.map((month, index) => {
    return (
      <Wrapper key={index}>
        {renderMonth(month, index, props.onMonthClick, props.yearNumber)}
      </Wrapper>
    )
  })

  return (
    <Container>
      {monthsMarkup}
    </Container>
  )
}

export default Year
