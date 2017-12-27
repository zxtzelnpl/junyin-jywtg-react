import * as actionTypes from '../constants/disk'
import moment from "moment/moment";
const dayInterval = 5

export const initialState = {
  isFetching: false,
  receivedAt: 0,
  data: [],
  query_start_stamp:moment().startOf('day').subtract(dayInterval,'days').format('X'),
  query_end_stamp:moment().format('X')
}

export default function disk(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DISK_REQUEST_JSONP:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.DISK_RECEIVED:
      return {
        data: state.data.concat(action.data),
        receivedAt: action.receivedAt,
        isFetching: false,
        query_start_stamp:moment.unix(state.query_start_stamp).subtract(dayInterval,'days').format('X'),
        query_end_stamp:state.query_start_stamp
      }
    case actionTypes.DISK_ERROR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}