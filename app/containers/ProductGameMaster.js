import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductGameMaster from '../components/ProductGameMaster'
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
)(ProductGameMaster)