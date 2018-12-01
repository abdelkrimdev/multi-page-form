import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

const store = createStore(
  combineReducers({

  }),
  applyMiddleware(loggerMiddleware)
)

export default store
