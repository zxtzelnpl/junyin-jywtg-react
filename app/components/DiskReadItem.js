import React from 'react'
import moment from 'moment'
import './DiskReadItem.less'

export default class DiskItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let {title,content,timestamp} = this.props
    let timeArr = moment.unix(timestamp).format('MM-DD hh:mm').split(' ')
    return (
        <div className="readItem">
          <div className="read_time">
            <p>{timeArr[0]}</p>
            <p>{timeArr[1]}</p>
          </div>
          <div className="read_content_wrap">
            <p className="read_title">{title}</p>
            <p className="read_content">{content}</p>
          </div>
        </div>
    )
  }
}