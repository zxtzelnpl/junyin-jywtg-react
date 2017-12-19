import React from 'react'
import moment from 'moment'
export default class TeacherReport extends React.Component{
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
    return (
        <div>
          TeacherReport
        </div>
    )
  }
}