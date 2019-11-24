import React from 'react'
import PropTypes from 'prop-types'

import { InputTextContainer, ErrorSpan, SubLabel, TextFieldWrapper, AfterFieldIcon, Label, CounterLabel, LabelCountWrapper } from './styles'
import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose'

const enhanceWithHandlers = withHandlers({
  handleChange: (props) => (e, handleCounter) => {
    handleCounter(e.target.value)
    if (props.patternRegex) {
      const patternRegex = new RegExp(props.patternRegex)
      if (patternRegex.test(e.target.value) || !e.target.value) {
        props.onChange(e.target.value)
      }
    } else {
      props.onChange(e.target.value)
    }
  },

  handleCounter: (props) => (value) => {
    const totalCharactersEntered = value.length
    const totalCharacters = props.length
    let remainingCount
    if (totalCharactersEntered > totalCharacters) {
      value = value.substring(0, totalCharacters)
      remainingCount = 0
    } else {
      remainingCount = totalCharacters - totalCharactersEntered
    }
    props.updateRemainingCharacters(remainingCount)
    return value
  },

  handleOnPaste: (props) => (e, handleCounter) => {
    let clipboardData, pastedData, pastedDataText
    /** Stop data actually being pasted into div */
    e.stopPropagation()
    e.preventDefault()
    /** Get pasted data via clipboard API */
    clipboardData = e.clipboardData || window.clipboardData
    pastedData = clipboardData.getData('Text')
    if (props.patternRegex) {
      const patternRegex = new RegExp(props.patternRegex)
      if (patternRegex.test(pastedData)) {
        pastedDataText = handleCounter(e.target.value + pastedData)
        props.onChange(pastedDataText)
      }
    } else {
      pastedDataText = handleCounter(e.target.value + pastedData)
      props.onChange(pastedDataText)
    }
  },

  handleClick: (props) => (e) => {
    props.isAutoComplete && document.getElementById(props.id).select()
    props.onClick && props.onClick(e.target.value)
  },

  handleKeyup: (props) => (e) => {
    props.onkeyup && props.onkeyup(e.target.value)
  },

  handleKeypress: (props) => (e) => {
    props.onKeyPress && props.onKeyPress(e)
  },
  handleKeyDown: (props) => (e) => {
    if (props.keyDownFunc) {
      props.keyDownFunc(e)
    }
    if (props.type === 'number') {
      const charCode = e.which ? e.which : e.keyCode
      const isNumberKeyPad = charCode < 96 || charCode > 105
      const isNumberKey = charCode < 48 || charCode > 57
      const isNumberEnter = (key, pad) => charCode > 31 && key && pad
      const notANumber = isNumberEnter(isNumberKey, isNumberKeyPad)
      if (notANumber) {
        e.preventDefault()
      }
    }
  },
  handleFocus: props => e => {
    if (props.onFocus) {
      props.onFocus(e)
    }
  }
})

const enhanceWithStateHandlers = withStateHandlers(
  (props) => ({
    inputRef: React.createRef(),
    showError: false,
    remainingCharacters: props.length
  })
  , {
    updateRemainingCharacters: () => (remainingCount) => {
      return { remainingCharacters: remainingCount }
    }
  }
)

const enhanceLifecycle = lifecycle({
  componentDidMount () {
    if (this.props.inputValue) {
      this.props.updateRemainingCharacters(this.props.length - this.props.inputValue.length)
    }
  }
})

export const enhance = compose(
  enhanceWithStateHandlers,
  enhanceWithHandlers,
  enhanceLifecycle
)

export const InputText = (props) => {
  return (
    <TextFieldWrapper>
      <InputTextContainer error={props.error} >
        { props.label
          ? (props.countDisplay && props.length
            ? <LabelCountWrapper>
              <Label htmlFor={props.id} data-test-id={props.id + '-input-text-label'}>{props.label}</Label>
              <CounterLabel proRegularFontSize id={props.id + '-input-count-label'} data-test-id={props.id + '-input-count-label'}>{`${props.remainingCharacters}`}</CounterLabel>
            </LabelCountWrapper>
            : <Label htmlFor={props.id} data-test-id={props.id + '-input-text-label'}>{props.label}</Label>
          )
          : null
        }
        <input
          type={props.type}
          tabIndex={0}
          aria-label={props.ariaLabel}
          pattern={props.patternRegex}
          aria-required={props.ariaRequired}
          id={props.id}
          inputMode={props.mode}
          ref={props.inputRef}
          aria-haspopup={props.ariaPopupText}
          data-test-id={props.id}
          data-testid={props.id} // for @testing-library/react
          name={props.name}
          maxLength={props.length}
          onKeyDown={(e) => props.handleKeyDown(e)}
          value={(props.inputValue && props.inputValue.toString()) || ''}
          onChange={(e) => props.handleChange(e, props.handleCounter)}
          onPaste={(e) => props.handleOnPaste(e, props.handleCounter)}
          onClick={e => props.handleClick(e)}
          onKeyUp={e => props.handleKeyup(e)}
          onKeyPress={e => props.handleKeypress(e)}
          onFocus={e => props.handleFocus(e)}
          placeholder={props.placeholderText}
          readOnly={props.readOnly}
          data-required={props.required}
          autoComplete={props.autoComplete}
        />
        {
          props.showButton &&
          <AfterFieldIcon>{props.fieldIcon}</AfterFieldIcon>
        }
        {
          props.error &&
          <ErrorSpan role='alert' proRegularFontSize data-test-id='errorMsg-account-rename'>{props.errorMessage}</ErrorSpan>
        }
        {
          (props.subLabel && props.error === false) &&
            <SubLabel data-test-id='input-text-sublabel' proRegularFontSize>{props.subLabel}</SubLabel>
        }
      </InputTextContainer>
    </TextFieldWrapper>
  )
}

InputText.propTypes = {
  patternRegex: PropTypes.string,
  label: PropTypes.string,
  showButton: PropTypes.bool,
  errorMessage: PropTypes.string,
  defaultErrorMessage: PropTypes.string,
  subLabel: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onkeyup: PropTypes.func,
  onKeyPress: PropTypes.func,
  name: PropTypes.string,
  autocapsformat: PropTypes.bool,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fieldIcon: PropTypes.element,
  placeholderText: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  length: PropTypes.number,
  inputClose: PropTypes.func,
  inputCloseonKey: PropTypes.func,
  ariaLabel: PropTypes.string,
  borderHover: PropTypes.bool,
  isAccount: PropTypes.bool,
  ariaPopupText: PropTypes.string,
  countDisplay: PropTypes.bool,
  mode: PropTypes.string
}

InputText.defaultProps = {
  autocapsformat: false,
  error: false,
  showButton: false,
  readOnly: false,
  required: false,
  isAccount: false,
  autoComplete: 'off',
  countDisplay: false
}

export default enhance(InputText)
