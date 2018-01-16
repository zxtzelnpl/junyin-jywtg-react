import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SpecialClass from '../components/SpecialClass'
import * as specialClassActionsFromOtherFile from '../actions/specialClass'

function mapStateToProps(state) {
  return {
    user:state.user,
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
)(SpecialClass)