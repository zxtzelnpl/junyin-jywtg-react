import * as actionTypes from '../constants/specialClass'
import moment from "moment/moment"
const dayInterval = 30


export const initialState = {
  isFetching: false,
  receivedAt:0,
  data: [],
  query_start_stamp:moment().startOf('day').subtract(dayInterval,'days').format('X'),
  query_end_stamp:moment().format('X')
}

export default function specialClass(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case actionTypes.SPECIALCLASS_REQUEST_JSONP:
      return {
        ...state,
        isFetching:true
      }
    case actionTypes.SPECIALCLASS_RECEIVED:
      return {
        data:state.data.concat(action.data),
        receivedAt:action.receivedAt,
        isFetching:false,
        query_start_stamp:moment.unix(state.query_start_stamp).subtract(dayInterval,'days').format('X'),
        query_end_stamp:state.query_start_stamp
      }
    case actionTypes.SPECIALCLASS_ERROR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}