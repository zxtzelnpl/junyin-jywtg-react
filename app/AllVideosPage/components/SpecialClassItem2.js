import React from "react";
import MyVideo from '../../components/MyVideo';
import moment from "moment/moment";

class Item extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let {cover_picture, video_path, timestamp, title,id,videoPlay} = this.props
    return (
      <div className="SpecialClassListItem">
        <MyVideo
          id={id}
          title={title}
          timestamp={timestamp}
          src={video_path}
          poster={cover_picture}
          onPlay={videoPlay}
        />
        <div>
          <p>{title}</p>
          <span>{moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')}</span>
        </div>
      </div>
    )
  }
}

export default Item