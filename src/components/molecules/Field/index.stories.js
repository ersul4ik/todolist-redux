import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field } from 'components'

storiesOf('Field', module)
  .add('default', () => (
    <Field name="field" />
  ))
  .add('rename placeholder', () => (
    <Field name="Delete/Add" placeholder="It is true"  />
  ))
  .add('type radio invalid with error message', () => (
    <Field name="Radio" type="radio" />
  ))
