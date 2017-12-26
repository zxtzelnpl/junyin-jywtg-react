import './SpecialClassBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";
import teachers from '../constants/teacher'

class Item extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let {cover_picture,video_path,teacher_picture,timestamp,title} = this.props
    return (
        <div className="SpecialClassBriefItem">
          <video
              src={video_path}
              poster={cover_picture}
          >您的设备暂不支持此视频</video>
          <p>{title}</p>
        </div>
    )
  }
}


export default class SpecialClassBrief extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (this.props.specialClass.data.length === 0) {

      let value = {
        limit: 40,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }

      this.props.specialClassActions.fetchPostsIfNeeded(value)
    }
  }

  render(){
    let data = this.props.specialClass.data.slice(0,4)

    let htmlDom = data.map(item=>{
      return (<Item key={item.id} {...item} />)
    })

    let img_title = `${public_resource}/specialClass.jpg`
    let img_detail = `${public_resource}/detail.jpg`

    return(
        <div className="SpecialClassBrief">
          <p className="title">
            <span><img src={img_title}/>技术课程</span>
            <Link to="/SpecialClass"><img src={img_detail} alt=""/></Link>
          </p>
          <div className="wrap">
            {htmlDom}
          </div>
        </div>
    )

  }
}