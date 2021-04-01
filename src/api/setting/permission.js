import request from '@/utils/request'
import {proxyUrl} from '@/utils/config'
// 菜单列表
export function permissionList(data) {
  return request({
    url: proxyUrl+'/permission/permissionList',
    method: 'post',
    data
  })
}
//菜单新增
export function permissionAdd(data) {
  return request({
    url: proxyUrl+'/permission/permissionAdd',
    method: 'post',
    params: data
  })
}
//菜单上级路由
export function permissionRoutes(data) {
  return request({
    url: proxyUrl+'/permission/permissionRoutes',
    method: 'post',
    params: data
  })
}
//菜单明细
export function permissionDetail(data) {
  return request({
    url: proxyUrl+'/permission/permissionDetail',
    method: 'post',
    params: data
  })
}
//菜单编辑
export function permissionEdit(data) {
  return request({
    url: proxyUrl+'/permission/permissionEdit',
    method: 'post',
    params: data
  })
}

//菜单编辑
export function permissionDelete(data) {
  return request({
    url: proxyUrl+'/permission/permissionDelete',
    method: 'post',
    params: data
  })
}


