'use strict'
import './LoadControl.less'
import React from 'react'
import {public_resource} from "../constants/urls";

export default class LoadControl extends React.Component {
  constructor (props) {
    super(props)
    this.timeId = null
    this.check = this.check.bind(this)
  }

  componentDidMount () {
    // window.addEventListener('scroll', this.check)
    document.addEventListener('touchmove', this.check)
  }

  componentWillUnmount () {
    clearTimeout(this.timeId)
    // window.removeEventListener('scroll', this.check)
    document.removeEventListener('touchmove', this.check)
  }

  check () {
    clearTimeout(this.timeId)
    this.timeId = setTimeout(() => {
      let top = this.load.getBoundingClientRect().top
      let height = window.innerHeight
      if (top <= height-50) {
        this.props.loadFunction()
      }
    }, 200)
  }

  render () {
    let loading_img = `${public_resource}/loading.png`
    let visible = this.props.isFetching ? 'visible' : 'hidden'
    return (
        <div className="LoadControl"
             ref={load => {this.load = load }}
             style={{visibility: visible}}>
          <img src={loading_img}/>
        </div>
    )
  }
}