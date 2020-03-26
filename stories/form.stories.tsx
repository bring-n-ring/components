import { storiesOf } from '@storybook/react'
import React from 'react'

import { IonInput, IonLabel, Spacer, Radio } from '../components'

storiesOf('Elements / Forms', module).add('Forms', () => (
  <>
    <Spacer type="within">
      <IonLabel>Custom label</IonLabel>
      <IonInput placeholder="Some placeholder" />
      <Spacer multiply={3} />
      <IonLabel>Zip code</IonLabel>
      <IonInput className={'hasError'} value="hello" />
      <Spacer multiply={3} />
      <Radio>
        Bitte akzeptiere mich. Ich verspreche dir auch nicht ungefragt Werbung
        zu schicken. Dankeschön.
      </Radio>
    </Spacer>
  </>
))
