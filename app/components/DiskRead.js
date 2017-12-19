import React from 'react'
import moment from 'moment'

const DiskItem = ({title,content,timestamp})=>{
  return (
      <div className="readItem">
        <p>{title}</p>
        <p>{content}</p>
        <p>{moment.unix(timestamp).format('YYYY-MM-DD hh:mm')}</p>
      </div>
  )
}


export default class DiskRead extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(this.props.disk.data.length===0){
      let value = {
        limit:10,
        query_start_stamp:0,
        query_end_stamp:moment().format('X')
      }
      this.props.diskActions.fetchPostsIfNeeded(value)
    }
  }

  add(){
    let datas = this.props.disk.data
    let len = datas.length
    if(len>0){
      let last = datas[len-1]
      let query_start_stamp = 0;
      let query_end_stamp = last.timestamp

      let value = {
        limit:10,
        query_start_stamp:query_start_stamp,
        query_end_stamp:query_end_stamp
      }
      this.props.diskActions.fetchPostsIfNeeded(value)

      console.log(value)
    }
  }

  render(){
    let html
    let datas = this.props.disk.data
    if(datas.length===0){
      html = (<div />)
    }
    else{
      html = datas.map(item=>{
        return <DiskItem {...item} key={item.id}/>
      })
    }


    return (
        <div>
          DiskRead
          {html}
          <button onClick={this.add.bind(this)}>add</button>
        </div>
    )
  }
}