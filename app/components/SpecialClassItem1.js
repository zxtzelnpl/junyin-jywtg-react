'use strict'

import './SpecialClassItem1.less'
import React from "react";
import MyVideo from './MyVideo'
import {teacher_diff} from "../static/js/tools";
import {Video_browse_Record} from "../constants/urls";
import moment from "moment/moment";

export default class Item extends React.PureComponent{
  constructor(props){
    super(props)
  }

  videoPlay(){
    let {title,openid,timestamp,teacher_picture,id} = this.props
    let type = '技术课程'
    let sort = teacher_diff(teacher_picture)
    let body = `openid=${openid}&Video_title=${title}&time=${moment.unix(timestamp).format('YYYY-MM-DD HH:mm')}&Video_type=${type}&Video_sort=${sort}&Video_id=${id}`
    fetch(Video_browse_Record,{
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
        .then(res=>res.text())
        .then(text=>{
          console.log(text)
        })
        .catch(err=>{
          console.log(err)
        })
  }

  render(){
    let {cover_picture,video_path,title} = this.props
    return (
        <div className="SpecialClassBriefItem1">
          <MyVideo
              src={video_path}
              poster={cover_picture}
              onPlay={this.videoPlay.bind(this)}
          />
          <p>{title}</p>
        </div>
    )
  }
}