import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import InputText from './index'

const InputTextStoryBook = storiesOf('InputText', module)

InputTextStoryBook.addDecorator(withKnobs)
  .add('1. Standard Fields', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText type='text'
        placeholderText={text('Placeholder', 'Place Text Here')}
        onChange={action('Value')}
      />
    </div>,
  { info: 'Standard Text Field "app/src/components/global/input-text' }
  )

  .add('2. With Error', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText placeholderText={text('Placeholder', 'Place Text Here')} error={boolean('Error', true)} onChange={action('Value')} />
    </div>,
  { info: 'Text Field with Error" app/src/components/global/input-text' }
  )

  .add('3. Detailed Text Fields', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText placeholderText={text('Placeholder', 'Place Text Here')} label={text('Label', 'Label')} onChange={action('Value')} />
    </div>,
  { info: 'Detailed Text Field "app/src/components/global/input-text' }
  )

  .add('4. Detailed Text Field with label and help text in error case', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText placeholderText={text('Placeholder', 'Place Text Here')} error={boolean('Error', true)} errorMessage={text('Help Text', 'Help Text')} label={text('Label', 'Label')} onChange={action('Value')} />
    </div>,
  { info: 'Detailed Text Field with label and error text"app/src/components/global/input-text' }
  )

  .add('5. Detailed Text Field with only label', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText placeholderText={text('placeholder', 'Place Text Here')} label={text('Label', 'Label')} onChange={action('Value')} />
    </div>,
  { info: 'Detailed Text Field with only label " app/src/components/global/input-text' }
  )

  .add('6. Detailed Text Field with label in error case', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText placeholderText={text('Placeholder', 'Place Text Here')} error={boolean('Error', true)} label={text('Label', 'Label')} onChange={action('Value')} />
    </div>,
  { info: 'Detailed Text Field with label in error case " app/src/components/global/input-text' }
  )
  .add('7. Detailed Text Field with only help text', () =>
    <div style={{ margin: '50px 100px' }}>
      <InputText placeholderText={text('Placeholder', 'Place Text Here')} error={boolean('Error', true)} errorMessage={text('Help Text', 'Help Text')} onChange={action('Value')} />
    </div>,
  { info: 'Detailed Text Field with only error text" app/src/components/global/input-text' }
  )
