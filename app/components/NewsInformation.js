import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './NewsInformation.less'

const NewsItem = ({ID, Title, UEditTime}) => {
  let url = `/NewsInformationDetail/${ID}`
  return (
      <Link to={url} className="newsItem">
        <span>{Title}</span>
        <span>{moment(UEditTime).format('YYYY-MM-DD hh:mm')}</span>
      </Link>
  )
}

export default class NewsInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.news.data.length < 10) {
      let value = {
        limit: 10,
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
    let data = this.props.news.data
    let htmlDom = (
        <div/>
    )
    if (data.length > 0) {
      htmlDom = data.map(item => {
        return <NewsItem {...item} key={item.ID}/>
      })
    }

    return (
        <div className="newsInformation">
          NewsInformation
          {htmlDom}
          <button onClick={this.add.bind(this)}>Add</button>
        </div>
    )
  }
}