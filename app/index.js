import 'es6-promise'
import 'whatwg-fetch'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import myStorage from './static/js/myStorage'
import {initialState} from './reducers/user'
import {getCode, getQuery} from "./static/js/tools";

import App from './App'
import Loading from './components/Loading'

if (typeof __DEV__ !== 'undefined' && __DEV__) {
  console.info('"__DEV__=' + __DEV__ + '",这里是测试环境')
  myStorage.clear('user')
  myStorage.setItem('user', '{"isFetching":false,"receivedAt":0,"phone":"","openid":"oM9bcwAKuGCOSzzTF_BnWE56VUcc","img":"","check":false,"nick_name":"Aaron Z","province":"内蒙古","country":"中国","city":"兴安","sex":"1","headimgurl":"http://wx.qlogo.cn/mmopen/xw5Nubia2CICfhTwnyUTSicTNsNGODvjARe4BedK1u3OGnJaHiaz4EwGOYLEicjrIraglLbLMXETt8EXxdJVSogicyLb6BL31yvA7/0","channel":"其他","erro":"OK"}')
  myStorage.setItem('user', '{"isFetching":false,"receivedAt":"1513848935","phone":"15921433951","openid":"oM9bcwAKuGCOSzzTF_BnWE56VUcc","img":"","check":true,"nick_name":"Aaron Z","province":"内蒙古","country":"中国","city":"兴安","sex":"1","headimgurl":"http://wx.qlogo.cn/mmopen/xw5Nubia2CICfhTwnyUTSicTNsNGODvjARe4BedK1u3OGnJaHiaz4EwGOYLEicjrIraglLbLMXETt8EXxdJVSogicyLb6BL31yvA7/0","channel":"其他","erro":"OK","time":"2018/11/16 0:00:00"}')
  myStorage.setItem('user', '{"isFetching":false,"receivedAt":"1514439671","phone":"15921433951","openid":"oM9bcwAKuGCOSzzTF_BnWE56VUcc","img":"","check":true,"nick_name":"Aaron Z","province":"内蒙古","country":"中国","city":"兴安","sex":"1","headimgurl":"http://wx.qlogo.cn/mmopen/xw5Nubia2CICfhTwnyUTSicTNsNGODvjARe4BedK1u3OGnJaHiaz4EwGOYLEicjrIraglLbLMXETt8EXxdJVSogicyLb6BL31yvA7/0","channel":"其他","erro":"OK","time":"2017/12/31 13:59:00"}')
}

render(<Loading/>, document.getElementById('root'))


function _render(user) {
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
}

function getInitialState() {
  return new Promise((resolve, reject) => {
    if (myStorage.getItem('user')) {
      resolve(JSON.parse(myStorage.getItem('user')))
    }
    else {
      let query = getQuery(location.search)
      if (query.code) {
        fetch('/ashx/wx_openid_user_is.ashx?code=' + query.code)
            .then(res => {
              return res.json()
            })
            .then(json => {
              console.log(json)
              if (json.erro !== 'OK') {
                reject({
                  state: 'noAttention',
                  info: '您还没有关注公众号《君银微投顾》，请先关注后查看页面'
                })
              }
              else {
                let obj = Object.assign(initialState,json)
                console.log(obj)
                myStorage.setItem('user', JSON.stringify(obj))
                resolve(obj)
              }
            })
            .catch(() => {
              reject({
                state: 'net',
                info: '网络错误，请稍后重试'
              })
            })
      }
      else {
        reject({
          state: 'noCode'
        })
      }
    }
  })
}

getInitialState()
    .then(user => _render(user))
    .catch(err => {
      if (err.state === 'noCode') {
        getCode()
      } else if (err.info) {
        alert(err.info)
      }
      else {
        alert('网络错误，请稍后重试')
      }
    })
