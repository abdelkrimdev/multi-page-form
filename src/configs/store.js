import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

import { form } from '../reducers/form.reducer'

const store = createStore(
  combineReducers({
    form
  }),
  applyMiddleware(loggerMiddleware)
)

export default store
