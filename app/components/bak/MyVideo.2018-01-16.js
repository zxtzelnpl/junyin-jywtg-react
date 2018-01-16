import React from 'react'
import {isAndroid, x5Enter, x5Exit,androidPlay} from "../static/js/tools"

export default class MyVideo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(isAndroid){
      this.video.addEventListener('click',androidPlay)
      this.video.addEventListener('x5videoexitfullscreen', x5Exit)
      this.video.addEventListener('x5videoenterfullscreen', x5Enter)
    }
    this.video.addEventListener('play',this.props.onPlay)
  }

  componentWillUnmount() {
    if(isAndroid){
      this.video.removeEventListener('click',androidPlay)
      this.video.removeEventListener('x5videoexitfullscreen', x5Exit)
      this.video.removeEventListener('x5videoenterfullscreen', x5Enter)
    }
    this.video.removeEventListener('play',this.props.onPlay)
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
              plays-inline="true"
              webkit-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              ref={video=>{this.video=video}}
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
              plays-inline="true"
              webkit-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              ref={video=>{this.video=video}}
          >您的设备暂不支持此视频</video>
      )
    }
  }
}