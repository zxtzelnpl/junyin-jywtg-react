import React from 'react'
import {connect} from 'react-redux'
import * as userActionsFromOtherFile from "../actions/user";
import * as buttonActionsFromOtherFile from "../actions/button";
import {bindActionCreators} from "redux";
import Center from '../components/Center'

function mapStateToProps(state) {
  return {
    user: state.user,
    button:state.button
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionsFromOtherFile, dispatch),
    buttonActions: bindActionCreators(buttonActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Center)