import './SpecialClass.less'
import React from 'react'
import {Link} from 'react-router-dom'
import Item from './SpecialClassItem1'
import {public_resource} from "../constants/urls"
import {teachers} from '../constants/teachers'

class SpecialClassBox extends React.Component {
  render() {
    let data = this.props.data.slice(0,2)
    let teacherDom = data.map(item=>{
      return <Item key={item.id} {...item} openid={this.props.openid} />
    })

    let img_detail = `${public_resource}/detail.jpg`
    let url = `/SpecialClassList/${this.props.teacher_picture}`
    return (
        <div className="SpecialClassBox">
          <p className="title">{this.props.name} <Link to={url}><img src={img_detail} alt=""/></Link></p>
          <div className="SpecialClassBoxWrap">
            {teacherDom}
          </div>
        </div>
    )
  }
}

export default class SpecialClass extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  render() {
    let _teachers = teachers
    let datas = this.props.specialClass.data;
    _teachers.forEach(teacher=>{
      let teacher_picture = teacher.teacher_picture
      datas.forEach(data=>{
        if(data.teacher_picture === teacher_picture){
          teacher.data.push(data)
        }
      })
    })

    let htmlDom = _teachers.map(teacher=>{
      if(teacher.data.length>0){
        return (<SpecialClassBox key={teacher.teacher_picture} {...teacher} openid={this.props.user.openid}/>)
      }
    })



    return (
        <div className="SpecialClass">
          <div className="wrap">
            {htmlDom}
          </div>
        </div>
    )

  }
}