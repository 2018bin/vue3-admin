import request from '@/utils/request'
import {proxyUrl} from '@/utils/config'
export function adminList(data) {
  return request({
    url: proxyUrl+'/admin/adminList',
    method: 'post',
    params: data
  })
}
//获取所有角色
export function getAllRoles(data) {
  return request({
    url: proxyUrl+'/admin/getAllRoles',
    method: 'get',
    params:data
  })
}
export function adminAdd(data) {
  return request({
    url: proxyUrl+'/admin/adminAdd',
    method: 'post',
    params: data
  })
}
export function adminEdit(data) {
  return request({
    url: proxyUrl+'/admin/adminEdit',
    method: 'post',
    params:data
  })
}
export function adminDelete(data) {
  return request({
    url: proxyUrl+'/admin/adminDelete',
    method: 'post',
    params:data
  })
}

