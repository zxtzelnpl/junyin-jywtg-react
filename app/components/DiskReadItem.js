import React from 'react'
import MyVideo from './MyVideo'
import moment from 'moment'
import './DiskReadItem.less'

export default class DiskItem extends React.PureComponent {
  constructor(props) {
    super(props)
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