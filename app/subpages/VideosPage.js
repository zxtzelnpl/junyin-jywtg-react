import './VideosPage.less'
import React from 'react'
import Video from '../containers/Video'
import SpecialClass from '../containers/SpecialClass'

export default class VideosPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:props.location.state||'special'
    }
    this.img={

    }
  }

  onClick(e){
    let text = e.target.innerHTML
    if(text === '技术课程'){
      this.setState({
        show:'special'
      })
    }
    else if(text === '君银直播'){
      this.setState({
        show:'pmdj'
      })
    }
  }

  render(){
    let show = this.state.show
    let tabContentDom = show === 'special'?<SpecialClass />:<Video show={show} />
    return (
        <div className="VideosPage">
          <div className="tabHead">
            <ul onClick={this.onClick.bind(this)}>
              <li className={show==='special'?'active':'normal'}>技术课程</li>
              <li className={['pmdj','ydfp','yxzzd'].indexOf(show)>-1?'active':'normal'}>君银直播</li>
            </ul>
          </div>
          <div className="tab_content">
            {tabContentDom}
          </div>
        </div>
    )
  }
}