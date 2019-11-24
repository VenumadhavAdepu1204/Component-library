import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose'

import InputText from '../input-text'

import { DropdownWrapper, ResultWrapper, Result, Button, MainWrapper, LabelDD } from './styles'

const enhanceState = withStateHandlers(
  () => ({
    focused: true,
    open: false,
    resultsHover: false,
    resultsFocus: false,
    selected: -1,
    isitemSelected: false,
    listRef: React.createRef(),
    listBoxRef: React.createRef()
  }),
  {
    updateState: () => (state, value) => ({ [state]: value }),
    updateResultsHover: () => value => ({ resultsHover: value }),
    updateResultsFocus: () => value => ({ resultsFocus: value }),
    updateSelected: () => value => ({selected: value}),
    outsideClick: ({ focused, listBoxRef }) => (event) => {
      if (!focused && listBoxRef.current && !listBoxRef.current.contains(event.target)) {
        return { focused: true, isitemSelected: false }
      }
    }
  }
)

const enhancedHandlers = withHandlers({
  handleClick: (props) => (focusFirstItem) => {
    focusFirstItem()
    props.updateState('focused', !props.focused)
    props.updateState('isitemSelected', false)
  },

  onKeyDown: (props) => () => {
    props.onResultSelect('')
  },

  onDropdownChange: () => (e) => {
    console.log('onChange', e)
  },

  focusFirstItem: (props) => async () => {
    const listNode = props.listRef.current
    const list = ReactDOM.findDOMNode(listNode)
    const first = list && list.firstChild // targets the first <li>
    list && list.focus()
    if (props.selected !== -1) {
      /* if an element is already selected, focus on that element */
      const activeNode = list.children[props.selected]
      activeNode.focus()
      activeNode.style.background = white
    } else {
      /*
      if no element is selected, focus on first element of dropdown
      */
      await props.updateState('selected', props.selected + 1)
      /*
      make input field value as empty
      */
      props.onResultSelect('')
      first && first.focus()
      if (first) {
        first.style.background = white
      }
    }
  },

  accessibilityHandleKeyDown: (props) => async (e, onHandleClick, handleClick, onKeyDown, focusFirstItem, handleAccessibilityArrowDown) => {
    if (props.isitemSelected) {
      onKeyDown()
      handleClick(focusFirstItem)
    }
    if (props.items && props.items.length && !props.isitemSelected) {
      switch (e.keyCode) {
        case 13:
          if (props.selected === -1) {
            await handleClick(focusFirstItem)
          } else {
            await onHandleClick(props.items[props.selected])
            /*
            onHandleClick is updating state of focused & isItemSelected, need to revert for this functionality to work.
            */
            await props.updateState('focused', false)
            await props.updateState('isitemSelected', false)
            focusFirstItem(props.selected)
          }
          break
        case 38:
        case 40:
          handleAccessibilityArrowDown(e, focusFirstItem)
          break
        default:
          break
      }
    }
  },

  handleAccessibilityArrowDown: (props) => (e, focusFirstItem) => {
    /*
        Conditon to activate arrow up/down key functionality only when listbox is displayed on screen.
        */
    if (!props.focused) {
      /*
        avoid default scrolling of window.
        */
      e.preventDefault()
      focusFirstItem()
    }
  },

  optionHandleKey: (props) => async (e, handleClick, focusFirstItem, handleDownArrow, handleUpArrow, key) => {
    const selected = props.selected
    switch (e.keyCode) {
      case 13:
        props.onResultSelect(props.items[selected], key)
        handleClick(focusFirstItem)
        break
      case 27: // escape key pressed
        await props.updateState('focused', true)
        await props.updateState('isitemSelected', false)
        break
      case 40: handleDownArrow()
      /*
      avoid default scrolling of window.
          */
        e.preventDefault()
        break
      case 38:
      /*
      avoid default scrolling of window.
          */
        e.preventDefault()
        handleUpArrow()
        break
      default:
        break
    }
  },

  handleDownArrow: (props) => async () => {
    if (props.selected < props.items.length - 1) {
      await props.updateState('selected', props.selected + 1)
      /*
 make input field value as empty
*/
      props.onResultSelect('')
    }
    if (document.activeElement.nextSibling) {
      document.activeElement.nextSibling.focus()
      document.activeElement.style.background = white
      document.activeElement.style.color = blue
      document.activeElement.previousSibling.style.background = white
    }
  },

  handleUpArrow: (props) => () => {
    if (props.selected > -1) {
      const updateSelected = props.selected - 1
      if (updateSelected === -1) {
        /*
        if arrow up is pressed when focus is on first list item, move focus back to dropdown to display empty selection
        */
        document.activeElement.style.background = white
        document.activeElement.blur()
        /*
      focus back to input text
      */
        document.getElementById(`drop-down-${props.id}-field`).focus()
      } else {
        if (document.activeElement.previousSibling) {
          document.activeElement.previousSibling.focus()
          document.activeElement.style.background = white
          document.activeElement.style.color = blue
          document.activeElement.nextSibling.style.background = white
        }
      }
      props.updateState('selected', updateSelected)
      /*
 make input field value as empty
*/
      props.onResultSelect('')
    }
  }
})

const enhanceLifecycle = lifecycle({
  componentDidMount () {
    document.addEventListener('click', this.props.outsideClick)
  },

  componentWillUnmount () {
    document.removeEventListener('click', this.props.outsideClick)
  }
})

const enhance = compose(
  enhanceState,
  enhancedHandlers,
  enhanceLifecycle
)

export const DropDown = (props) => {
  const { label, value, id, placeholder, placeholderMobile, focused, showErrorMessage, isError, items, updateResultsHover,
    selected, updateResultsFocus, name, handleClick, onKeyDown, listRef, focusFirstItem, optionHandleKey, handleDownArrow, handleUpArrow, onDropdownChange, handleAccessibilityArrowDown, ariaPopupText, readOnly, ariaLabel, listBoxRef } = props

  const fieldIcon = (
    <Button tabIndex={-1} data-test-id={`drop-down-${id}-close`} aria-label='dropdown button'
      type='button'
      onClick={() => {
        props.handleClick(focusFirstItem)
      }}
    >
      {
        focused
          ? <Icon iconName='Arrow Down' />
          : <Icon iconName='Arrow Up' />
      }
    </Button>
  )

  const onHandleClick = (item, key) => {
    item = item === '' ? document.getElementById(`select-${id}-results`).value : item
    key = key === undefined ? document.getElementById(`select-${id}-results`).selectedIndex - 1 : key
    !item.preventDefault && props.onResultSelect(item, key)
    updateResultsFocus(false)
    updateResultsHover(false)
    props.updateState('focused', true)
    props.updateState('isitemSelected', true)
  }
  return (
    <DropdownWrapper data-test-id='outer-wrapper'>
      <LabelDD
        data-test-id={`drop-down-${id}-label`}
      >{label}</LabelDD>
      <MainWrapper bgColor={focused} data-test-id='main-wrapper' ref={listBoxRef}>
        <InputText
          data-test-id='input-text'
          id={`drop-down-${id}-field`}
          type='text'
          ariaLabel={ariaLabel}
          label={label}
          ariaPopupText={ariaPopupText}
          name={name}
          keyDownFunc={(e) => props.accessibilityHandleKeyDown(e, onHandleClick, handleClick, onKeyDown, focusFirstItem, handleAccessibilityArrowDown)}
          onChange={onDropdownChange}
          inputValue={value}
          onClick={() => props.handleClick(focusFirstItem)}
          placeholderText={placeholder}
          fieldIcon={fieldIcon}
          errorMessage={showErrorMessage}
          error={isError}
          readOnly={readOnly}
          showButton
        />
        <ResultWrapper
          ref={listRef}
          show={(items && items.length && !focused)}
          onMouseEnter={() => updateResultsHover(true)}
          onMouseLeave={() => updateResultsHover(false)}
          role='listbox'
          data-test-id={`drop-down-${id}-results`}
        >
          {(items && items.length) && items.map((item, key) => {
            return (<Result
              key={key}
              data-test-id={`drop-down-${id}-result-${key}`}
              tabIndex='-1'
              role='option'
              aria-selected={selected === key}
              onFocus={() => updateResultsFocus(true)}
              onBlur={() => updateResultsFocus(false)}
              onClick={() => onHandleClick(item, key)}
              selected={selected === key}
              onKeyDown={(e) => optionHandleKey(e, handleClick, focusFirstItem, handleDownArrow, handleUpArrow, key)}
            >
              {item}
            </Result>)
          })}
        </ResultWrapper>
      </MainWrapper>
    </DropdownWrapper>
  )
}

DropDown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderMobile: PropTypes.string,
  value: PropTypes.string,
  onResultSelect: PropTypes.func,
  items: PropTypes.array,
  showErrorMessage: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string,
  ariaPopupText: PropTypes.string,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string
}

export default enhance(DropDown)
