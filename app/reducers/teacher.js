import * as actionTypes from '../constants/teacher'

export const initialState = {
  isFetching: false,
  receivedAt:0,
  data: []
}

export default function disk(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TEACHER_REQUEST_JSONP:
      return {
        ...state,
        isFetching:true
      }
    case actionTypes.TEACHER_RECEIVED:
      return {
        data:state.data.concat(action.data),
        receivedAt:action.receivedAt,
        isFetching:false
      }
    default:
      return state
  }
}