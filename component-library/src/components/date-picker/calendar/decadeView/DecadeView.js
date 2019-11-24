import React from 'react'
import { DecadeViewWrapper, Wrapper, LabelName, MYLabel, DecadeContainer } from '../../styles'

const DecadeView = props => {
  const selectedYear = props.selectedDate && (new Date(props.selectedDate).getFullYear())
  const currentDate = new Date()
  const renderEachYear = (year, yearIndex, onYearClick) => {
    if (year === currentDate.getFullYear()) {
      return (
        <LabelName current
          data-test-id='date-picker-year'
          key={yearIndex}
          onClick={() => onYearClick(year)}>
          <MYLabel>{year}</MYLabel>
        </LabelName>
      )
    } else if (props.year === year && selectedYear === year) {
      return (
        <LabelName selected
          data-test-id='date-picker-year'
          key={yearIndex}
          onClick={() => onYearClick(year)}>
          <MYLabel>{year}</MYLabel>
        </LabelName>
      )
    } else {
      return (
        <LabelName
          data-test-id='date-picker-year'
          key={yearIndex}
          onClick={() => onYearClick(year)}>
          <MYLabel>{year}</MYLabel>
        </LabelName>
      )
    }
  }
  const updateDecadeYears = (year) => {
    const years = []
    for (let i = 0; i < 12; i++) {
      years.unshift(year + 1)
      year--
    }
    return years
  }
  const DecadeView = (years) => {
    const decadeValue = years[0] + ' - ' + years[years.length - 1]
    props.getDecadeView(decadeValue)
  }

  const renderYears = (props) => {
    const years = updateDecadeYears(props.year)
    DecadeView(years)
    const yearsMarkup = years.map((year, index) => {
      return (
        <Wrapper key={index}>
          {renderEachYear(year, index, props.onYearClick)}
        </Wrapper>
      )
    })
    return (
      <DecadeContainer >{yearsMarkup}</DecadeContainer>
    )
  }

  return (
    <DecadeViewWrapper>
      {renderYears(props)}
    </DecadeViewWrapper>
  )
}

export default DecadeView
