import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteTask } from '../../../actions'
import { Button } from 'components'

class Task extends React.Component {
  render() {
    return (
      <li>
        {this.props.task}
        <Button name="delete" type="button" onClick={() => this.props.deleteTask(this.props.id)} />
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask }, dispatch)
}

export default connect(() => { return {} }, mapDispatchToProps)(Task)

