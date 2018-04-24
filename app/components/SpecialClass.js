import './SpecialClass.less'
import React from 'react'
import {Link} from 'react-router-dom'
import Item from './SpecialClassItem1'
import {public_resource} from "../constants/urls"
import {teachers} from '../constants/teachers'

function SpecialClassBox({data,openid,teacher_picture,name}){

  let _data = data.slice(0,2)
  let teacherDom = _data.map(item=>{
    return <Item key={item.id} {...item} openid={openid} />
  })

  let img_detail = `${public_resource}/detail.jpg`
  let url = `/SpecialClassList/${teacher_picture}`
  return (
    <div className="SpecialClassBox">
      <p className="title">{name} <Link to={url}><img src={img_detail} alt=""/></Link></p>
      <div className="SpecialClassBoxWrap">
        {teacherDom}
      </div>
    </div>
  )
}

export default class SpecialClass extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.specialClass.data.length === 0) {
      this.props.specialClassActions.fetchPostsIfNeeded()
    }
  }

  render() {
    let datas = this.props.specialClass.data;
    let _teachers = teachers.map(teacher=>{
      let teacher_picture = teacher.teacher_picture
      teacher.data = datas.filter(data=>{
        return data.teacher_picture === teacher_picture
      })
      return teacher;
    });

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