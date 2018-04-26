import './DiskReadBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import DiskItem from './DiskReadItem'
import {public_resource, Video_browse_Record} from "../../constants/urls";
import {disk_diff} from "../../static/js/tools";

export default class DiskReadBrief extends React.PureComponent {
  constructor(props) {
    super(props)
    this.videoPlay=this.videoPlay.bind(this)
  }

  componentDidMount() {
    if (this.props.disk.data.length === 0) {
      let value = {
        limit: 10,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  videoPlay(e){
    let openid = this.props.user.openid;
    let video = e.target;
    let id=video.getAttribute('data-video-id')
      ,timestamp=video.getAttribute('data-video-timestamp')
      ,title=video.getAttribute('data-video-title');

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
    let htmlDom
    let datas = this.props.disk.data.slice(0,2);
    let disk_img = `${public_resource}/disk.jpg`;
    let detail_img = `${public_resource}/detail.jpg`;
    if (datas.length === 0) {
      htmlDom = (<div/>)
    }
    else {
      htmlDom = datas.map(item => {
        return <DiskItem {...item} key={item.id} videoPlay={this.videoPlay}/>
      })
    }


    return (
        <div className="diskReadBrief">
          <p className="title">
            <span><img src={disk_img}/>实盘解读</span>
            <Link to="/DiskRead"><img src={detail_img} alt=""/></Link>
          </p>
          <div className="wrap">{htmlDom}</div>
        </div>
    )
  }
}