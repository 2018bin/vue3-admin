import request from '@/utils/request'
import {proxyUrl} from '@/utils/config'
 
//获取可选权限
export function getRoutes() {
  return request({
    url: proxyUrl+'/role/getRoutes',
    method: 'get'
  })
}

//获取角色列表
export function roleList(data) {
  return request({
    url: proxyUrl+'/role/roleList',
    method: 'get',
    params:data
  })
}
//新增角色
export function roleAdd(data) {
  return request({
    url: proxyUrl+'/role/roleAdd',
    method: 'post',
    params:data
  })
}
//角色详情
export function roleDetail(data) {
  return request({
    url: proxyUrl+'/role/roleDetail',
    method: 'get',
    params:data
  })
}
//修改角色
export function roleEdit( data) {
  return request({
    url: proxyUrl+'/role/roleEdit',
    method: 'post',
    params:data
  })
}
//删除角色
export function roleDelete(data) {
  return request({
    url: proxyUrl+'/role/roleDelete',
    method: 'post',
    params:data
  })
}
