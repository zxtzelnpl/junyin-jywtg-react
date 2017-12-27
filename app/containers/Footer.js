import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

function mapStateToProps(state) {
  return {
    user:state.user
  }
}

export default withRouter(connect(
    mapStateToProps
)(Footer))