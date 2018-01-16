import React from 'react'
import {isAndroid, x5Enter, x5Exit} from "../static/js/tools"

export default class MyVideo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.video.addEventListener('play',this.props.onPlay)
    this.video.addEventListener('x5videoexitfullscreen', x5Exit)
    if(isAndroid){
      this.video.addEventListener('x5videoenterfullscreen', x5Enter)
    }
  }

  componentWillUnmount() {
    this.video.removeEventListener('play',this.props.onPlay)
    this.video.removeEventListener('x5videoexitfullscreen', x5Exit)
    if(isAndroid){
      this.video.removeEventListener('x5videoenterfullscreen', x5Enter)
    }
  }

  render() {
    let {src,poster} = this.props
    if(isAndroid){
      return(
          <video
              src={src}
              poster={poster}
              style={{
                'objectFit': 'contain'
              }}
              ref={video=>{this.video=video}}
              plays-inline="true"
              webkit-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
          >您的设备暂不支持此视频</video>
      )
    }
    else{
      return(
          <video
              src={src}
              poster={poster}
              controls="false"
              style={{
                'objectFit': 'contain'
              }}
              ref={video=>{this.video=video}}
              plays-inline="true"
              webkit-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
          >您的设备暂不支持此视频</video>
      )
    }
  }
}