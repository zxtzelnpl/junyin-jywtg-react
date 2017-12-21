import React from 'react'
import moment from 'moment'
import './NewsInformationDetail.less'

export default class NewsInformationDetail extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.newsItem = this.props.news.data.filter(item => {
      return item.ID === this.id
    })
  }

  componentDidMount() {
    let {check,receivedAt} = this.props.user
    if(!check){
      alert('需要注册后方可观看')
      return this.props.history.replace('/Center')
    }
    if(moment().isAfter(moment.unix(receivedAt).add(1,'days'))){
      alert('登录信息已经失效')
      return this.props.history.replace('/Center')
    }
    if (this.newsItem.length === 0) {
      return this.props.history.push('/NewsInformation')
    }
  }

  render() {
    let htmlDom
    if (this.newsItem.length > 0 && this.props.user.check) {
      let newsItem = this.newsItem[0]
      let {Content, Title, UEditTime} = newsItem
      htmlDom = (
          <div className="newsInformationDetail">
            <div>
              <div className="detail_title">{Title}</div>
              <div className="detail_time">{moment(UEditTime).format('YYYY-MM-DD hh:mm')}</div>
              <div className="detail_content" dangerouslySetInnerHTML={{__html: Content}}/>
            </div>
          </div>
      )
    }
    else {
      htmlDom = (
          <div/>
      )
    }


    return htmlDom
  }
}