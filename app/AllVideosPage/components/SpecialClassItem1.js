import './SpecialClassItem1.less'
import React from "react";
import MyVideo from '../../components/MyVideo'

export default class Item extends React.PureComponent{
  constructor(props){
    super(props)
  }

  render(){
    let {cover_picture,video_path,title,id,timestamp,videoPlay} = this.props
    return (
        <div className="SpecialClassBriefItem1">
          <MyVideo
            id={id}
            title={title}
            timestamp={timestamp}
            src={video_path}
            poster={cover_picture}
            onPlay={videoPlay}
          />
          <p>{title}</p>
        </div>
    )
  }
}