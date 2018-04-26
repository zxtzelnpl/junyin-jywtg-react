import './SpecialClassList.less'
import React from 'react'
import LoadControl from '../../components/LoadControl'
import Item from './SpecialClassItem2'
import {Video_browse_Record} from "../../constants/urls";
import moment from "moment/moment";
import {teacher_diff} from "../../static/js/tools";

export default class SpecialClassList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.teacher_picture = this.props.match.params.teacher;
    this.load=this.load.bind(this);
    this.videoPlay = this.videoPlay.bind(this);
  }

  componentDidMount() {
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  videoPlay(e){
    let video = e.target;
    let id=video.getAttribute('data-video-id')
      ,timestamp=video.getAttribute('data-video-timestamp')
      ,title=video.getAttribute('data-video-title');
    let {openid} = this.props.user
    let teacher_picture=this.teacher_picture;

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

  load() {
    this.props.specialClassActions.fetchPostsIfNeeded()
  }

  render() {
    let datas = this.props.specialClass.data.filter(item=>{
      return item.teacher_picture === this.teacher_picture
    })
    let htmlDom = datas.map(item => {
      return (<Item key={item.id} {...item} videoPlay={this.videoPlay}/>)
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