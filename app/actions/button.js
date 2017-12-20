import * as actionTypes from '../constants/button'

export const logoChange=(flag)=>({
  type:actionTypes.LOGO_CHANGE,
  flag
})

export const footerChange=(flag)=>({
  type:actionTypes.FOOTER_CHANGE,
  flag
})

export const writeChange=(flag)=>({
  type:actionTypes.WRITE_CHANGE,
  flag
})