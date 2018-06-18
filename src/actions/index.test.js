import { addTodo } from '../actions/index'

test('ADD_TODO', () => {
  expect(addTodo(1)).toEqual({
    type: 'ADD_TODO',
    payload: 1,
  })
}
)

