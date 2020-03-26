import { storiesOf } from '@storybook/react'
import React from 'react'

import { Spacer, Typography } from '../components'
import { IonRouterLink } from '@ionic/react'
storiesOf('Elements / Typography', module).add('Headings', () => (
  <>
    <Spacer type="within" multiply={5}>
      <Typography color="primary" size="h1">
        Heading 1
      </Typography>
      <Typography size="h2">Heading 2</Typography>
      <Typography size="h3">Heading 3</Typography>
      <Typography size="h4" color="primary">
        Heading 4
      </Typography>
      <Typography size="h5">Heading 5</Typography>
      <Typography>
        <a href="https://example.org">Für die Main-Copy</a> nutzen wir die Open
        Sans zur optimalen Lesbarkeit. Auszeichnungen im Text erfolgen in
        Semibold oder Kursiv. Die Textfarbe ist White, Auszeichnungen dürfen
        auch Peach sein.. 4
      </Typography>
      <Typography size="small">
        <a href="https://example.org">Für die Main-Copy</a> nutzen wir die Open
        Sans zur optimalen Lesbarkeit. Auszeichnungen im Text erfolgen in
        Semibold oder Kursiv. Die Textfarbe ist White, Auszeichnungen dürfen
        auch Peach sein.. 4
      </Typography>
      <Typography size="fineprint">
        <a href="https://example.org">Für die Main-Copy</a> nutzen wir die Open
        Sans zur optimalen Lesbarkeit. Auszeichnungen im Text erfolgen in
        Semibold oder Kursiv. Die Textfarbe ist White, Auszeichnungen dürfen
        auch Peach sein.. 4
      </Typography>
    </Spacer>
    <Spacer style={{ backgroundColor: 'black' }} type="within" multiply={5}>
      <Typography color="background" size="h1">
        Heading 1
      </Typography>
      <Typography color="background">
        <IonRouterLink href="https://example.org" color="secondary">
          Lorem ipsum dolor sit
        </IonRouterLink>
        amet, consectetur adipiscing elit. Donec accumsan fermentum dignissim.
        Fusce maximus sed urna at porttitor. In eu sapien varius, rutrum tellus
        nec, feugiat nulla.
      </Typography>
    </Spacer>
  </>
))
