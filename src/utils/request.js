import axios from 'axios'

import {
  TokenKey,
  getAccessToken
} from '@/utils/accessToken'
import store from '@/store'

import router from '@/router'
import { isArray } from '@/utils/validate'
import { message } from 'ant-design-vue'

let loadingInstance



// axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
const service = axios.create({
  timeout: 120000,
  baseURL: process.env.BASE_API, // api 的 base_url
  // 在向服务器发送请求前，序列化请求数据
  transformRequest: [function (data) {
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    data = JSON.stringify(data)
    return data
  }],
  // 在传递给 then/catch 前，修改响应数据
  transformResponse: [function (data) {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
})


//请求之前拦截
service.interceptors.request.use(config => {
  if (getAccessToken()) {
    config.headers[TokenKey] = 't' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  //显示loading
  return config
}, error => {
  return Promise.reject(error)
})

//返回状态拦截
service.interceptors.response.use(response => {
  if (loadingInstance) loadingInstance.close()

  const { data, config } = response
  const { code, msg } = data
  // 操作正常Code数组
  const codeVerificationArray = isArray(code)
    ? [...code]
    : [...[code]]
  // 是否操作正常
  if (codeVerificationArray.includes(code)) {
    return data
  } else {
    handleCode(code, msg)
    return Promise.reject(
      'vue-admin-beautiful请求异常拦截:' +
      JSON.stringify({ url: config.url, code, msg }) || 'Error'
    )
  }
}, error => {
  if (loadingInstance) loadingInstance.close()
  const { response, message } = error
  if (error.response && error.response.data) {
    const { status, data } = response
    handleCode(status, data.msg || message)
    return Promise.reject(error)
  } else {
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    }
    if (message.includes('timeout')) {
      message = '后端接口请求超时'
    }
    if (message.includes('Request failed with status code')) {
      const code = message.substr(message.length - 3)
      message = '后端接口' + code + '异常'
    }
    message.error(message || `后端接口未知异常`)
    return Promise.reject(error)
  }
})
export default service


// /**
//  * @author chuzhixin 1204505056@qq.com
//  * @description axios初始化
//  */
// const instance = axios.create({
//   timeout: 120000,
//   baseURL: process.env.BASE_API, // api 的 base_url
// })

// /**
//  * @author chuzhixin 1204505056@qq.com
//  * @description axios请求拦截器
//  */
// instance.interceptors.request.use(
//   (config) => {
//     if (getAccessToken()) {
//       config.headers[TokenKey] = 't' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     console.log(TokenKey)
//     // if (
//     //   config.data &&
//     //   config.headers['Content-Type'] ===
//     //     'application/x-www-form-urlencoded;charset=UTF-8'
//     // )

//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// /**
//  * @author chuzhixin 1204505056@qq.com
//  * @description axios响应拦截器
//  */
// instance.interceptors.response.use(
//   (response) => {
//     if (loadingInstance) loadingInstance.close()

//     const { data, config } = response
//     const { code, msg } = data
//     // 操作正常Code数组
//     const codeVerificationArray = isArray(code)
//       ? [...code]
//       : [...[code]]
//     // 是否操作正常
//     if (codeVerificationArray.includes(code)) {
//       return data
//     } else {
//       handleCode(code, msg)
//       return Promise.reject(
//         'vue-admin-beautiful请求异常拦截:' +
//         JSON.stringify({ url: config.url, code, msg }) || 'Error'
//       )
//     }
//   },
//   (error) => {
//     if (loadingInstance) loadingInstance.close()
//     const { response, message } = error
//     if (error.response && error.response.data) {
//       const { status, data } = response
//       handleCode(status, data.msg || message)
//       return Promise.reject(error)
//     } else {
//       let { message } = error
//       if (message === 'Network Error') {
//         message = '后端接口连接异常'
//       }
//       if (message.includes('timeout')) {
//         message = '后端接口请求超时'
//       }
//       if (message.includes('Request failed with status code')) {
//         const code = message.substr(message.length - 3)
//         message = '后端接口' + code + '异常'
//       }
//       message.error(message || `后端接口未知异常`)
//       return Promise.reject(error)
//     }
//   }
// )
/**
 * @author chuzhixin 1204505056@qq.com
 * @description 处理code异常
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
  switch (code) {
    case 401:
      message.error(msg || '登录失效')
      store.dispatch('user/resetAll').catch(() => { })
      break
    case 403:
      router.push({ path: '/401' }).catch(() => { })
      break
    default:
      message.error(msg || `后端接口${code}异常`)
      break
  }
}

// export default instance
