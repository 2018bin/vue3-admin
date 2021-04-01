import request from '@/utils/request'
import {proxyUrl} from '@/utils/config'
//机构列表
export function orgList(data) {
  return request({
    url: proxyUrl+'/org/orgList',
    method: 'post',
    params: data
  })
}
//机构新增
export function orgAdd(data) {
  return request({
    url: proxyUrl+'/org/orgAdd',
    method: 'post',
    params: data
  })
}
//机构详情
export function orgDetail(data) {
  return request({
    url: proxyUrl+'/org/orgDetail',
    method: 'post',
    params: data
  })
}
//机构编辑
export function orgEdit(data) {
  return request({
    url: proxyUrl+'/org/orgEdit',
    method: 'post',
    params: data
  })
}
//机构删除
export function orgDelete(data) {
  return request({
    url: proxyUrl+'/org/orgDelete',
    method: 'post',
    params: data
  })
}
//上级机构选择
export function orgTree(data) {
  return request({
    url: proxyUrl+'/org/orgTree',
    method: 'post',
    params: data
  })
}

//路由权限
export function getRoutes(data) {
  return request({
    url: proxyUrl+'/org/getRoutes',
    method: 'post',
    params: data
  })
}

