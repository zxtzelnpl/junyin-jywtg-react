import React from 'react'
import './TeacherReportItem.less'
import moment from 'moment'
import {Link} from "react-router-dom";
import {public_resource} from "../constants/urls";

export default class TeacherItem extends React.Component{
  render(){
    let {id,central_idea,title,timestamp} = this.props
    let url=`/TeacherReportDetail/${id}`
    let teacher_report_img_num = Number(id)%14+1
    let item_url = `${public_resource}/teacher_report/${teacher_report_img_num}.jpg`
    return (
        <Link to={url}>
          <div className="teacherItem">
            <div className="left">
              <p className="teacher_item_title">{title}</p>
              <p className="teacher_item_central">{central_idea}</p>
              <p className="teacher_item_time">{moment.unix(timestamp).format('YYYY-MM-DD HH:mm')}</p>
            </div>
            <div className="right">
              <img src={item_url} alt=""/>
            </div>
          </div>
        </Link>

    )
  }
}