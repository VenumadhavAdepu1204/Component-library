import React from 'react'
import { Weekdays } from '../../styles'

/*
* !Monday to Sunday
*/
export default function Weekday ({ label, title }) {
  return (
    <Weekdays aria-label={label} >
      {title}
    </Weekdays>
  )
}
