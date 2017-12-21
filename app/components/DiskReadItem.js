import React from 'react'
import moment from 'moment'
import './DiskReadItem.less'

export default class DiskItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let videoDom = <div />
    let {title,content,timestamp,video_path,cover_path} = this.props
    let timeArr = moment.unix(timestamp).format('MM-DD HH:mm').split(' ')
    if(video_path!==''){
      videoDom = (<video src={video_path} poster={cover_path}>
        <source src={video_path} type="video/mp4" />
      </video>)
    }
    return (
        <div className="readItem">
          <div className="read_time">
            <p>{timeArr[0]}<span className="circle" /></p>
            <p>{timeArr[1]}</p>
          </div>
          <div className="read_content_wrap">
            <p className="read_title">{title}</p>
            <p className="read_content">{content}</p>
            {videoDom}
          </div>
        </div>
    )
  }
}