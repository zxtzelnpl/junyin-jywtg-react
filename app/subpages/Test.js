import React from 'react'

import {disk_read} from '../constants/urls'
import {hex_md5} from '../static/js/md5-min'
import moment from 'moment'

export default class Test extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', ' application/x-www-form-urlencoded')
    let now_stamp = moment().format('X')
    let _key='jgjy'+now_stamp
    let key = hex_md5(_key)
    let limit=10

    let data={
      now_stamp:now_stamp,
      key:key,
      limit:limit,
      query_start_stamp:0,
      query_end_stamp:now_stamp
    }

    let request = new Request(disk_read, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'include',
      body: `now_stamp=${data.now_stamp}&key=${data.key}&limit=${data.limit}&query_start_stamp=${data.query_start_stamp}&query_end_stamp=${data.query_end_stamp}`,
      headers: myHeaders
    })
    fetch(request)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(json=>{
          console.log(json)
        })
  }

  render(){
    return(
        <div>
          123
        </div>
    )
  }
}