import React from 'react'
import moment from "moment/moment";
import './TeacherReportDetail.less'
export default class TeacherReportDetail extends React.Component{
  constructor(props){
    super(props)
    this.id = this.props.match.params.id
    this.teacherItem = this.props.teacher.data.filter(item=>{
      return item.id === this.id
    })
  }

  componentDidMount(){
    console.log('TeacherReportDetail')
    console.log(this.teacherItem)
    console.log('TeacherReportDetail')
    if(this.teacherItem.length===0){
      this.props.history.push('/TeacherReport')
    }
  }

  render(){
    let htmlDom
    if(this.teacherItem.length>0){
      let teacherItem = this.teacherItem[0]
      let {content,id,title,timestamp} = teacherItem
      htmlDom= (
          <div>
            <div className="detail_title">{title}</div>
            <div className="detail_time">{moment.unix(timestamp).format('YYYY-MM-DD hh:mm')}</div>
            <div className="detail_content" dangerouslySetInnerHTML={{__html:content}} />
          </div>
      )
    }
    else{
      htmlDom=(
          <div />
      )
    }
    return (
        <div className="teacherReportDetail">
          {htmlDom}
        </div>
    )
  }
}