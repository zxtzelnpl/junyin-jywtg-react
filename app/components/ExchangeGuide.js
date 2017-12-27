import './ExchangeGuide.less'
import React from 'react'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {video_cover, video_path, timestamp, title} = this.props
    return (
        <div className="ExchangeGuideItem">
          <video
              src={video_path}
              poster={video_cover}
          >您的设备暂不支持此视频
          </video>
          <div>
            <p>{title}</p>
            <span>{moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
        </div>
    )
  }
}

export default class ExchangeGuide extends React.Component{
  constructor(props){
    super(props)
    this.head_img = `${public_resource}/exchange_guide_head.jpg`
    this.checkLoading=this.checkLoading.bind(this)
  }

  componentDidMount(){
    if (this.props.exchangeGuide.data.length === 0) {

      let value = {
        limit: 10,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }

      this.props.exchangeGuideActions.fetchPostsIfNeeded(value)
    }
    document.addEventListener('scroll',this.checkLoading)
  }

  componentWillUnmount(){
    document.removeEventListener('scroll',this.checkLoading)
  }

  checkLoading(){
    let bottom_distance = parseInt(getComputedStyle(this.wrap).paddingBottom)
    let top = this.loading.getBoundingClientRect().top
    if(bottom_distance+top<window.innerHeight){
      this.add()
    }
  }

  add() {
    let datas = this.props.exchangeGuide.data
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
      this.props.exchangeGuideActions.fetchPostsIfNeeded(value)
    }
  }

  render(){
    let data = this.props.exchangeGuide.data
    let loading_img = `${public_resource}/loading.png`
    let loadingShow = this.props.exchangeGuide.isFetching?'visible':'hidden'
    let htmlDom = data.map(item=>{
      return (<Item key={item.id} {...item}/>)
    })

    return(
        <div className="ExchangeGuide" ref={wrap=>{this.wrap = wrap}}>
          <div className="title">
            <img src={this.head_img} alt=""/>
          </div>
          <div className="wrap">
            {htmlDom}
          </div>
          <div className="loading" ref={loading=>{this.loading=loading}} style={{'visibility':loadingShow}}>
            <img src={loading_img} />
          </div>
        </div>
    )

  }
}