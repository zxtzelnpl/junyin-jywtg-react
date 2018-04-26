import './SpecialClassBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource, Video_browse_Record} from "../../constants/urls"
import Item from './SpecialClassItem1';
import NoData from './NoData'
import moment from "moment/moment";
import {teacher_diff} from "../../static/js/tools";
import * as labels from '../const'

export default class SpecialClassBrief extends React.Component{
  constructor(props){
    super(props)
    this.videoPlay=this.videoPlay.bind(this)
  }

  componentDidMount(){
    if (this.props.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  createHtmlDom(){
    let data = this.props.data;
    let htmlDom;
    if(data.length>0){
      let data = this.props.data.slice(0,4)
      htmlDom = data.map(item=>{
        return (<Item key={item.id} {...item} videoPlay={this.videoPlay} />)
      })
    }
    else{
      htmlDom = <NoData loading={true}/>
    }

    return htmlDom;
  }

  videoPlay(e){
    let video = e.target;
    let id=video.getAttribute('data-video-id')
      ,timestamp=video.getAttribute('data-video-timestamp')
      ,title=video.getAttribute('data-video-title');
    let {openid} = this.props.user
    let teacher_picture='';

    this.props.data.forEach((d)=>{
      if(d.id===id){
        teacher_picture = d.teacher_picture
      }
    })

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

  render(){
    let htmlDom = this.createHtmlDom();

    let img_title = `${public_resource}/specialClass.jpg`
    let img_detail = `${public_resource}/detail.jpg`

    return(
        <div className="SpecialClassBrief">
          <p className="title">
            <span><img src={img_title}/>技术课程</span>
            <Link to={
              {
                pathname:'VideosPage',
                state:labels.JI_SHU_KE_CHENG
              }
            }><img src={img_detail} alt=""/></Link>
          </p>
          <div className="wrap">
            {htmlDom}
          </div>
        </div>
    )
  }
}