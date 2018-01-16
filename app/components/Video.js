import './Video.less'
import React from 'react'
import MyVideo from './MyVideo'
import LoadControl from './LoadControl'
import moment from "moment/moment"
import {disk_diff} from "../static/js/tools"
import {Video_browse_Record} from "../constants/urls";

class Item extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  videoPlay(){
    let {title,openid,timestamp,id} = this.props
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
          <MyVideo
              src={video_path}
              poster={cover_path}
              onPlay={this.videoPlay.bind(this)}
          />
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
    super(props)
    this.add=this.add.bind(this)
    let show = this.props.show||'pmdj'
    this.state={
      show:show
    }
  }

  componentDidMount(){
    if (this.props.disk.data.length === 0) {
      this.props.diskActions.fetchPostsIfNeeded()
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
    let htmlDom = data.map(item=>{
      return (<Item key={item.id} {...item} show={this.state.show} openid={this.props.user.openid}/>)
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
          <LoadControl isFetching={this.props.disk.isFetching} loadFunction={this.add}/>
        </div>
    )

  }
}