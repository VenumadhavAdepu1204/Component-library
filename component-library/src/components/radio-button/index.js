import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { InputWrapper, LabelWrapper } from './styles.js'

const RadioButton = (props) => {
  const [ checked, setCheckedValue ] = useState(false)

  useEffect(() => {
    setCheckedValue(props.checked)
  }, [props.checked])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCheckedValue(true)
    }
  }

  const { value, id, name, label, ariaLabel } = props
  const disabled = props.disabled || false
  return (
    <div>
      <InputWrapper
        type='radio'
        data-test-id={`${id}-radio-button`}
        value={value}
        onClick={props.onChange}
        onChange={props.onChange}
        checked={checked}
        id={id}
        name={name}
        disabled={disabled}
        tabIndex={0}
        onKeyPress={handleKeyPress}
        aria-label={ariaLabel}
      />
      <LabelWrapper htmlFor={id}>{label}</LabelWrapper>
    </div>
  )
}

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  id: PropTypes.string,
  ariaLabel: PropTypes.string
}

RadioButton.defaultProps = {
  checked: false
}

export default RadioButton
