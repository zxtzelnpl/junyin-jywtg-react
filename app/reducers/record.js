import * as actionTypes from '../constants/record'

export const initialState = {
  isFetching: false,
  data: [],
  receive:false,
}

export default function disk(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECORD_REQUEST_JSONP:
      return {
        ...state,
        isFetching:true,
        receive:false,
      }
    case actionTypes.RECORD_RECEIVED:
      return {
        data:action.data,
        isFetching:false,
        receive:true,
      }
    case actionTypes.RECORD_ERROR:
      return {
        ...state,
        isFetching: false,
        receive:false,
      }
    default:
      return state
  }
}