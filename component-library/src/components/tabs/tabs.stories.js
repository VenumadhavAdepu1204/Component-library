import React from 'react'

import { storiesOf } from '@storybook/react'
import Tabs, { Pane } from './'
import AppConstants from '../../../common/utils/constant'
import Icon from '../../../IB/components/icon'
import { SpanIcon } from './styles'

const Authorise = (props) => (
  <SpanIcon>
    <Icon iconName='Authorise' viewBox='0 0 30 30' width='1.5em' height='1.5em' {...props} />
  </SpanIcon>
)
const TabsStorybook = storiesOf('Tabs', module)
TabsStorybook.add('default 2 tabs',
  () => <div style={{ margin: '50px 100px' }}><Tabs>
    <Pane title={AppConstants.BO_ANZ_SHIELD}>
      <h2>Components of ANZ Shield</h2>
    </Pane>
    <Pane title={AppConstants.BO_ANZ_SECURE_DEVICE} tabIcon={Authorise}>
      <h2>Components of ANZ Security Device</h2>
    </Pane>
  </Tabs></div>,
  { info: 'Tabs "app/src/components/global/Tabs' }
)

TabsStorybook.add('3 tabs look',
  () => <div style={{ margin: '50px 100px' }}><Tabs>
    <Pane title={AppConstants.BO_ANZ_SHIELD}>
      <h2>Components of ANZ Shield</h2>
    </Pane>
    <Pane title={AppConstants.BO_ANZ_SECURE_DEVICE} tabIcon={Authorise}>
      <h2>Components of ANZ Security Device</h2>
    </Pane>
    <Pane title={'Tab3'} tabIcon={Authorise}>
      <h2>Components of Tab3</h2>
    </Pane>
  </Tabs></div>,
  { info: 'Tabs "app/src/components/global/Tabs' }
)
