import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button } from 'components'
import { deleteTodo } from '../../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
  }
}

class ListTodos extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <div>
        <ul className="list-group">
          {todos.map(todo =>
            (<li key={todo.task_id} className="list-group-item">
              {todo.description}
              <button
                type="button"
                className="close right"
                aria-label="Close"
                onClick={() => this.props.deleteTodo(todo.task_id)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>))}
        </ul>
      </div>

    )
  }
}


export default ListTodos
