import React from 'react'
import {getTimeStamp} from '../static/js/tools'
export default class DiskRead extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let value = {
      limit:10,
      query_start_stamp:0,
      query_end_stamp:getTimeStamp()
    }
    this.props.diskActions.fetchPostsIfNeeded(value)
  }

  render(){
    return (
        <div>
          DiskRead
        </div>
    )
  }
}