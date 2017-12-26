import {combineReducers} from 'redux'
import disk from './disk'
import news from './news'
import teacher from './teacher'
import user from './user'
import button from './button'
import record from './record'
import exchangeGuide from './exchangeGuide'
import specialClass from './specialClass'
export default combineReducers({
  disk,
  news,
  teacher,
  user,
  button,
  record,
  exchangeGuide,
  specialClass
})