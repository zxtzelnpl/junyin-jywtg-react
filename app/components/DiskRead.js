import './DiskRead.less'
import React from 'react'
import moment from 'moment'
import DiskItem from './DiskReadItem'
import LoadControl from './LoadControl'

export default class DiskRead extends React.PureComponent {
  constructor(props) {
    super(props)
    this.add=this.add.bind(this)
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
        limit: 5,
        query_start_stamp: query_start_stamp,
        query_end_stamp: query_end_stamp
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  render() {
    let htmlDom
    let datas = this.props.disk.data
    if (datas.length === 0) {
      htmlDom = (<div/>)
    }
    else {
      htmlDom = datas.map(item => {
        return <DiskItem {...item} key={item.id} openid={this.props.user.openid}/>
      })
    }

    return (
        <div className="diskRead">
          <div className="title">
            实盘解读
          </div>
          <div className="wrap">
            <div>
              {htmlDom}
            </div>
            <LoadControl isFetching={this.props.disk.isFetching} loadFunction={this.add}/>
          </div>
        </div>
    )
  }
}