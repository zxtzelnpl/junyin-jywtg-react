import React from 'react'
import moment from 'moment'
import DiskItem from './DiskReadItem'
import {public_resource} from "../constants/urls";
import './DiskRead.less'

export default class DiskRead extends React.Component {
  constructor(props) {
    super(props)
    this.checkLoading=this.checkLoading.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll',this.checkLoading)
    if (this.props.disk.data.length === 0) {
      let value = {
        limit: 10,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  componentWillUnmount(){
    document.removeEventListener('scroll',this.checkLoading)
  }

  checkLoading(){
    let bottom_distance = parseInt(getComputedStyle(this.wrap).paddingBottom)
    let top = this.loading.getBoundingClientRect().top
    if(bottom_distance+top<window.innerHeight){
      this.add()
    }
  }

  add() {
    let datas = this.props.disk.data
    let len = datas.length
    if (len > 0) {
      let last = datas[len - 1]
      let query_start_stamp = 0;
      let query_end_stamp = last.timestamp

      let value = {
        limit: 5,
        query_start_stamp: query_start_stamp,
        query_end_stamp: query_end_stamp
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  render() {
    let htmlDom
    let datas = this.props.disk.data
    let disk_img = `${public_resource}/disk.jpg`
    let loading_img = `${public_resource}/loading.png`
    if (datas.length === 0) {
      htmlDom = (<div/>)
    }
    else {
      htmlDom = datas.map(item => {
        return <DiskItem {...item} key={item.id}/>
      })
    }

    return (
        <div className="diskRead" ref={wrap=>{this.wrap=wrap}}>
          <p className="title">
            <span><img src={disk_img}/>实盘解读</span>
          </p>
          <div>
            {htmlDom}
          </div>
          <div className="loading" ref={loading=>{this.loading=loading}}>
            <img src={loading_img} />
          </div>
        </div>
    )
  }
}