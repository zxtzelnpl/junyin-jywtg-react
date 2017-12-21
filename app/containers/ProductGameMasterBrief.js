import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductGameMasterBrief from '../components/ProductGameMasterBrief'
import * as recordActionsFromOtherFile from '../actions/record'

function mapStateToProps(state) {
  return {
    record:state.record,
    user:state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    recordActions:bindActionCreators(recordActionsFromOtherFile,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductGameMasterBrief)