import * as actionTypes from '../constants/user'
import {user_check} from '../constants/urls'
import moment from 'moment'

const requestPosts = () => ({
  type: actionTypes.USERCHECK_REQUEST_POST
})

const received = (phone) =>({
  type: actionTypes.USERCHECK_RECEIVED,
  receivedAt:moment().format('X'),
  phone
})

const receivedError = () =>({
  type: actionTypes.USERCHECK_ERROR
})

const fetchPosts = value => dispatch => {
  dispatch(requestPosts())
  let {phone,secret} = value
  let url = `${user_check}?phone=${phone}&phone_pwd=${secret}`

  return fetch(url)
      .then(response => response.json())
      .then(json => {
        if(json.error==='1'){
          dispatch(received(phone))
        }
        else{
          alert(json.msg)
          dispatch(receivedError())
        }
      })
      .catch(err=>{
        alert('网络连接错误，请稍后再试')
        dispatch(receivedError())
      })
}

const shouldFetchPosts = (state) => {
  return !state.user.isFetching;
}

export const fetchPostsIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(value))
  }
}

export const logout = ()=>({
  type: actionTypes.USER_LOGOUT
})