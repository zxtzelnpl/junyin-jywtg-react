import React from 'react';
import MyVideo from '../../components/MyVideo';
import moment from "moment/moment";
import * as labels from '../const';

export default class LiveVideoItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let {video_path, timestamp,title,cover_path,tab,id,videoPlay} = this.props;
    let reg;
    switch(tab){
      case labels.PAN_MIAN_DIAN_JIN:
      case labels.JUN_YIN_ZHI_BO:
        reg = /盘面点金/
        break;
      case labels.YI_DONG_FU_PAN:
        reg = /异动复盘/
        break;
      case labels.YOU_XUAN_ZAO_ZHI_DAO:
        reg = /优选早知道/
        break;
      default:
          return null;
    }

    return (
      <div className="VideoItem" style={{'display':reg.test(title)?'flex':'none'}}>
        <MyVideo
          id={id}
          timestamp={timestamp}
          title={title}
          src={video_path}
          poster={cover_path}
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