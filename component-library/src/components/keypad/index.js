import React from 'react'
import PropTypes from 'prop-types'
import { Maincontainer, RowWrapper, KeyDisplayDiv, KeyNumber, KeyText } from './styles'

const Keypad = (props) => {
  const keyPadClick = (key) => {
    props.callbackFromKeyPad(key)
  }

  const keyPadClear = (key) => {
    props.callbackForKeyPadClear(key)
  }

  const keyPadBack = () => {
    props.callbackForKeyPadBack()
  }
  return (
    <Maincontainer>
      <P>ENTER PIN</P>
      <RowWrapper>
        <button id='keypad-one' variant='normal' size='medium' onClick={() => keyPadClick('1')} ><KeyDisplayDiv><KeyNumber>{1}</KeyNumber><KeyText>{' '}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-two' variant='normal' size='medium' onClick={() => keyPadClick('2')}><KeyDisplayDiv><KeyNumber>{2}</KeyNumber><KeyText>{'ABC'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-three'variant='normal' size='medium' onClick={() => keyPadClick('3')}><KeyDisplayDiv><KeyNumber>{3}</KeyNumber><KeyText>{'DEF'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-four' variant='normal' size='medium' onClick={() => keyPadClick('4')}><KeyDisplayDiv><KeyNumber>{4}</KeyNumber><KeyText>{'GHI'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-five' variant='normal' size='medium' onClick={() => keyPadClick('5')}><KeyDisplayDiv><KeyNumber>{5}</KeyNumber><KeyText>{'JKL'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-six' variant='normal' size='medium' onClick={() => keyPadClick('6')}><KeyDisplayDiv><KeyNumber>{6}</KeyNumber><KeyText>{'MNO'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-seven' variant='normal' size='medium' onClick={() => keyPadClick('7')}><KeyDisplayDiv><KeyNumber>{7}</KeyNumber><KeyText>{'PQRS'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-eight' variant='normal' size='medium' onClick={() => keyPadClick('8')}><KeyDisplayDiv><KeyNumber>{8}</KeyNumber><KeyText>{'TUV'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-nine' variant='normal' size='medium' onClick={() => keyPadClick('9')}><KeyDisplayDiv><KeyNumber>{9}</KeyNumber><KeyText>{'WXYZ'}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-clear' variant='normal' size='medium' onClick={() => keyPadClear('clear')}><KeyDisplayDiv pad><KeyNumber pad>{'Clear'}</KeyNumber></KeyDisplayDiv></button>
        <button id='keypad-zero' variant='normal' size='medium' onClick={() => keyPadClick('0')}><KeyDisplayDiv><KeyNumber>{0}</KeyNumber><KeyText>{' '}</KeyText></KeyDisplayDiv></button>
        <button id='keypad-back' variant='normal' size='medium' onClick={() => keyPadBack()}><KeyDisplayDiv pad><KeyNumber pad>{'Back'}</KeyNumber></KeyDisplayDiv></button>
      </RowWrapper>
    </Maincontainer>
  )
}

Keypad.propTypes = {
  callbackFromKeyPad: PropTypes.func,
  callbackForKeyPadClear: PropTypes.func,
  callbackForKeyPadBack: PropTypes.func
}

export default Keypad
