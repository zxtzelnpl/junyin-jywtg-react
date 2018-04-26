import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LiveVideos from '../components/LiveVideos'
import * as diskActions from '../../actions/disk'

function mapStateToProps(state) {
  return {
    disk:state.disk,
    user:state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    diskActions:bindActionCreators(diskActions,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiveVideos)