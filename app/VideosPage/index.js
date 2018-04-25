import React from 'react'
import Header from './Header'
import Video from './containers/Videos'
import SpecialClass from '../containers/SpecialClass'
import * as lables from './const'

export default class VideosPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      tab:props.location.state||lables.JUN_YIN_ZHI_BO
    }
    this.onHeadToggle = this.onHeadToggle.bind(this);
    this.onSubHeadToggle = this.onSubHeadToggle.bind(this);
  }

  onHeadToggle(e){
    let text = e.target.innerHTML
    if(text === '技术课程'){
      this.setState({
        tab:lables.JI_SHU_KE_CHENG
      })
    }
    else if(text === '君银直播'){
      this.setState({
        tab:lables.JUN_YIN_ZHI_BO
      })
    }
  }

  onSubHeadToggle(e){
    let text = e.target.innerHTML
    if(text === '盘面点金'){
      this.setState({
        tab:lables.PAN_MIAN_DIAN_JIN
      })
    }
    else if(text === '异动复盘'){
      this.setState({
        tab:lables.YI_DONG_FU_PAN
      })
    }else if(text === '优选早知道'){
      this.setState({
        tab:lables.YOU_XUAN_ZAO_ZHI_DAO
      })
    }
  }

  createContentDom(){
    switch(this.state.tab){
      case lables.JI_SHU_KE_CHENG:
        return <SpecialClass />
      case lables.JUN_YIN_ZHI_BO:
      case lables.PAN_MIAN_DIAN_JIN:
      case lables.YI_DONG_FU_PAN:
      case lables.YOU_XUAN_ZAO_ZHI_DAO:
        return <Video
          tab={this.state.tab}
          onSubHeadToggle={this.onSubHeadToggle}
        />
      default:
        return null
    }
  }

  render(){
    let tab = this.state.tab;
    let tabContentDom = this.createContentDom();
    return (
        <div className="VideosPage">
          <Header tab={tab} onHeadToggle={this.onHeadToggle} />
          <div className="tab_content">
            {tabContentDom}
          </div>
        </div>
    )
  }
}