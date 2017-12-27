import './SpecialClassList.less'
import React from 'react'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";
import teachers from '../constants/teacher'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {cover_picture, video_path, teacher_picture, timestamp, title} = this.props
    return (
        <div className="SpecialClassListItem">
          <video
              src={video_path}
              poster={cover_picture}
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


export default class SpecialClassList extends React.Component {
  constructor(props) {
    super(props)
    this.teacher_picture = this.props.match.params.teacher
    this.checkLoading=this.checkLoading.bind(this)
  }

  componentDidMount() {
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
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
    this.props.specialClassActions.fetchPostsIfNeeded()
  }

  render() {
    let datas = this.props.specialClass.data.filter(item=>{
      return item.teacher_picture === this.teacher_picture
    })
    let loading_img = `${public_resource}/loading.png`
    let loadingShow = this.props.specialClass.isFetching?'visible':'hidden'
    let htmlDom = datas.map(item => {
      return (<Item key={item.id} {...item} />)
    })


    return (
        <div className="SpecialClassList" ref={wrap=>{this.wrap = wrap}}>
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