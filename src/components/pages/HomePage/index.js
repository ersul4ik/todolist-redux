import React from 'react'
import { Provider } from 'react-redux'

import store from '../../../store'
import Todos from '../../../containers/Todos'
import AddTodo from '../../../containers/AddTodo'


const HomePage = () => (
  <Provider store={store}>
    <div>
      <AddTodo />
      <Todos />
    </div>
  </Provider>
)


export default HomePage
