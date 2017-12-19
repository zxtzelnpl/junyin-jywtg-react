import React from 'react'
import {Link} from 'react-router-dom'
import {getTimeStamp} from '../static/js/tools'
export default class NewsInformation extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let value = {
      limit:10,
      query_start_stamp:0,
      query_end_stamp:getTimeStamp()
    }
    this.props.newsActions.fetchPostsIfNeeded(value)
  }

  render(){
    return (
        <div>
          NewsInformation
        </div>
    )
  }
}