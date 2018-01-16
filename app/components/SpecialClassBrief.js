import './SpecialClassBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls"
import Item from './SpecialClassItem1'

export default class SpecialClassBrief extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  componentWillUnmount(){

  }

  render(){
    let data = this.props.specialClass.data.slice(0,4)

    let htmlDom = data.map(item=>{
      return (<Item key={item.id} {...item} openid={this.props.user.openid}/>)
    })

    let img_title = `${public_resource}/specialClass.jpg`
    let img_detail = `${public_resource}/detail.jpg`

    return(
        <div className="SpecialClassBrief">
          <p className="title">
            <span><img src={img_title}/>技术课程</span>
            <Link to={
              {
                pathname:'VideosPage',
                state:'special'
              }
            }><img src={img_detail} alt=""/></Link>
          </p>
          <div className="wrap">
            {htmlDom}
          </div>
        </div>
    )

  }
}