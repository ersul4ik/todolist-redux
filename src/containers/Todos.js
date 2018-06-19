import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchTodos } from '../actions'
import { ListTodos } from 'components'


const mapStateToProps = (state) => {
  return { todos: state.todos }
}



const Todos = ({ todos }) => (
  <ListTodos todos={todos} />
)

const List = connect(mapStateToProps)(Todos)

export default List
