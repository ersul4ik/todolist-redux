import { createStore } from 'redux'
import rootRuducer from './reducers/index'

const store = createStore(rootRuducer)

export default store
