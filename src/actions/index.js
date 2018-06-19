import axios from 'axios'

export const ADD_TODO = 'ADD_TODO'

export const DELETE_TODO = 'DELETE_TODO'

export const SELECT_ALL_TODO = 'SELECT_ALL_TODO'


export function fetchTodos() {
  return dispatch =>
    axios.get('http://127.0.0.1:4000/')
      .then((response) => {
        dispatch({ type: SELECT_ALL_TODO, payload: response.data.data })
      })
}

export function deleteTodo(id) {
  return dispatch =>
    axios.delete(`http://127.0.0.1:4000/pop/${id}`)
      .then(dispatch({ type: DELETE_TODO }))
}


export function addTask(text) {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:4000/todos',
      params: text,
    }).then(() => {
      dispatch({ type: ADD_TODO, payload: text })
    })
  }
}
