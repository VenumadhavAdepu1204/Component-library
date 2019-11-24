import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import KeyPad from './index'

const KeyPadStorybook = storiesOf('KeyPad', module)
KeyPadStorybook.add('default',
  () =>
    <div style={{ margin: '50px 100px' }}>
      <KeyPad
        callbackFromKeyPad={action('Keypad clicked')}
        callbackForKeyPadClear={action('Clear button clicked')}
        callbackForKeyPadBack={action('Back button clicked')}
      />
    </div>,
  { info: 'KeyPad "app/src/components/global/keyPad' }
)
