import React from 'react'
import { connect } from 'react-redux'
import NewsInformationDetail from '../components/NewsInformationDetail'

function mapStateToProps(state) {
  return {
    news:state.news,
    user:state.user
  }
}

export default connect(
    mapStateToProps
)(NewsInformationDetail)