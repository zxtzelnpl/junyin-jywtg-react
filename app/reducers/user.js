import * as actionTypes from '../constants/user'

export const initialState = {
  isFetching: false,
  receivedAt:0,
  phone:''
}

export default function disk(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERCHECK_REQUEST_POST:
      return {
        ...state,
        isFetching:true
      }
    case actionTypes.USERCHECK_RECEIVED:
      return {
        receivedAt:action.receivedAt,
        isFetching:false
      }
    default:
      return state
  }
}