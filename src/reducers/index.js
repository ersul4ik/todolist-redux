import { ADD_TODO, SELECT_ALL_TODO, DELETE_TODO } from '../actions/index'

const inititalState = {
  todos: [],
}

const rootReducer = (state = inititalState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    case SELECT_ALL_TODO:
      return { ...state, todos: action.payload }
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.task_id !== action.payload) }
    default:
      return state
  }
}

export default rootReducer
