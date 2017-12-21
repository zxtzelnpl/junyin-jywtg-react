import * as actionTypes from '../constants/record'
import {user_record} from '../constants/urls'

const requestPosts = () => ({
  type: actionTypes.RECORD_REQUEST_JSONP
})

const received = (data) =>({
  type: actionTypes.RECORD_RECEIVED,
  data
})

const receivedError = () => ({
  type:actionTypes.RECORD_ERROR
})

const fetchPosts = value => dispatch => {
  dispatch(requestPosts())
  let url = `${user_record}?openid=${value}`

  return fetch(url)
      .then(response => response.json())
      .then(json => {
        if(json.error === '0'){
          dispatch(received(json.data))
        }
        else{
          console.log(json)
          dispatch(receivedError())
        }
      })
      .catch(err=>{
        console.log(err)
        dispatch(receivedError())
      })
}

const shouldFetchPosts = (state) => {
  return !state.record.isFetching;
}

export const fetchPostsIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(value))
  }
}