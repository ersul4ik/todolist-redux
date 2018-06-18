import React from 'react'
import { Input, Button } from 'components'


const Field = ({ input_type, button_type, button_name,  ...props }) => (
  <div style={{ textAlign: 'center' }}>
    <h3>{ button_name }</h3>
    <Input type={ input_type } placeholder="Input new task" />
    <Button name={ button_name } type={ button_type } />
  </div>

)


export default Field
