import './DiskReadBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import DiskItem from './DiskReadItem'
import {public_resource} from "../constants/urls";

export default class DiskReadBrief extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.disk.data.length === 0) {
      let value = {
        limit: 10,
        query_start_stamp: 0,
        query_end_stamp: moment().format('X')
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  add() {
    let datas = this.props.disk.data
    let len = datas.length
    if (len > 0) {
      let last = datas[len - 1]
      let query_start_stamp = 0;
      let query_end_stamp = last.timestamp

      let value = {
        limit: 10,
        query_start_stamp: query_start_stamp,
        query_end_stamp: query_end_stamp
      }
      this.props.diskActions.fetchPostsIfNeeded(value)

      console.log(value)
    }
  }

  render() {
    let htmlDom
    let datas = this.props.disk.data.slice(0, 2)
    let disk_img = `${public_resource}/disk.jpg`
    let detail_img = `${public_resource}/detail.jpg`
    if (datas.length === 0) {
      htmlDom = (<div/>)
    }
    else {
      htmlDom = datas.map(item => {
        return <DiskItem {...item} key={item.id}/>
      })
    }


    return (
        <div className="diskReadBrief">
          <p className="title">
            <span><img src={disk_img}/>实盘解读</span>
            <Link to="/DiskRead"><img src={detail_img} alt=""/></Link>
          </p>
          <div>{htmlDom}</div>

        </div>
    )
  }
}