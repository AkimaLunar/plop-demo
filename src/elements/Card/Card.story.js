import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from 'Elements/Card'
import notes from './Card.notes.md'

storiesOf('Elements', module).add(
    'Card',
    () => (
        <Card />
    ),
    { notes }
)
