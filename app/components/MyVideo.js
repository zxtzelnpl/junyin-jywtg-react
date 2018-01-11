import React from 'react'
import {isAndroid, x5Enter, x5Exit} from "../static/js/tools"

export default class MyVideo extends React.Component {
  constructor(props) {
    super(props)
    this.isAndroid = isAndroid()
  }

  componentDidMount() {
    if(this.isAndroid){
      this.video.addEventListener('x5videoenterfullscreen', x5Enter)
      this.video.addEventListener('x5videoexitfullscreen', x5Exit)
    }
  }

  componentWillUnmount() {
    if(this.isAndroid){
      this.video.removeEventListener('x5videoenterfullscreen', x5Enter)
      this.video.removeEventListener('x5videoexitfullscreen', x5Exit)
    }
  }

  render() {
    let {src,poster} = this.props
    if(this.isAndroid){
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