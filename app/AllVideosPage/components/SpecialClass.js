import './SpecialClass.less'
import React from 'react'
import SpecialClassBox from './SpecialClassBox'
import {teachers} from '../../constants/teachers'

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