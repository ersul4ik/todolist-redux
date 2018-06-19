import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootRuducer from './reducers/index'

const store = createStore(rootRuducer, applyMiddleware(thunkMiddleware))

export default store
