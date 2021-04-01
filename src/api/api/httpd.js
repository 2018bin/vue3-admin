import axios from 'axios'

import { checkStatus } from './utils.js'

// axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 环境的切换
/* if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/web_api';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = '/web_api';
} */

const service = axios.create({
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
  //显示loading
  return config
}, error => {
  return Promise.reject(error)
})

//返回状态拦截
service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(checkStatus(error.response))
})

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
// export function get(url, params, isArrayFormat) {
//   isArrayFormat = isArrayFormat ? true : false;
//   return new Promise((resolve, reject) => {
//     if (isArrayFormat) {
//       service.get(url, {
//         params: params,
//         paramsSerializer: function (params) { //get 实现传递json对象 或数组对象等
//           return Qs.stringify(params, { arrayFormat: 'indices' });
//         }
//       })
//         .then(res => {
//           resolve(res.data);
//         })
//         .catch(err => {
//           reject(err.data)
//         })
//     } else {
//       service.get(url, {
//         params: params
//       })
//         .then(res => {
//           resolve(res.data);
//         })
//         .catch(err => {
//           reject(err.data)
//         })
//     }

//   });
// }
/** 
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
