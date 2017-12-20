import * as actionTypes from '../constants/button'

const initialState = {
  footer: true,
  logo: true,
  write:false
}

export default function button(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGO_CHANGE:
      return {
        ...state,
        logo: action.flag
      }
    case actionTypes.FOOTER_CHANGE:
      return {
        ...state,
        footer: action.flag
      }
    case actionTypes.WRITE_CHANGE:
      return {
        ...state,
        write: action.flag
      }
    default:
      return state
  }
}