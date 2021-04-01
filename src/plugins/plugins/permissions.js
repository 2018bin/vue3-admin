/**
 * @author chuzhixin 1204505056@qq.com
 * @description 路由守卫，目前两种模式：all模式与intelligence模式
 */
import router from '@/router'
import { addRoutes } from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

const routesWhiteList = ['/login']// 不重定向白名单 后面使用配置文件

router.beforeEach(async (to, from, next) => {
  NProgress.start()// 进度条显示开始
 
  let hasToken = store.getters['user/accessToken']

  if (hasToken) {
    if (to.path === '/login') {
      await store.dispatch('user/logout')
      next({ path: '/login' })
      NProgress.done() // 进度条显示完成
    } else {

      const hasRoles = store.getters['user/roles'].length
      let routes = router.getRoutes()
      let isFind = routes.findIndex((item) => {
        if (item.path == to.path) {
          return true
        }
      })
      if (hasRoles && isFind != -1) {
        next()
      } else {
        try {

          await store.dispatch('user/getUserInfo')


          let accessRoutes = []

          accessRoutes = await store.dispatch('routes/setAllRoutes')

          if (accessRoutes.length == 0) {
            //没有菜单资源
            next({ path: '/404' })
            NProgress.done() // 进度条显示完成
          }

          accessRoutes.forEach((item) => {
            router.addRoute(item)
          })
          // accessRoutes.forEach((item) => {
          //   router.addRoute(item)
          // })
          console.log(router.getRoutes())

          next({ ...to, replace: true })
        } catch {
          await store.dispatch('user/resetAll')
          next({
            path: '/login',
            query: { redirect: to.path },
            replace: true,
          })

        }
      }
    }
  } else {

    if (routesWhiteList.indexOf(to.path) !== -1) { // 如果路由在白名单，则不需要验证
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path }, replace: true })
    }
    NProgress.done() // 进度条显示完成
  }
  
})
router.afterEach((to) => {
  NProgress.done() // 进度条显示完成
})
router.onError((to, from, next)=>{
  router.push({ path: '/403' }).catch(() => { })
  NProgress.done() // 进度条显示完成
})
