import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Calendar from './calendar/Calendar'

import InputText from '../../../common/components/input-text'

import { DateInputContainer, CalendarContainer, DateFieldWrapper, IconWrapper } from './styles'

const DatePicker = props => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [displayDate, setDisplayDate] = useState()
  const [activeDate, setActiveDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState()
  const [timeOutId, setTimeOutId] = useState()

  useEffect(() => {
    setDisplayDate(props.value)
  }, [props.value])

  const onBlurHandler = () => {
    setTimeOutId(setTimeout(() => {
      setShowCalendar(false)
    }))
  }
  const onFocusHandler = () => {
    clearTimeout(timeOutId)
  }

  const handleChange = value => {
    const onlyNumberValue = value.replace(/[^0-9]/g, '')
    let splitValue = ''
    for (let i = 0; (i < onlyNumberValue.length && i < 8); i++) {
      splitValue += (i === 2 || i === 4) ? '/' + onlyNumberValue[i] : onlyNumberValue[i]
    }
    setDisplayDate(splitValue)
    props.onChange(splitValue)
  }
  const formattedDate = (fullDate) => {
    let dateNumber = fullDate.getDate()
    let monthNumber = fullDate.getMonth() + 1
    const yearNumber = fullDate.getFullYear()

    if (dateNumber.toString().length === 1) {
      dateNumber = `0${dateNumber}`
    }
    if (monthNumber.toString().length === 1) {
      monthNumber = `0${monthNumber}`
    }
    const tempDate = `${dateNumber}/${monthNumber}/${yearNumber}`
    setDisplayDate(tempDate)
    props.onChange(fullDate)
  }
  const displayCalendar = () => {
    setDisplayDate('')
    setShowCalendar(!showCalendar)
  }
  const handleDisplayCalendar = (e) => {
    if (e.key === AppConstants.ENTER && e.charCode === 13) {
      displayCalendar()
    } else {
      setShowCalendar(false)
    }
  }
  const onYearClick = (year) => {
    setActiveDate(new Date(
      year, activeDate.getMonth()
    ))
  }
  const onMonthClick = (year, monthIndex) => {
    setActiveDate(new Date(
      year,
      monthIndex,
      activeDate.getMonth()
    ))
  }
  const getPreviousMonth = () => {
    setActiveDate(new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() - 1
    ))
  }
  const getPreviousYear = () => {
    setActiveDate(new Date(
      activeDate.getFullYear() - 1,
      activeDate.getMonth()
    ))
  }
  const getPreviousDecade = () => {
    setActiveDate(new Date(
      activeDate.getFullYear() - 12,
      activeDate.getMonth()
    ))
  }
  const getNextMonth = () => {
    setActiveDate(new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() + 1
    ))
  }
  const getNextYear = () => {
    setActiveDate(new Date(
      activeDate.getFullYear() + 1,
      activeDate.getMonth()
    ))
  }
  const getNextDecade = () => {
    setActiveDate(new Date(
      activeDate.getFullYear() + 12,
      activeDate.getMonth()
    ))
  }
  const onDayClicking = (newDate) => {
    setSelectedDate(newDate)
    setActiveDate(new Date(
      activeDate.getFullYear(),
      activeDate.getMonth(),
      newDate.getDate()
    ))
    setShowCalendar(false)
    formattedDate(newDate)
  }
  const CalendarIcon = <IconWrapper
    showCalendar
    data-test-id='datepicker-icon'
    onClick={displayCalendar}
    aria-haspopup='true'
    aria-label='datepicker icon'
    aria-expanded={showCalendar}
    type='button'
    >
    <Icon iconName='Calendar' />
  </IconWrapper>

  return (
    <DateFieldWrapper onBlur={onBlurHandler} onFocus={onFocusHandler} >
      <DateInputContainer >
        <InputText
          type='text'
          showButton
          id={props.id}
          label={props.label}
          ariaLabel={props.ariaLabel}
          inputValue={displayDate}
          placeholderText={props.placeholder}
          fieldIcon={CalendarIcon}
          patternRegex={props.patternRegex}
          onChange={handleChange}
          onClick={displayCalendar}
          onKeyPress={handleDisplayCalendar}
        />
      </DateInputContainer>
      {showCalendar &&
      <CalendarContainer>
        <Calendar
          data-test-id='date-picker-calendar'
          selectedDate={selectedDate}
          activeDate={activeDate}
          onYearClick={onYearClick}
          onMonthClick={onMonthClick}
          onDayClicking={onDayClicking}
          getPreviousMonth={getPreviousMonth}
          getPreviousYear={getPreviousYear}
          getPreviousDecade={getPreviousDecade}
          getNextMonth={getNextMonth}
          getNextYear={getNextYear}
          getNextDecade={getNextDecade}
          disablePreviousDates={props.disablePreviousDates}
          disableAfterDates={props.disableAfterDates}
          disableDates={props.disableDates}
          onFocusHandler={onFocusHandler}
          onBlurHandler={onBlurHandler}
        />
      </CalendarContainer>
      }
    </DateFieldWrapper>
  )
}

DatePicker.propTypes = {
  placeholder: PropTypes.string,
  disablePreviousDates: PropTypes.instanceOf(Date),
  disableAfterDates: PropTypes.instanceOf(Date)
}

DatePicker.defaultProps = {
  placeholder: 'DD/MM/YYYY',
  disablePreviousDates: null,
  disableAfterDates: null
}

export default DatePicker
