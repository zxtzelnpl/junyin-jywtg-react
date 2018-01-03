import React from 'react'
import moment from 'moment'
import TeacherItem from './TeacherReportItem'
import {public_resource} from "../constants/urls";
import './TeacherReport.less'
export default class TeacherReport extends React.PureComponent{
  constructor(props){
    super(props)
    this.checkLoading=this.checkLoading.bind(this)
  }

  componentDidMount(){
    document.addEventListener('scroll',this.checkLoading)
    if(this.props.teacher.data.length<10){
      let value = {
        limit:10,
        query_start_stamp:0,
        query_end_stamp:moment().format('X')
      }
      this.props.teacherActions.fetchPostsIfNeeded(value)
    }
  }

  componentWillUnmount(){
    document.removeEventListener('scroll',this.checkLoading)
    clearTimeout(this.timeId)
  }

  checkLoading(){
    clearTimeout(this.timeId)
    this.timeId = setTimeout(()=>{
      let bottom_distance = parseInt(getComputedStyle(this.wrap).paddingBottom)
      let top = this.loading.getBoundingClientRect().top
      if(bottom_distance+top<window.innerHeight){
        this.add()
      }
    },100)
  }

  add() {
    let datas = this.props.teacher.data
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
      this.props.teacherActions.fetchPostsIfNeeded(value)
    }
  }

  render(){
    let data = this.props.teacher.data
    let head_img = `${public_resource}/teacher_report_head.jpg`
    let loading_img = `${public_resource}/loading.png`
    let htmlDom = (
        <div/>
    )
    if (data.length > 0) {
      htmlDom = data.map(item => {
        return <TeacherItem {...item} key={item.id}/>
      })
    }

    return (
        <div className="TeacherReport" ref={wrap=>{this.wrap=wrap}}>
          <div className="title">
            <img src={head_img}/>
          </div>
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