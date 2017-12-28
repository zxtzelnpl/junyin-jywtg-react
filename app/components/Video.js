import './Video.less'
import React from 'react'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";

class Item extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let {video_path, timestamp, title,cover_path} = this.props
    let show = this.props.show
    let reg
    if(show==='pmdj'){
      reg = /盘面点金/
    }
    if(show==='ydfp'){
      reg = /异动复盘/
    }
    if(show==='yxzzd'){
      reg = /优选早知道/
    }

    return (
        <div className="VideoItem" style={{'display':reg.test(title)?'flex':'none'}}>
          <video
              src={video_path}
              poster={cover_path}
              controls="false"
              style={{
                'objectFit': 'fill'
              }}
              playsinline="true"
              webkit-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
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

export default class Video extends React.PureComponent{
  constructor(props){
    console.log(props)
    super(props)
    this.head_img = `${public_resource}/exchange_guide_head.jpg`
    this.checkLoading=this.checkLoading.bind(this)
    let show = this.props.show||'pmdj'
    this.state={
      show:show
    }
  }

  componentDidMount(){
    if (this.props.disk.data.length === 0) {
      this.props.diskActions.fetchPostsIfNeeded()
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
    this.props.diskActions.fetchPostsIfNeeded()
  }

  onClick(e){
    let text = e.target.innerHTML
    if(text === '盘面点金'){
      this.setState({
        show:'pmdj'
      })
    }
    else if(text === '异动复盘'){
      this.setState({
        show:'ydfp'
      })
    }else if(text === '优选早知道'){
      this.setState({
        show:'yxzzd'
      })
    }
  }

  render(){
    let data = this.props.disk.data.filter(item=>{
      let title = item.title
      return title.indexOf('盘面点金')>-1||title.indexOf('异动复盘')>-1||title.indexOf('优选早知道')>-1
    })
    let loading_img = `${public_resource}/loading.png`
    let loadingShow = this.props.disk.isFetching?'visible':'hidden'
    let htmlDom = data.map(item=>{
      return (<Item key={item.id} {...item} show={this.state.show}/>)
    })
    let show = this.state.show

    return(
        <div className="Video" ref={wrap=>{this.wrap = wrap}}>
          <div className="nav">
            <ul onClick={this.onClick.bind(this)}>
              <li className={show==='pmdj'?'active':'normal'}>盘面点金</li>
              <li className="line"/>
              <li className={show==='ydfp'?'active':'normal'}>异动复盘</li>
              <li className="line"/>
              <li className={show==='yxzzd'?'active':'normal'}>优选早知道</li>
            </ul>
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