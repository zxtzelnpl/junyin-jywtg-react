import * as actionTypes from '../constants/specialClass'

export const initialState = {
  isFetching: false,
  receivedAt:0,
  data: []
}

export default function specialClass(state = initialState, action) {
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
        isFetching:false
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