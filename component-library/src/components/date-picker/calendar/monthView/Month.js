import React, { useState, useEffect } from 'react'

import Weekday from './Weekday'
import Day from './Day'
import { weekdays, abbreviationForWeekday, getWeeksForMonth } from '../../shared/helpers'

import { MonthContainer, WeekdayContainer, WeekRow, EmptyStateDay } from '../../styles'

const Month = props => {
  const [hoveredDate, setHoveredDate] = useState(null)
  const [month, setMonth] = useState(props.month)
  const [year, setYear] = useState(props.year)

  useEffect(() => {
    setMonth(props.month)
    setYear(props.year)
  }, [props.month, props.year])

  const handleMouseEnter = (num) => {
    setHoveredDate(num)
  }
  const handleMouseLeave = () => {
    setHoveredDate(null)
  }
  const week = getWeeksForMonth(month, year)

  const renderWeek = (fullDate, dayIndex) => {
    if (fullDate === undefined || fullDate === null) {
      return <EmptyStateDay />
    }
    const dateNum = fullDate.getDate()
    return (
      <Day
        data-test-id='day-component'
        key={dayIndex}
        fullDate={fullDate}
        onClick={props.onDayClick}
        selectedDate={props.selectedDate}
        hovering={dateNum === hoveredDate}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disablePreviousDates={props.disablePreviousDates}
        disableAfterDates={props.disableAfterDates}
        disableDates={props.disableDates}
      />
    )
  }
  const weeksMarkup = week.map((week, index) => {
    return (
      <WeekRow role='row' key={index}>
        {week.map(renderWeek)}
      </WeekRow>
    )
  })
  const weekDaysMarkup = weekdays.map(weekday => {
    return (
      <Weekday
        key={weekday}
        title={abbreviationForWeekday(weekday)}
        label={weekday}
      />
    )
  })

  return (
    <MonthContainer>
      <WeekdayContainer>{weekDaysMarkup}</WeekdayContainer>
      {weeksMarkup}
    </MonthContainer>
  )
}

export default Month
