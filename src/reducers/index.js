import {
  combineReducers
} from 'redux'
import config from './config'
import layouts from './layouts'

const rootReducer = combineReducers({
  config,
  layouts

})

export default rootReducer