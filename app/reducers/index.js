import {combineReducers} from 'redux'
import disk from './disk'
import news from './news'
import teacher from './teacher'
import user from './user'
export default combineReducers({
  disk,
  news,
  teacher,
  user
})