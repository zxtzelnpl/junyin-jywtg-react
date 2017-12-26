import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SpecialClassList from '../components/SpecialClassList'
import * as specialClassActionsFromOtherFile from '../actions/specialClass'

function mapStateToProps(state) {
  return {
    specialClass:state.specialClass,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    specialClassActions:bindActionCreators(specialClassActionsFromOtherFile,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecialClassList)