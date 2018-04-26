import './DiskRead.less'
import React from 'react'
import moment from 'moment'
import DiskItem from './DiskReadItem'
import LoadControl from '../../components/LoadControl'
import {Video_browse_Record} from "../../constants/urls";
import {disk_diff} from "../../static/js/tools";

export default class DiskRead extends React.PureComponent {
  constructor(props) {
    super(props)
    this.load=this.load.bind(this)
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

  load() {
    let datas = this.props.disk.data
    let len = datas.length
    if (len > 0) {
      let last = datas[len - 1]
      let query_start_stamp = 0;
      let query_end_stamp = last.timestamp

      let value = {
        limit: 5,
        query_start_stamp: query_start_stamp,
        query_end_stamp: query_end_stamp
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  render() {
    let htmlDom
    let datas = this.props.disk.data
    if (datas.length === 0) {
      htmlDom = (<div/>)
    }
    else {
      htmlDom = datas.map(item => {
        return <DiskItem {...item} key={item.id} videoPlay={this.videoPlay}/>
      })
    }

    return (
        <div className="diskRead">
          <div className="title">
            实盘解读
          </div>
          <div className="wrap">
            <div>
              {htmlDom}
            </div>
            <LoadControl isFetching={this.props.disk.isFetching} loadFunction={this.load}/>
          </div>
        </div>
    )
  }
}