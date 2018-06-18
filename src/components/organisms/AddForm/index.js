import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, ListTodo } from 'components'
import { addTask } from '../../../actions'

class AddForm extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
      </div>
    )
  }
}


export default AddForm
