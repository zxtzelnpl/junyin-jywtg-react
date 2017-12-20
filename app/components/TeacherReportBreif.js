import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import TeacherItem from './TeacherReportItem'
import {public_resource} from "../constants/urls";
import './TeacherReportBreif.less'
export default class TeacherReportBreif extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(this.props.teacher.data.length<10){
      let value = {
        limit:10,
        query_start_stamp:0,
        query_end_stamp:moment().format('X')
      }
      this.props.teacherActions.fetchPostsIfNeeded(value)
    }
  }

  render(){
    let data = this.props.teacher.data.slice(0,3)
    let teacher_img = `${public_resource}/teacher.jpg`
    let detail_img = `${public_resource}/detail.jpg`
    let htmlDom = (
        <div/>
    )
    if (data.length > 0) {
      htmlDom = data.map(item => {
        return <TeacherItem {...item} key={item.id}/>
      })
    }

    return (
        <div className="TeacherReportBreif">
          <p className="title">
            <span><img src={teacher_img} />君银内参</span>
            <Link to="/TeacherReport"><img src={detail_img} alt=""/></Link>
          </p>
          <div>
            {htmlDom}
          </div>
        </div>
    )
  }
}