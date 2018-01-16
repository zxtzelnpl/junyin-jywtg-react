import React from 'react'
import MyVideo from './MyVideo'
import moment from 'moment'
import {disk_diff} from '../static/js/tools'
import './DiskReadItem.less'
import {Video_browse_Record} from "../constants/urls";

export default class DiskItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  videoPlay(){
    let {title,openid,timestamp,id} = this.props
    let type='君银直播'
    let sort=disk_diff(title)
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

  render() {
    let videoDom = <div/>
    let pictureDom = <div/>
    let {title, content, timestamp, video_path, cover_path, picture} = this.props
    let timeArr = moment.unix(timestamp).format('MM-DD HH:mm').split(' ')
    if (video_path !== '') {
      videoDom =
          (<MyVideo
              src={video_path}
              poster={cover_path}
              onPlay={this.videoPlay.bind(this)}
          />)
    }
    if (picture !== null || picture !== '') {
      pictureDom = (<img src={picture}/>)
    }
    return (
        <div className="readItem">
          <div className="read_time">
            <p>{timeArr[0]}<span className="circle"/></p>
            <p>{timeArr[1]}</p>
          </div>
          <div className="read_content_wrap">
            <p className="read_title">{title}</p>
            <p className="read_content">{content}</p>
            {videoDom}
            {pictureDom}
          </div>
        </div>
    )
  }
}