import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import myStorage from './static/js/myStorage'
import moment from 'moment'

import App from './App'

if (typeof __DEV__ !== 'undefined' && __DEV__) {
  console.info('"__DEV__=' + __DEV__ + '",这里是测试环境')
}

//如果localStorage存在则获取initialState
let user
if (myStorage.getItem('user')) {
  let _user = JSON.parse(myStorage.getItem('user'))
  if(moment().subtract(1,'days').format('X')  < _user.receivedAt){
    console.log('账户未过期')
    user=_user
  }
  else{
    console.log('账户已过期')
  }
}
let store = configureStore({user})
store.subscribe(() => {
  let previousUser = user
  user = store.getState().user
  if (previousUser !== user) {
    myStorage.setItem('user', JSON.stringify(user))
  }
})

render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    , document.getElementById('root'))