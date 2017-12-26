import './ExchangeGuideBrief.less'
import React from 'react'
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

    let htmlDom = this.props.exchangeGuide.data.map(item=>{
      return (<p key={item.id}>{moment.unix(item.timestamp).format('YYYY-MM-DD HH:mm')}---{item.title}</p>)
    })

    return(
        <div className="ExchangeGuideBrief">
          {htmlDom}
        </div>
    )

  }
}