import * as actionTypes from '../constants/exchangeGuide'

export const initialState = {
  isFetching: false,
  receivedAt:0,
  data: []
}

export default function exchangeGuide(state = initialState, action) {
  switch (action.type) {
    case actionTypes.EXCHANGEGUIDE_REQUEST_JSONP:
      return {
        ...state,
        isFetching:true
      }
    case actionTypes.EXCHANGEGUIDE_RECEIVED:
      return {
        data:state.data.concat(action.data),
        receivedAt:action.receivedAt,
        isFetching:false
      }
    case actionTypes.EXCHANGEGUIDE_ERROR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}