import './SpecialClassList.less'
import React from 'react'
import MyVideo from './MyVideo'
import LoadControl from './LoadControl'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";

class Item extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let {cover_picture, video_path, teacher_picture, timestamp, title} = this.props
    return (
        <div className="SpecialClassListItem">
          <MyVideo
              src={video_path}
              poster={cover_picture}
          />
          <div>
            <p>{title}</p>
            <span>{moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
        </div>
    )
  }
}


export default class SpecialClassList extends React.Component {
  constructor(props) {
    super(props)
    this.teacher_picture = this.props.match.params.teacher
    this.add=this.add.bind(this)
  }

  componentDidMount() {
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  add() {
    this.props.specialClassActions.fetchPostsIfNeeded()
  }

  render() {
    let datas = this.props.specialClass.data.filter(item=>{
      return item.teacher_picture === this.teacher_picture
    })
    let htmlDom = datas.map(item => {
      return (<Item key={item.id} {...item} />)
    })


    return (
        <div className="SpecialClassList" ref={wrap=>{this.wrap = wrap}}>
          <div className="wrap">
            {htmlDom}
          </div>
          <LoadControl isFetching={this.props.specialClass.isFetching} loadFunction={this.add}/>
        </div>
    )

  }
}