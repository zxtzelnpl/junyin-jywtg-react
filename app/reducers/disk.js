import * as actionTypes from '../constants/disk'

export const initialState = {
  isFetching: false,
  receivedAt: 0,
  data: []
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
        isFetching: false
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