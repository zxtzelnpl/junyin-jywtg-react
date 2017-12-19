import * as actionTypes from '../constants/teacher'
import {teacher_report} from '../constants/urls'
import {hex_md5} from '../static/js/md5-min'
import {apiKey} from "../../config/keys";
import fetchJsonp from 'fetch-jsonp'
import moment from 'moment'

const requestPosts = () => ({
  type: actionTypes.TEACHER_REQUEST_JSONP
})

const received = (data) =>({
  type: actionTypes.TEACHER_RECEIVED,
  receivedAt:moment().format('X'),
  data
})

const fetchPosts = value => dispatch => {
  dispatch(requestPosts())
  let {limit,query_start_stamp,query_end_stamp} = value
  let now_stamp = moment().format('X')
  let key = hex_md5(apiKey+now_stamp)
  let url = `${teacher_report}?now_stamp=${now_stamp}&key=${key}&limit=${limit}&query_start_stamp=${query_start_stamp}&query_end_stamp=${query_end_stamp}`

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
  return !state.teacher.isFetching;
}

export const fetchPostsIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(value))
  }
}