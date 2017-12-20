import React from 'react'
import moment from 'moment'
import './NewsInformationDetail.less'
export default class NewsInformationDetail extends React.Component{
  constructor(props){
    super(props)
    this.id = this.props.match.params.id
    this.newsItem = this.props.news.data.filter(item=>{
      return item.ID === this.id
    })
  }

  componentDidMount(){
    console.log('NewsInformationDetail')
    console.log(this.newsItem)
    console.log('NewsInformationDetail')
    if(this.newsItem.length===0){
      this.props.history.push('/NewsInformation')
    }
  }

  render(){
    let htmlDom
    if(this.newsItem.length>0){
      let newsItem = this.newsItem[0]
      let {Content,Title,UEditTime} = newsItem
      htmlDom= (
          <div>
            <div className="detail_title">{Title}</div>
            <div className="detail_time">{moment(UEditTime).format('YYYY-MM-DD hh:mm')}</div>
            <div className="detail_content" dangerouslySetInnerHTML={{__html:Content}} />
          </div>
      )
    }
    else{
      htmlDom=(
          <div />
      )
    }


    return (
        <div className="newsInformationDetail">
          {htmlDom}
        </div>
    )
  }
}