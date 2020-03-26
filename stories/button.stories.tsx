import { storiesOf } from '@storybook/react'
import React from 'react'

import { Spacer, IonButton } from '../components'

storiesOf('Elements / Inputs', module).add('Buttons', () => (
  <>
    <Spacer type="within">
      <IonButton>Primary button</IonButton>
      <IonButton color="inverse">Inverse button</IonButton>
    </Spacer>
    <Spacer
      type="within"
      style={{ padding: '20px', backgroundColor: '#272727' }}
    >
      <IonButton className="onDark">Primary button</IonButton>
      <IonButton color="inverse" className="onDark">
        Inverse button
      </IonButton>
    </Spacer>
  </>
))
