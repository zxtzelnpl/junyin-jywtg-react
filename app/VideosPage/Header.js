import './Header.less'
import React from 'react'
import * as labels from './const'

class Header extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    let {tab,onHeadToggle}=this.props;

    return (
      <ul className="VideosPageTabHead" onClick={onHeadToggle}>
        <li className={tab===labels.JI_SHU_KE_CHENG?'active':'normal'}>技术课程</li>
        <li className={
          (tab===labels.JUN_YIN_ZHI_BO||
            tab===labels.PAN_MIAN_DIAN_JIN||
            tab===labels.YI_DONG_FU_PAN||
            tab===labels.YOU_XUAN_ZAO_ZHI_DAO
          )
            ?'active':'normal'}>君银直播</li>
      </ul>
    )
  }
}

export default Header