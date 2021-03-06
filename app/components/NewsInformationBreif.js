import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './NewsInformationBreif.less'
import NewsItem from './NewsInformationItem'
import {public_resource} from "../constants/urls";

export default class NewsInformation extends React.PureComponent {
  constructor(props) {
    super(props)
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
    let data = this.props.news.data.slice(0,5)
    let news_img = `${public_resource}/news.jpg`
    let detail_img = `${public_resource}/detail.jpg`
    let htmlDom = (
        <div/>
    )
    if (data.length > 0) {
      htmlDom = data.map(item => {
        return <NewsItem {...item} key={item.ID}/>
      })
    }

    return (
        <div className="newsInformationBreif">
          <p className="title">
            <span><img src={news_img} />机构资讯</span>
            <Link to="/NewsPage"><img src={detail_img} alt=""/></Link>
          </p>
          <div className="wrap">
            {htmlDom}
          </div>
        </div>
    )
  }
}