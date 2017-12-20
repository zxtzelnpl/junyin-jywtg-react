import React from 'react'
import {connect} from 'react-redux'
import * as userActionsFromOtherFile from "../actions/user";
import {bindActionCreators} from "redux";
import Center from '../components/Center'

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Center)