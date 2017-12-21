import React from 'react'
import moment from 'moment'
import './NewsInformation.less'
import NewsItem from './NewsInformationItem'
import {public_resource} from "../constants/urls";

export default class NewsInformation extends React.Component {
  constructor(props) {
    super(props)
    this.checkLoading=this.checkLoading.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll',this.checkLoading)
    if (this.props.news.data.length < 20) {
      let value = {
        limit: 20,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }
      this.props.newsActions.fetchPostsIfNeeded(value)
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

  add(){
    let datas = this.props.news.data
    let len = datas.length
    if(len>0){
      let last = datas[len-1]
      let query_start_stamp = 0;
      let query_end_stamp = moment(last.UEditTime).format('X')

      let value = {
        limit:10,
        query_start_stamp:query_start_stamp,
        query_end_stamp:query_end_stamp
      }
      this.props.newsActions.fetchPostsIfNeeded(value)

      console.log(value)
    }
  }

  render() {
    let data = this.props.news.data
    let head_img = `${public_resource}/news_information_head.jpg`
    let loading_img = `${public_resource}/loading.png`
    let htmlDom = (
        <div/>
    )
    if (data.length > 0) {
      htmlDom = data.map(item => {
        return <NewsItem {...item} key={item.ID}/>
      })
    }

    return (
        <div className="newsInformation" ref={wrap=>{this.wrap=wrap}}>
          <div className="title">
            <img src={head_img} alt=""/>
          </div>
          <div className="wrap">
            <div>
              {htmlDom}
            </div>
            <div className="loading" ref={loading=>{this.loading=loading}}>
              <img src={loading_img} />
            </div>
          </div>
        </div>
    )
  }
}