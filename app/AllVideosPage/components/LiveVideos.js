import './LiveVideos.less';
import React from 'react';
import LoadControl from '../../components/LoadControl';
import Item from './LiveVideoItem'
import NoData from '../components/NoData'
import * as labels from '../const';
import {Video_browse_Record} from "../../constants/urls";
import {disk_diff} from "../../static/js/tools";
import moment from "moment/moment";

export default class LiveVideos extends React.PureComponent{
  constructor(props){
    super(props)
    this.load=this.load.bind(this);
    this.videoPlay=this.videoPlay.bind(this);
  }

  componentDidMount(){
    if (this.props.disk.data.length === 0) {
      this.props.diskActions.fetchPostsIfNeeded()
    }
  }

  load() {
    this.props.diskActions.fetchPostsIfNeeded()
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

  createVideosDom(){
    let {tab,disk} = this.props;
    let data = disk.data.filter(item=>{
      let title = item.title;
      // switch (tab){
      //   case labels.JUN_YIN_ZHI_BO:
      //   case labels.PAN_MIAN_DIAN_JIN:
      //     return title.indexOf('盘面点金')>-1
      //   case labels.YI_DONG_FU_PAN:
      //     return title.indexOf('异动复盘')>-1
      //   case labels.YOU_XUAN_ZAO_ZHI_DAO:
      //     return title.indexOf('优选早知道')>-1
      //   default:
      //     return false
      // }
      return title.indexOf('盘面点金')>-1||title.indexOf('异动复盘')>-1||title.indexOf('优选早知道')>-1
    });

    let htmlDom;
    if(data.length===0){
      return <NoData />
    }
    else{
      htmlDom= data.map(item=>{
        return (<Item
          key={item.id}
          {...item}
          tab={tab}
          videoPlay={this.videoPlay} />)
      });
    }

    return htmlDom;
  }

  render(){
    let {tab,onSubHeadToggle,disk} = this.props;

    let htmlDom = this.createVideosDom()

    return(
        <div className="Video" ref={wrap=>{this.wrap = wrap}}>
          <div className="nav">
            <ul onClick={onSubHeadToggle}>
              <li className={tab===labels.JUN_YIN_ZHI_BO||tab===labels.PAN_MIAN_DIAN_JIN?'active':'normal'}>盘面点金</li>
              <li className="line"/>
              <li className={tab===labels.YI_DONG_FU_PAN?'active':'normal'}>异动复盘</li>
              <li className="line"/>
              <li className={tab===labels.YOU_XUAN_ZAO_ZHI_DAO?'active':'normal'}>优选早知道</li>
            </ul>
          </div>
          <div className="wrap">
            {htmlDom}
          </div>
          <LoadControl isFetching={disk.isFetching} loadFunction={this.load}/>
        </div>
    )

  }
}