import React from 'react'
import User from './User'
import Login from './Login'
import moment from "moment/moment";

export default function Center ({user,userActions}){
  let {check,receivedAt} = user
  if(check&&moment().isBefore(moment.unix(receivedAt).add(7,'days'))){
    return (
      <User user={user} userActions={userActions}/>
    )
  }
  else{
    return (
      <Login
        user={user}
        userActions={userActions}
      />
    )
  }
}