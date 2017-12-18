import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import App from './App'

if (typeof __DEV__ !== 'undefined' && __DEV__) {
  console.info('"__DEV__=' + __DEV__ + '",这里是测试环境')
}


let store = configureStore()

render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    , document.getElementById('root'))