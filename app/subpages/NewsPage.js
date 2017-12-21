import React from 'react'
import './NewsPage.less'
import NewsInformation from '../containers/NewsInformation'
import TeacherReport from '../containers/TeacherReport'

export default class NewsPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      mark:props.match.params.mark
    }
  }

  onClick(mark){
    this.setState({
      mark:mark
    })
  }

  render(){
    let mark = this.state.mark
    let tabContentDom = mark === 'news'?<NewsInformation />:<TeacherReport />

    return(
        <div className="NewsPage">
          <div className="tab_head">
            <div className="news"
                 onClick={this.onClick.bind(this,'news')}
                 style={mark === 'news'?{'color':'red'}:{'color':'gray'}}
            >机构资讯</div>
            <div className="teacher"
                 onClick={this.onClick.bind(this,'teacher')}
                 style={mark === 'teacher'?{'color':'red'}:{'color':'gray'}}
            >君银内参</div>
          </div>
          <div className="tab_content">
            {tabContentDom}
          </div>
        </div>
    )
  }
}