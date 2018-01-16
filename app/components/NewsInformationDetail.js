import React from 'react'
import moment from 'moment'
import './NewsInformationDetail.less'
import {Article_browse_Record} from "../constants/urls";

export default class NewsInformationDetail extends React.PureComponent {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.newsItem = this.props.news.data.filter(item => {
      return item.ID === this.id
    })
  }

  componentDidMount() {
    // let {check,receivedAt} = this.props.user
    // if(!check){
    //   alert('需要注册后方可观看')
    //   return this.props.history.replace('/Center')
    // }
    // if(moment().isAfter(moment.unix(receivedAt).add(1,'days'))){
    //   alert('登录信息已经失效')
    //   return this.props.history.replace('/Center')
    // }
    if (this.newsItem.length === 0) {
      return this.props.history.push('/NewsPage')
    }
    else{
      this.statistics()
    }
  }

  statistics(){
    if (this.newsItem.length > 0 && this.props.user.openid){
      let openid = this.props.user.openid
      let id = this.id
      let newsItem = this.newsItem[0]
      let {Title, UEditTime} = newsItem
      let type = '机构资讯'
      let body = `openid=${openid}&Article_title=${Title}&time=${UEditTime}&Article_type=${type}&Article_id=${id}`
      fetch(Article_browse_Record,{
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body
      })
          .then(res=>res.text())
          .then(text=>{
            console.log(text)
          })
          .catch(err=>{
            console.log(err)
          })
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