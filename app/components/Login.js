import React from 'react'
import {public_resource} from "../constants/urls";
import {trim, phoneCheck} from '../static/js/tools'
import './Login.less'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      secret: ''
    }
    this.inWrite = this.inWrite.bind(this)
    this.outWrite = this.outWrite.bind(this)
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
    let {phone, secret} = this.state
    if (!phoneCheck(phone)) {
      return alert('手机格式有错误')
    }
    this.props.userActions.fetchPostsIfNeeded(this.state)
  }

  inWrite() {
    this.props.buttonActions.writeChange(true)
  }

  outWrite() {
    this.props.buttonActions.writeChange(false)
  }

  componentDidMount(){
    this.checkHight = setInterval(this.userInput.bind(this),2000)
  }

  componentWillUnmount(){
    clearInterval(this.checkHight)
  }

  userInput(){
    if(this.height <= window.innerHeight&&this.props.button.write){
      this.outWrite()
    }
    else if(this.height > window.innerHeight&&!this.props.button.write){
      this.inWrite()
    }
  }

  render() {
    let logo = `${public_resource}/logo.png`
    let logoDom = <div style={{"marginTop":"60px"}}/>
    if (!this.props.button.write) {
      logoDom = <div className="logo">
        <img src={logo} alt=""/>
      </div>
    }

    return (
        <div className="Login">
          {logoDom}
          <div className="form_login">
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