import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ExchangeGuide from '../components/ExchangeGuide'
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
)(ExchangeGuide)