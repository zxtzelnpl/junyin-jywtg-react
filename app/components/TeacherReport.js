import React from 'react'
import {getTimeStamp} from '../static/js/tools'
export default class TeacherReport extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(this.props.teacher.data.length<10){
      let value = {
        limit:10,
        query_start_stamp:0,
        query_end_stamp:getTimeStamp()
      }
      this.props.teacherActions.fetchPostsIfNeeded(value)
    }
  }

  render(){
    return (
        <div>
          TeacherReport
        </div>
    )
  }
}