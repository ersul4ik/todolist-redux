import { ADD_TODO, SELECT_ALL_TODO, DELETE_TODO } from '../actions/index'

const initialState = {
  todos: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("in add", action.payload)
      return { ...state, todos: [...state.todos, action.payload] }
    case SELECT_ALL_TODO:
      return state
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1)],
      }
    default:
      return state
  }
}

export default rootReducer
