import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import RadioButton from './index'

const RadioButtonStorybook = storiesOf('RadioButton', module)

RadioButtonStorybook.addDecorator(withKnobs)

RadioButtonStorybook.add('default',
  () =>
    <div style={{ margin: '50px 100px' }}>
      <RadioButton
        id='default-rb'
        label={text('Label', 'Default Radio Button')}
        name='default-rb'
        value='default-rb'
        checked={false}
        onChange={action('RadioButton component clicked')} />
    </div>,
  { info: 'RadioButton "app/src/components/radio-button' }
)

RadioButtonStorybook.add('checked',
  () =>
    <div style={{ margin: '50px 100px' }}>
      <RadioButton
        id='checked-rb'
        label={text('Label', 'Default Checked Radio Button')}
        name='checked-rb'
        value='checked-rb'
        checked
        onChange={action('RadioButton component clicked')} />
    </div>
)
