import React from 'react'
import {Link} from 'react-router-dom'
import './ProductGameMasterList.less'
import {public_resource} from "../constants/urls";
import moment from 'moment'

export default class ProductGameMasterList extends React.Component {

  componentDidMount(){
    if(this.props.record.data.length===0&&!this.props.record.receive){
      let openid = this.props.user.openid
      this.props.recordActions.fetchPostsIfNeeded(openid)
    }
  }

  render() {
    let htmlDom = <div />
    let data = this.props.record.data
    if(data.length>0){
      htmlDom = data.map(item=>{
        let {Record_url,Createtime} = item
        return (
            <a href={Record_url}>
              <p className="record_title">博弈大师</p>
              <span className="record_time">{moment(Createtime).format('YYYY-MM-DD hh:mm')}</span>
            </a>
        )
      })
    }
    return (
      <div className="ProductGameMasterList">
        {htmlDom}
      </div>
    )
  }
}