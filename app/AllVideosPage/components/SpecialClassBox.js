import React from 'react'
import {public_resource} from "../../constants/urls";
import {Link} from 'react-router-dom'
import Item from './SpecialClassItem1'
import moment from "moment/moment";
import {Video_browse_Record} from "../../constants/urls";
import {teacher_diff} from "../../static/js/tools";

class SpecialClassBox extends React.PureComponent{
  constructor(props){
    super(props)
    this.videoPlay = this.videoPlay.bind(this);
  }

  videoPlay(e){
    let video = e.target;
    let id=video.getAttribute('data-video-id')
      ,timestamp=video.getAttribute('data-video-timestamp')
      ,title=video.getAttribute('data-video-title');
    let {openid,teacher_picture} = this.props
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
    let {data,teacher_picture,name} = this.props;

    let _data = data.slice(0,2)
    let teacherDom = _data.map(item=>{
      return <Item key={item.id} {...item} videoPlay={this.videoPlay}/>
    })

    let img_detail = `${public_resource}/detail.jpg`
    let url = `/SpecialClassList/${teacher_picture}`
    return (
      <div className="SpecialClassBox">
        <p className="title">{name} <Link to={url}><img src={img_detail} alt=""/></Link></p>
        <div className="SpecialClassBoxWrap">
          {teacherDom}
        </div>
      </div>
    )
  }
}

export default SpecialClassBox