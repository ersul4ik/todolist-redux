import React from 'react'

import { Button } from 'components'

class ListTodos extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <ul className="list-group">
        {todos.map(todo =>
          (<li key={todo.id} className="list-group-item">
            {todo.description}
            <button
              type="button"
              name="delete"
            >
              <span aria-hidden="true">&times;</span>
            </button>
           </li>))}
      </ul>

    )
  }
}

export default ListTodos
