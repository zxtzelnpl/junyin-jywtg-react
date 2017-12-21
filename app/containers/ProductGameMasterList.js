import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductGameMasterList from '../components/ProductGameMasterList'
import * as recordActionsFromOtherFile from '../actions/record'

function mapStateToProps(state) {
  return {
    user:state.user,
    record:state.record,
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
)(ProductGameMasterList)