import * as actionTypes from '../constants/user'
import {user_check} from '../constants/urls'
import fetchJsonp from "fetch-jsonp";
import {getTimeStamp} from "../static/js/tools";

const requestPosts = () => ({
  type: actionTypes.USERCHECK_REQUEST_POST
})

const received = (data) =>({
  type: actionTypes.USERCHECK_RECEIVED,
  receivedAt:getTimeStamp(),
  data
})

const fetchPosts = value => dispatch => {
  dispatch(requestPosts())
  let {phone,secret} = value
  let url = `${user_check}?phone=${phone}&secret=${secret}`

  return fetchJsonp(url)
      .then(response => response.json())
      .then(json => {
        if(json.res){
          dispatch(received(json.data))
        }
        else{
          console.log(json)
        }
      })
      .catch(err=>{
        console.log(err)
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