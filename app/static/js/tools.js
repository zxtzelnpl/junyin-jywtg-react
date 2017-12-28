import {AppID} from '../../../config/keys'

export function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function phoneCheck(phone){
  const mobile = /^[1][3,4,5,7,8][0-9]{9}$/
  return mobile.test(phone)
}

export function getQuery(search) {
  let query = {}
  let _query = search.slice(1).split('&')
  _query.forEach((str) => {
    let arr = str.split('=')
    query[arr[0]] = arr[1]
  })
  return query
}

export function getCode() {
  let url = encodeURIComponent(window.location.href);
  let urlCode = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppID}&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=lk#wechat_redirect`
  window.location.href = urlCode
}

export function isAndroid(){
  return true
  let u = navigator.userAgent
  if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
    return true
  }
  else{
    return false
  }
}

export function videoPollyOpen(e){
  console.log('open')
  console.log(e)
  console.log(e.target)
  console.log('open')
  e.target.style='width:100%;height:auto;position:fixed;letf:0;top:50%;transfrom:translateY:(-50%);z-index:2'
}

export function videoPollyPause(e){
  console.log('pause')
  console.log(e)
  console.log(e.target)
  console.log('pause')
  e.target.style=''
}