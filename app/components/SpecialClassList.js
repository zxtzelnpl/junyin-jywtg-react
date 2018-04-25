import './SpecialClassList.less'
import React from 'react'
import MyVideo from './MyVideo'
import LoadControl from './LoadControl'
import moment from "moment/moment";
import {teacher_diff} from "../static/js/tools"
import {Video_browse_Record} from "../constants/urls";

class Item extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  videoPlay(){
    let {title,openid,timestamp,teacher_picture,id} = this.props
    let type = '技术课程'
    let sort = teacher_diff(teacher_picture)
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
    let {cover_picture, video_path, timestamp, title} = this.props
    return (
        <div className="SpecialClassListItem">
          <MyVideo
              src={video_path}
              poster={cover_picture}
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


export default class SpecialClassList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.teacher_picture = this.props.match.params.teacher
    this.load=this.load.bind(this)
  }

  componentDidMount() {
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  load() {
    this.props.specialClassActions.fetchPostsIfNeeded()
  }

  render() {
    let datas = this.props.specialClass.data.filter(item=>{
      return item.teacher_picture === this.teacher_picture
    })
    let htmlDom = datas.map(item => {
      return (<Item key={item.id} {...item} openid={this.props.user.openid}/>)
    })


    return (
        <div className="SpecialClassList" ref={wrap=>{this.wrap = wrap}}>
          <div className="wrap">
            {htmlDom}
          </div>
          <LoadControl isFetching={this.props.specialClass.isFetching} loadFunction={this.load}/>
        </div>
    )

  }
}