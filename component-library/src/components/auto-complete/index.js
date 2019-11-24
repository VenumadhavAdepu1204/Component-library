import React from 'react'
import PropTypes from 'prop-types'
import { compose, withStateHandlers, withHandlers } from 'recompose'

import InputText from '../input-text'

import { AutocompleteWrapper, ResultsWrapper, Result, CloseButton } from './styles'

const enhanceState = withStateHandlers(
  () => ({resultsHover: false,
    focus: false,
    resultsFocus: false,
    selected: -1,
    selectedLabel: false}),
  {
    updateState: () => (state, value) => ({ [state]: value }),
    updateFocus: () => value => ({focus: value}),
    updateResultsHover: () => value => ({resultsHover: value}),
    updateResultsFocus: () => value => ({resultsFocus: value}),
    updateSelected: () => value => ({selected: value})
  })

const enhancedHandlers = withHandlers({
  handleChange: (props) => (value) => {
    props.onInputTextChange(value)
    if (value.length >= 2) {
      props.updateFocus(true)
    }
  },
  onHandleClick: (props) => () => {
    props.updateIsPopulated(false)
  },
  onkeyDown: (props) => () => {
    const value = ''
    props.clearField(value)
    props.updateState('selectedLabel', false)
  },

  handleArrowDown: () => (selected, updateSelected, results) => {
    if (selected < results.length - 1) {
      updateSelected(selected + 1)
    } else {
      updateSelected(-1)
    }
  },
  handleArrowUp: () => (selected, updateSelected, results) => {
    if (selected > -1) {
      updateSelected(selected - 1)
    } else {
      updateSelected(results.length - 1)
    }
  },
  handleTab: () => (selected, results, handleClick) => {
    if (selected > -1) {
      handleClick(results[selected])
    }
  },
  handleEnter: () => (selected, results, handleClick) => {
    if (selected > -1) {
      handleClick(results[selected])
    }
  },

  accessibleAutocompleteKeyDownHandler: () => (e, selected, updateSelected, results, handleClick, isPopulated, onHandleClick,
    onkeyDown, selectedLabel, handleArrowDown, handleArrowUp, handleTab, handleEnter) => {
    if (selectedLabel) {
      if (e.keyCode !== 9) {
        onHandleClick()
        onkeyDown()
      }
    }
    if (results && !isPopulated) {
      switch (e.keyCode) {
        case 9:
          handleTab(selected, results, handleClick)
          break
        case 13:
          handleEnter(selected, results, handleClick)
          break
        case 40:
          handleArrowDown(selected, updateSelected, results)
          break
        case 38:
          handleArrowUp(selected, updateSelected, results)
          break
        default:
          break
      }
    }
  },

  fieldIcon: (props) => (isPopulated, id) => {
    return ((isPopulated)
      ? (
        <CloseButton type='button' data-test-id={`autocomplete-${id}-close`} data-testid={`autocomplete-${id}-close`} onClick={() => {
          props.updateResults('')
          props.onResultSelect('')
          props.updateIsPopulated(false)
        }}>
          <Icon id='close-icon' iconName={AppConstants.CLOSE} data-test-id='close-icon' />
        </CloseButton>
      )
      : (
        <Icon id='search-icon' iconName='Search' data-test-id='search-icon' />
      ))
  },

  checkInputValue: () => (results, selected, value) => {
    return (results && selected > -1 && results[selected]) ? results[selected].label : value
  }

})

const enhance = compose(
  enhanceState,
  enhancedHandlers
)

export const AutoComplete = (props) => {
  const {
    id, label, name, results, isPopulated, value, updateFocus, focus,
    updateResultsHover, updateResultsFocus, resultsHover, selectedLabel,
    updateIsPopulated, selected, updateSelected, size, labelSize, placeholder, onHandleClick, onkeyDown,
    handleArrowDown, handleArrowUp, handleTab, handleEnter
  } = props

  const handleClick = (result) => {
    !result.preventDefault && updateIsPopulated(true)
    !result.preventDefault && props.onResultSelect(result.label)
    updateFocus(false)
    updateResultsFocus(false)
    updateResultsHover(false)
    updateSelected(-1)
    props.updateState('selectedLabel', true)
    result.action && result.action()
  }

  const inputValue = props.checkInputValue(results, selected, value)

  return (
    <AutocompleteWrapper role='application' data-test-id={`autocomplete-${id}`}>
      <InputText
        id={`autocomplete-${id}-field`}
        type='text'
        label={label}
        keyDownFunc={(e) => props.accessibleAutocompleteKeyDownHandler(e, selected, updateSelected, results, handleClick, isPopulated, onHandleClick,
          onkeyDown, selectedLabel, handleArrowDown, handleArrowUp, handleTab, handleEnter)}
        name={name}
        inputValue={inputValue}
        onChange={(value) => props.handleChange(value)}
        onClick={props.onHandleClick}
        placeholderText={placeholder}
        fieldIcon={props.fieldIcon(isPopulated, id)}
        showButton
        isAutoComplete
      />
      <ResultsWrapper
        show={(results && results.length && (focus || resultsHover))}
        onMouseEnter={() => updateResultsHover(true)}
        onMouseLeave={() => updateResultsHover(false)}
        role='listbox'
        data-test-id={`autocomplete-${id}-results`}
        size={size}
        labelSize={labelSize}>
        {(results && results.length) ? results.map((result, key) => {
          return (
            <Result
              key={key}
              secondary={result.secondary}
              data-test-id={`autocomplete-${id}-result-${key}`}
              data-testid={`autocomplete-${id}-result-${key}`}
              tabIndex='-1'
              role='option'
              aria-selected={selected === key}
              onFocus={() => updateResultsFocus(true)}
              onBlur={() => updateResultsFocus(false)}
              onClick={() => handleClick(result)}
              selected={selected === key}
            >
              {result.label}
            </Result>
          )
        }) : null}
      </ResultsWrapper>
    </AutocompleteWrapper>
  )
}

AutoComplete.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onInputTextChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  results: PropTypes.array,
  isPopulated: PropTypes.bool,
  placeholder: PropTypes.string,
  onResultSelect: PropTypes.func
}

AutoComplete.defaultProps = {
  isPopulated: false
}

export default enhance(AutoComplete)
