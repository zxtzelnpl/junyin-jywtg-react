import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DiskReadBrief from '../components/DiskReadBrief'
import * as diskActionsFromOtherFile from '../actions/disk'

function mapStateToProps(state) {
  return {
    disk:state.disk,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    diskActions:bindActionCreators(diskActionsFromOtherFile,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiskReadBrief)