'use strict'

let str1='Mozilla/5.0 (Linux; Android 7.0; MI 5s Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN'

let str2='Mozilla/5.0 (Linux; Android 7.0; MI 5s Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN'

console.log(str1.indexOf('TBS')>-1)
console.log(str2.indexOf('TBS')>-1)