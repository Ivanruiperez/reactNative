import { combineReducers } from 'redux'
import factReducer from './factReducer'

const rootReducer = combineReducers({ factReducer })

export default rootReducer