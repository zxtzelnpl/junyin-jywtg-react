import './NewsPage.less'
import React from 'react'
import NewsInformation from '../containers/NewsInformation'
import TeacherReport from '../containers/TeacherReport'

export default class NewsPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:props.location.state||'news'
    }
    this.img={

    }
  }

  onClick(e){
    let text = e.target.innerHTML
    if(text==='机构资讯'){
      this.setState({
        show:'news'
      })
    }else if(text==='君银内参'){
      this.setState({
        show:'teacher'
      })
    }
  }

  componentDidMount(){
    // let {check,receivedAt} = this.props.user
    // if(!check){
    //   alert('需要注册后方可观看')
    //   return this.props.history.replace('/Center')
    // }
    // if(moment().isAfter(moment.unix(receivedAt).add(1,'days'))){
    //   alert('登录信息已经失效')
    //   return this.props.history.replace('/Center')
    // }
  }

  render(){
    let show = this.state.show
    let tabContentDom = show === 'news'?<NewsInformation />:<TeacherReport />
    return(
        <div className="NewsPage">
          <div className="tabHead">
            <ul onClick={this.onClick.bind(this)}>
              <li className={show==='news'?'active':'normal'}>机构资讯</li>
              <li className={show==='teacher'?'active':'normal'}>君银内参</li>
            </ul>
          </div>
          <div className="tab_content">
            {tabContentDom}
          </div>
        </div>
    )
  }
}