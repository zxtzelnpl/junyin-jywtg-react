import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TeacherReportBreif from '../components/TeacherReportBreif'
import * as teacherActionsFromOtherFile from '../actions/teacher'

function mapStateToProps(state) {
  return {
    teacher:state.teacher,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    teacherActions:bindActionCreators(teacherActionsFromOtherFile,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherReportBreif)