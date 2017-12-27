import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Video from '../components/Video'
import * as exchangeGuideActionsFromOtherFile from '../actions/exchangeGuide'

function mapStateToProps(state) {
  return {
    exchangeGuide:state.exchangeGuide,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    exchangeGuideActions:bindActionCreators(exchangeGuideActionsFromOtherFile,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Video)