import React from 'react'
import User from './User'
import Login from './Login'
import moment from "moment/moment";

export default class Center extends React.PureComponent {
  render(){
    let {check,receivedAt} = this.props.user
    if(check&&moment().isBefore(moment.unix(receivedAt).add(7,'days'))){
      return (
          <User user={this.props.user} userActions={this.props.userActions}/>
      )
    }
    else{
      return (
          <Login
              user={this.props.user}
              userActions={this.props.userActions}
          />
      )
    }
  }
}