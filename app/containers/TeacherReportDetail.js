import React from 'react'
import { connect } from 'react-redux'
import TeacherReportDetail from '../components/TeacherReportDetail'

function mapStateToProps(state) {
  return {
    teacher:state.teacher,
    user:state.user
  }
}

export default connect(
    mapStateToProps
)(TeacherReportDetail)