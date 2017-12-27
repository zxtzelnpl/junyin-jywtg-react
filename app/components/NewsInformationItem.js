import React from 'react'
import {Link} from 'react-router-dom'
import moment from "moment/moment";
import './NewsInformationItem.less'

export default class NewsItem extends React.PureComponent{
  render(){
    let {ID, Title, UEditTime} = this.props
    let url = `/NewsInformationDetail/${ID}`
    return (
        <Link to={url} className="newsItem">
          <span className="news_title">{Title}</span>
          <span className="news_time">{moment(UEditTime).format('YYYY-MM-DD')}</span>
        </Link>
    )
  }
}