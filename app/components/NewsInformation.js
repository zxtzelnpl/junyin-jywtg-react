import React from 'react'
import moment from 'moment'
import './NewsInformation.less'
import NewsItem from './NewsInformationItem'
import LoadControl from './LoadControl'
import {public_resource} from "../constants/urls"

export default class NewsInformation extends React.PureComponent {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
  }

  componentDidMount() {
    if (this.props.news.data.length < 20) {
      let value = {
        limit: 20,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }
      this.props.newsActions.fetchPostsIfNeeded(value)
    }
  }


  add() {
    let datas = this.props.news.data
    let len = datas.length
    if (len > 0) {
      let last = datas[len - 1]
      let query_start_stamp = 0;
      let query_end_stamp = moment(last.UEditTime).format('X')

      let value = {
        limit: 10,
        query_start_stamp: query_start_stamp,
        query_end_stamp: query_end_stamp
      }
      this.props.newsActions.fetchPostsIfNeeded(value)

    }
  }

  render() {
    let data = this.props.news.data
    let head_img = `${public_resource}/news_information_head.jpg`
    let htmlDom = (
        <div/>
    )
    if (data.length > 0) {
      htmlDom = data.map(item => {
        return <NewsItem {...item} key={item.ID}/>
      })
    }

    return (
        <div className="newsInformation" ref={wrap => {
          this.wrap = wrap
        }}>
          <div className="title">
            <img src={head_img} alt=""/>
          </div>
          <div className="wrap">
            <div>
              {htmlDom}
            </div>
            <LoadControl isFetching={this.props.news.isFetching} loadFunction={this.add}/>
          </div>
        </div>
    )
  }
}