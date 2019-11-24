import React from 'react'
import PropTypes from 'prop-types'

import { defaultProps, compose, lifecycle, withStateHandlers, withHandlers } from 'recompose'

import { TextAreaMain, TextAreaCount, TextAreaContent, Label, LabelWrapper } from './styles'

const setDefaultProps = defaultProps({
  transitionTiming: 500,
  value: 'empty String',
  borderColor: blue,
  textAreaTitle: 'Text area'
})

const enhanceLifecycle = lifecycle({
  componentDidMount () {
    let { maxlength, value } = this.props
    this.props.setRemainingCharacters(maxlength, value)
  }
})

const enhanceWithHandlers = withHandlers({
  handleFocus: (props) => () => {
    props.onFocus && props.onFocus()
  },

  handleBlur: (props) => () => {
    props.onBlur && props.onBlur()
  },
  handleChange: (props) => (value) => {
    const totalCharactersEntered = value.length
    const totalCharacters = props.maxlength
    let remainingCount
    if (totalCharactersEntered <= totalCharacters) {
      remainingCount = totalCharacters - totalCharactersEntered
      props.updateValue(value)
      props.updateRemainingCharacters(remainingCount)
      props.textAreaFunc(value)
    }
  }
})
const enhanceWithStateHandlers = withStateHandlers(
  (props) => ({
    textAreaRef: React.createRef(),
    remainingCharacters: null,
    value: props.value
  }),
  {
    textAreaRefFunc: () => (node) => ({ textAreaRef: node }),
    updateRemainingCharacters: () => (remainingCount) => {
      return { remainingCharacters: remainingCount }
    },
    updateValue: () => (data) => {
      return { value: data }
    },
    setRemainingCharacters: () => (maxlength, value) => ({ remainingCharacters: maxlength - value.length })

  }

)

const enhance = compose(
  setDefaultProps,
  enhanceWithStateHandlers,
  enhanceWithHandlers,
  enhanceLifecycle
)

const TextArea = ({ textAreaRefFunc, handleFocus, handleBlur, handleChange, textAreaTitle, rows, cols, placeholder, remainingCharacters,
  autofocus, value, borderColor, height, ariaLabel, withLabelAndCount }) => {
  return (
    <TextAreaMain data-test-id='textarea-wrapper'>

      {withLabelAndCount
        ? <LabelWrapper>
          <Label htmlFor={`${textAreaTitle}-textarea`} data-test-id={`${textAreaTitle}-textarea-label`}>{textAreaTitle}</Label>
          <P proRegularFontSize id={`${textAreaTitle}-textarea-count`}>{remainingCharacters} characters</P>
        </LabelWrapper>
        : <TextAreaCount data-test-id='textarea-count' htmlFor={`${textAreaTitle}-textarea`}>
          {remainingCharacters}
        </TextAreaCount>}

      <TextAreaContent
        title={!withLabelAndCount ? textAreaTitle : ''}
        data-test-id={`${textAreaTitle}-textarea`}
        id={`${textAreaTitle}-textarea`}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleChange(e.target.value)}
        autoFocus={autofocus}
        ref={textAreaRefFunc}
        value={value}
        borderColor={borderColor}
        height={height}
        aria-label={`${ariaLabel} ${remainingCharacters} characters left`}
        dataWithLabelAndCount={withLabelAndCount}
      />
    </TextAreaMain>
  )
}
TextArea.propTypes = {
  textAreaTitle: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  hasTransition: PropTypes.bool,
  transitionTiming: PropTypes.number,
  value: PropTypes.string,
  borderColor: PropTypes.string,
  height: PropTypes.number,
  withLabelAndCount: PropTypes.bool
}

export default enhance(TextArea)
