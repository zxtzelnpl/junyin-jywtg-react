import React from 'react'

import {news_infomation} from '../constants/urls'
import {hex_md5} from '../static/js/md5-min'
import fetchJsonp from 'fetch-jsonp'

export default class Test extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', ' application/x-www-form-urlencoded')
    let now_stamp = Math.ceil(new Date().getTime()/1000)
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
    let url = news_infomation+`?now_stamp=${data.now_stamp}&key=${data.key}&id=581958`

    fetchJsonp(url)
        .then(res=>res.json())
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