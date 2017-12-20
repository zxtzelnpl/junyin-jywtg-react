import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewsInformationBreif from '../components/NewsInformationBreif'
import * as newsActionsFromOtherFile from '../actions/news'

function mapStateToProps(state) {
  return {
    news:state.news,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newsActions:bindActionCreators(newsActionsFromOtherFile,dispatch),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsInformationBreif)