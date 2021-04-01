import request from '@/utils/request'


import {proxyUrl} from '@/utils/config'


export async function login(data) {
  return request({
    url: proxyUrl+'/user/login',
    method: 'get',
    params:data
  })
}

// export function getEasyInfo() {
//   return request({
//     url: proxyUrl+'/uc/easyInfo',
//     method: 'get'
//   })
// }
export function getUserInfo() {
  //此处为了兼容mock.js使用data传递accessToken，如果使用mock可以走headers
  return request({
    url: proxyUrl+'/uc/getInfo',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: proxyUrl+'/uc/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: proxyUrl+'/register',
    method: 'post',
  })
}
export function getPermission(params) {
  return request({
    url: proxyUrl+'/uc/getPermission',
    method: 'post',
    params: params
  })
}

