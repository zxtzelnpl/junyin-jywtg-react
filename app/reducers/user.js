import * as actionTypes from '../constants/user'

export const initialState = {
  isFetching: false,
  receivedAt: 0,
  phone: '',
  check: false
}

export default function disk(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERCHECK_REQUEST_POST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.USERCHECK_RECEIVED:
      return {
        isFetching: false,
        receivedAt: action.receivedAt,
        phone: action.phone,
        check: true
      }
    case actionTypes.USERCHECK_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        receivedAt: 0,
        phone: '',
        check: false
      }
    default:
      return state
  }
}