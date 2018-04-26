import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SpecialClassBrief from '../components/SpecialClassBrief'
import * as specialClassActionsFromOtherFile from '../../actions/specialClass'

function mapStateToProps(state) {
  return {
    user:state.user,
    data:state.specialClass.data,
    isFetching:state.specialClass.isFetching
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
)(SpecialClassBrief)