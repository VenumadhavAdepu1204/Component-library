import React, { useState, useEffect } from 'react'

import Month from './monthView/Month'
import Year from './yearView/Year'
import DecadeView from './decadeView/DecadeView'
import Navigation from './Navigation'
import { CalendarWrapper } from '../styles'

const Calendar = props => {
  const [view, setNewView] = useState('month')
  const [activeDate, setActiveDate] = useState(props.activeDate)
  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  const [decadeView, setDecadeView] = useState()

  useEffect(() => {
    setActiveDate(props.activeDate)
  }, [props.activeDate])

  const showYearView = () => {
    setNewView('year')
  }
  const showDecadeView = () => {
    setNewView('decade')
  }
  const onLeftArrowClick = () => {
    const { getPreviousMonth, getPreviousYear, getPreviousDecade } = props
    switch (view) {
      case 'month': return getPreviousMonth()
      case 'year': return getPreviousYear()
      case 'decade': return getPreviousDecade()
      default : break
    }
  }
  const onRightArrowClick = () => {
    const { getNextMonth, getNextYear, getNextDecade } = props
    switch (view) {
      case 'month': return getNextMonth()
      case 'year': return getNextYear()
      case 'decade': return getNextDecade()
      default : break
    }
  }
  const onMonthClick = (year, monthIndex) => {
    props.onMonthClick(year, monthIndex)
    setYear(year)
    setMonth(monthIndex)
    setNewView('month')
  }
  const onYearClick = (year) => {
    props.onYearClick(year)
    setYear(year)
    setNewView('year')
  }
  const getDecadeView = (value) => {
    setDecadeView(value)
  }
  const drillUp = () => {
    switch (view) {
      case 'month': return showYearView()
      case 'year': return showDecadeView()
      case 'decade': return null
      default : break
    }
  }
  const onDayClick = (newDay) => {
    props.onDayClicking(newDay)
  }

  const renderNavigation = () => {
    const fullDate = activeDate
    return (
      <Navigation
        drillUp={drillUp}
        onLeftArrowClick={onLeftArrowClick}
        onRightArrowClick={onRightArrowClick}
        fullDate={fullDate}
        view={view}
        showYearView={showYearView}
        showDecadeView={showDecadeView}
        currentDecadeValue={decadeView}
        year={year}
        month={month}
      />
    )
  }

  const renderContent = () => {
    const fullDate = activeDate
    const selectedDate = props.selectedDate
    const dateNumber = fullDate.getDate()
    const monthNumber = fullDate.getMonth()
    const yearNumber = fullDate.getFullYear()

    switch (view) {
      case 'decade':
        return (
          <DecadeView
            date={dateNumber}
            month={monthNumber}
            year={yearNumber}
            onYearClick={onYearClick}
            onFocusHandler={props.onFocusHandler}
            onBlurHandler={props.onBlurHandler}
            getDecadeView={getDecadeView}
            selectedDate={selectedDate}
          />
        )
      case 'year':
        return (
          <Year
            fullDate={fullDate}
            selectedDate={selectedDate}
            date={dateNumber}
            monthNumber={monthNumber}
            yearNumber={yearNumber}
            onMonthClick={onMonthClick}
          />
        )
      case 'month':
        return (
          <Month
            selectedDate={selectedDate}
            date={dateNumber}
            month={monthNumber}
            year={yearNumber}
            onDayClick={onDayClick}
            disablePreviousDates={props.disablePreviousDates}
            disableAfterDates={props.disableAfterDates}
            disableDates={props.disableDates}
          />
        )
      default:
        break
    }
  }

  return (
    <CalendarWrapper >
      {renderNavigation()}
      {renderContent()}
    </CalendarWrapper>
  )
}

export default Calendar
