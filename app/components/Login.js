import React from 'react'
import {public_resource} from "../constants/urls";
import {trim, phoneCheck} from '../static/js/tools'
import './Login.less'

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      phone: this.props.user.phone,
      secret: '',
      openid:this.props.user.openid
    }
    this.height=window.innerHeight-20
  }


  phoneChange() {
    let value = trim(this.phone.value)
    this.setState({
      phone: value
    })
  }

  secretChange() {
    let value = trim(this.secret.value)
    this.setState({
      secret: value
    })
  }

  onSub() {
    if (!phoneCheck(this.state.phone)) {
      return alert('手机格式有错误')
    }
    this.props.userActions.fetchPostsIfNeeded(this.state)
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
    let logo = `${public_resource}/logo.png`

    return (
        <div className="Login">
          <div className="form_login">
            <div className="logo">
              <img src={logo} alt=""/>
            </div>
            <div className="phone">
              <input
                  type="number"
                  placeholder="请输入手机号码"
                  value={this.state.phone}
                  ref={input => {
                    this.phone = input
                  }}
                  onChange={this.phoneChange.bind(this)}
              />
            </div>
            <div className="secret">
              <input
                  type="password"
                  placeholder="请输入密码"
                  value={this.state.secret}
                  ref={input => {
                    this.secret = input
                  }}
                  onChange={this.secretChange.bind(this)}
              />
            </div>
            <div className="button">
              <p onClick={this.onSub.bind(this)}>登录</p>
            </div>
          </div>
        </div>
    )
  }
}