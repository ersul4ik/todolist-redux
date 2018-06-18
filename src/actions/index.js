export const ADD_TODO = 'ADD_TODO'

export const DELETE_TODO = 'DELETE_TODO'

export const SELECT_ALL_TODO = 'SELECT_ALL_TODO'


export function addTask(description_of_task) {
  return {
    type: ADD_TODO,
    payload: description_of_task,
  }
}

export function deleteTask(id_of_task) {
  return {
    type: DELETE_TODO,
    payload: id_of_task,
  }
}

