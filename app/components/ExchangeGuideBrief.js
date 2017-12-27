import './ExchangeGuideBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";

export default class ExchangeGuideBrief extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (this.props.exchangeGuide.data.length === 0) {

      let value = {
        limit: 10,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }

      this.props.exchangeGuideActions.fetchPostsIfNeeded(value)
    }
  }



  render(){
    let title_img = `${public_resource}/exchangeGuide.jpg`
    let detail_img = `${public_resource}/detail.jpg`
    let htmlDom = this.props.exchangeGuide.data.map(item=>{
      return (<p key={item.id}>{moment.unix(item.timestamp).format('YYYY-MM-DD HH:mm')}---{item.title}</p>)
    })

    return(
        <div className="ExchangeGuideBrief">
          <p className="title">
            <span><img src={title_img}/>实盘解读</span>
            <Link to="/ExchangeGuide"><img src={detail_img} alt=""/></Link>
          </p>
          {htmlDom}
        </div>
    )

  }
}