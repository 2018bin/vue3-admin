import router from '@/router'
import Layout from '@/layout/index.vue'



/**
 * @author chuzhixin 1204505056@qq.com
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
export function convertRouter(constantRoutes, parentRoute) {

  return constantRoutes.map((route) => {
    if (route.component) {

      if (route.component === 'Layout') {
        // const path = 'layouts'
        // route.component = (resolve) => require([`@/${path}`], resolve)
        route.component = Layout
      } else {

        let path = 'views/' + route.component
        if (
          new RegExp('^/views/.*$').test(route.component) ||
          new RegExp('^views/.*$').test(route.component)
        ) {
          path = route.component
        } else if (new RegExp('^/.*$').test(route.component)) {
          path = 'views' + route.component
        } else if (new RegExp('^@views/.*$').test(route.component)) {
          path = route.component.slice(1)
        } else {
          path = 'views/' + route.component
        }
        // route.component = (resolve) => require([`@/${path}` + '.vue'], resolve)
        route.component = () => import(`@/${path}` + '.vue')
      }
    }
    if (route.children && route.children.length)
      route.children = convertRouter(route.children, route)

    if (route.children && route.children.length === 0) delete route.children

    return route
  })
}


/**
 * 根据当前页面firstMenu
 * @returns {string}
 */
export function handleFirstMenu() {
  const firstMenu = router.currentRoute.matched[0].path
  if (firstMenu === '') return '/'
  return firstMenu
}
