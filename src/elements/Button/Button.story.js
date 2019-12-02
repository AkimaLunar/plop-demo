import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from 'Elements/Button'
import notes from './Button.notes.md'

storiesOf('Elements', module).add(
    'Button',
    () => (
            <Button />

    ),
    { notes }
)
