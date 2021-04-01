import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/login/403.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/login/404.vue'),
  },

  // {
  //   path: '/',
  //   name: 'Home',
  //   redirect: '/about',
  //   component: () => import('@/views/Home.vue'),
  //   children: [
  //     {
  //       path: '/about',
  //       name: 'About',
  //       component: () => import('@/views/About.vue')
  //     }
  //   ]
  // },

]
export const addRoutes = [
  {
    path: '/',
    component: "Layout",
    redirect: '/vab/icon',
    fullPath: "/",
    meta: {
      title: '首页',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        fullPath: "/index",
        component: "index/index",
        meta: {
          title: '首页',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    alwaysShow: true,
    component: "Layout",
    fullPath: "/vab",
    meta: { title: "组件", icon: "apps-line" },
    path: "/vab",
    redirect: "/vab/table",
    children: [
      {
        component: "/vab/table",
        fullPath: "/vab/table",
        meta: { title: "表格", icon: "table-2" },
        name: "Table",
        path: "/vab/table",
      },
      {
        component: "/vab/icon",
        fullPath: "/vab/icon",
        meta: { title: "图标", icon: "remixicon-line" },
        name: "Icon",
        path: "/vab/icon",
      },
    ],
  },
  // {
  //   alwaysShow: true,
  //   component: Layout,
  //   fullPath: "/vab",
  //   meta: { title: "组件", icon: "apps-line" },
  //   path: "/vab",
  //   redirect: "/vab/table",
  //   children: [
  //     {
  //       component: () => import('@/views/Home.vue'),
  //       fullPath: "/vab/table",
  //       meta: { title: "表格", icon: "table-2" },
  //       name: "Table",
  //       path: "/vab/table",
  //     },
  //     {
  //       component: () => import('@/views/Home.vue'),
  //       fullPath: "/vab/icon",
  //       meta: { title: "图标", icon: "remixicon-line" },
  //       name: "Icon",
  //       path: "/vab/icon",
  //     },
  //   ],
  // },


]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
