import React from 'react'
import {isAndroid, isTBS, androidPlay, x5Enter, x5Exit} from "../static/js/tools"

export default class MyVideo extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    if (isAndroid) {
      if (isTBS) {
        this.video.addEventListener('x5videoexitfullscreen', x5Exit)
        this.video.addEventListener('x5videoenterfullscreen', x5Enter)
      } else {
        // this.video.addEventListener('click', androidPlay)
      }
    }
    this.video.addEventListener('play', this.props.onPlay)
  }

  componentWillUnmount () {
    if (isAndroid) {
      if (isTBS) {
        this.video.removeEventListener('x5videoexitfullscreen', x5Exit)
        this.video.removeEventListener('x5videoenterfullscreen', x5Enter)
      } else {
        // this.video.removeEventListener('click', androidPlay)
      }
    }
    this.video.removeEventListener('play', this.props.onPlay)
  }

  render () {
    let {src, poster,id,timestamp,title} = this.props
    if (isAndroid) {
      if (isTBS) {
        return <video
            data-video-id={id}
            data-video-timestamp={timestamp}
            data-video-title={title}
            src={src}
            poster={poster}
            ref={video => {
              this.video = video
            }}
            controls={"false"}
            style={{
              'objectFit': 'contain'
            }}
            plays-inline="true"
            webkit-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
        >您的设备暂不支持此视频</video>
      }
      else {
        return <video
            data-video-id={id}
            data-video-timestamp={timestamp}
            data-video-title={title}
            src={src}
            poster={poster}
            controls={"false"}
            ref={video => {
              this.video = video
            }}
        >您的设备暂不支持此视频</video>

      }

    }
    else {
      return <video
          data-video-id={id}
          data-video-timestamp={timestamp}
          data-video-title={title}
          src={src}
          poster={poster}
          controls={"false"}
          ref={video => {
            this.video = video
          }}
      >您的设备暂不支持此视频</video>
    }

  }
}