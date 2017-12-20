import React from 'react'
import User from './User'
import Login from './Login'

export default class Center extends React.Component {
  render(){
    let check = this.props.user.check
    if(check){
      return (
          <User user={this.props.user} userActions={this.props.userActions}/>
      )
    }
    else{
      return (
          <Login
              user={this.props.user}
              button={this.props.button}
              userActions={this.props.userActions}
              buttonActions = {this.props.buttonActions}
          />
      )
    }
  }
}