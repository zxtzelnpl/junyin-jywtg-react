import React from 'react'
import {public_resource} from "../constants/urls";
import './User.less'

export default class User extends React.Component {
  render() {
    let banner = `${public_resource}/userBg.jpg`
    let user_test = `${public_resource}/user_test.jpg`
    let serviceTime = `${public_resource}/serviceTime.jpg`
    let productCenter = `${public_resource}/productCenter.jpg`
    let aboutUs = `${public_resource}/aboutUs.jpg`
    let selection_detial = `${public_resource}/selection_detail.png`
    let phone = this.props.user.phone
    return (
        <div className="User">
          <div className="banner">
            <img className="bannerBg" src={banner}/>
            <div className="userInfo">
              <div className="circle">
                <img src={user_test}/>
              </div>
              <span>{phone}</span>
            </div>
          </div>
          <div className="user_selections">
            <div className="selection">
              <div>
                <img className="selection_logo" src={serviceTime} alt=""/>
                服务期限
              </div>
              <img className="selection_detail" src={selection_detial} alt=""/>
            </div>
            <div className="selection">
              <div>
                <img className="selection_logo" src={productCenter} alt=""/>
                产品中心
              </div>
              <img className="selection_detail" src={selection_detial} alt=""/>
            </div>
            <div className="selection">
              <div>
                <img className="selection_logo" src={aboutUs} alt=""/>
                关于我们
              </div>
              <img className="selection_detail" src={selection_detial} alt=""/>
            </div>
          </div>
          <div className="logout">
            <p onClick={this.props.userActions.logout}>退出登录</p>
          </div>
        </div>
    )
  }
}