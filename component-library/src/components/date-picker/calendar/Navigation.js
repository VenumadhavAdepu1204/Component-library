import React, { useEffect, useState } from 'react'
import { NavigationWrapper, LeftArrow, NavigationLabel, RightArrow } from '../styles'
import { getMonthYearLabel, getYearLabel, abbreviationForMonth, months } from '../shared/helpers'
import Icon from '../../../../IB/components/icon'
import styleVars from '../../../../common/styles-global/global.js'

const Navigation = props => {
  const { drillUp, onLeftArrowClick, onRightArrowClick, fullDate, view, year, month, currentDecadeValue } = props

  const [decadeValue, setDecadeValue] = useState(currentDecadeValue)
  const [monthNumber, setMonthNumber] = useState(month)
  const [yearNumber, setYearNumber] = useState(year)

  const nextLabel = <Icon iconName='Arrow Right' color={styleVars.color.ocean_blue} />
  const prevLabel = <Icon iconName='Arrow Left' color={styleVars.color.ocean_blue} />

  useEffect(() => {
    setDecadeValue(currentDecadeValue)
    setYearNumber(year)
    setMonthNumber(month)
  }, [currentDecadeValue], [month], [year])

  const getLabel = (fullDate, view) => {
    switch (view) {
      case 'decade': return decadeValue
      case 'year': return (yearNumber !== null) ? yearNumber : getYearLabel(fullDate)
      case 'month': return (monthNumber !== null) ? abbreviationForMonth(months[monthNumber]) + ' ' + yearNumber : getMonthYearLabel(fullDate)
      default: break
    }
  }

  return (
    <NavigationWrapper>
      <LeftArrow data-test-id='left-arrow' onClick={onLeftArrowClick}>{prevLabel}</LeftArrow>
      <NavigationLabel data-test-id='navigation-label' onClick={drillUp}>{getLabel(fullDate, view)}</NavigationLabel>
      <RightArrow data-test-id='right-arrow' onClick={onRightArrowClick}>{nextLabel}</RightArrow>
    </NavigationWrapper>
  )
}

export default Navigation
