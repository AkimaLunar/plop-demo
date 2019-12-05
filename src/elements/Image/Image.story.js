import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from 'Elements/Image'
import notes from './Image.notes.md'

storiesOf('Elements', module).add(
    'Image',
    () => (
        <Image />
    ),
    { notes }
)
