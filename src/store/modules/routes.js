/**
 * @author chuzhixin 1204505056@qq.com
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式，其中partialRoutes是菜单暂未使用
 */
import { addRoutes } from '@/router'
import store from '../index'
import { getPermission } from '@/api/setting/user'
import { convertRouter } from '@/utils/routes'

const state = () => ({
  routes: [],
  partialRoutes: [],
})
const getters = {
  routes: (state) => state.routes,
  partialRoutes: (state) => state.partialRoutes,
}
const mutations = {
  setRoutes(state, routes) {
    state.routes = routes
  },
}
const actions = {

  /**
   * @author chuzhixin 1204505056@qq.com
   * @description all模式设置路由
   * @param {*} { commit }
   * @returns
   */
  async setAllRoutes({ commit }) {
    let { data } = await getPermission({ roles: store.getters['user/roles'] })
    // if (data.length==0||data[data.length - 1].path !== '*'){
    //   data.push({ path: '*', redirect: '/404', hidden: true })
    // }
     

    console.log(data)
    
    const asyncRoutes = convertRouter(data)
 

    commit('setRoutes', asyncRoutes)

    return [...asyncRoutes]
  },

}
export default { state, getters, mutations, actions }
