import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import TextArea from './index'

const TextAreaStorybook = storiesOf('TextArea', module)

TextAreaStorybook.add('1. default', () =>
  <div style={{ margin: '50px 0' }}>
    <TextArea
      placeholder={text('placeholder text: ', 'type text here')}
      borderColor='#cdcdcd'
      textAreaFunc={action('changed')}
    />
  </div>,
{ info: 'this provides more info...' }
)
TextAreaStorybook.add('2. active', () =>
  <div style={{ margin: '50px 0' }}>
    <TextArea
      textAreaTitle='this will show on hover on text'
      textAreaFunc={action('changed')}
      placeholder={text('placeholder text: ', 'type text')}
    />
  </div>)
TextAreaStorybook.add('3. validation warning', () =>
  <div style={{ margin: '50px 0' }}>
    <TextArea placeholder='my text area'
      textAreaTitle='this will show on hover on text'
      textAreaFunc={action('changed')}
      borderColor='#ECBCB2'
    />
  </div>)
