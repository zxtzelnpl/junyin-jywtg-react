import React from 'react'
import './ProductGameMasterList.less'
import moment from 'moment'

export default class ProductGameMasterList extends React.PureComponent {

  componentDidMount(){
    if(this.props.record.data.length===0&&!this.props.record.receive){
      let openid = this.props.user.openid
      this.props.recordActions.fetchPostsIfNeeded(openid)
    }
  }

  render() {
    let htmlDom = <div>数据正在加载中</div>
    let data = this.props.record.data
    if(data.length>0){
      htmlDom = data.reverse().map((item,index)=>{
        let url
        let {Record_url,Createtime} = item
        if(Record_url.indexOf('http')>-1){
          url = Record_url
        }
        else{
          url = `http://${Record_url}`
        }
        return (
            <a href={url} key={index}>
              <p className="record_title">博弈大师</p>
              <span className="record_time">{moment(Createtime).format('YYYY-MM-DD HH:mm')}</span>
            </a>
        )
      })
    }
    else if(this.props.record.receive){
      return (
          htmlDom = <div>您暂时还未收到相关信息</div>
      )
    }
    return (
      <div className="ProductGameMasterList">
        {htmlDom}
      </div>
    )
  }
}