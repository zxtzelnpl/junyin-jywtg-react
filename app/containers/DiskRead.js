import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DiskRead from '../components/DiskRead'
import * as diskActionsFromOtherFile from '../actions/disk'

function mapStateToProps (state) {
  return {
    disk: state.disk,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    diskActions: bindActionCreators(diskActionsFromOtherFile, dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiskRead)