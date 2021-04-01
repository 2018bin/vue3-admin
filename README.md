# 后台管理系统

## 前言
该项目为前后端分离项目的前端端部分，后端端项目地址：[传送门](https://github.com/2018bin/admin-php)。

## 项目介绍
这是一个后台管理系统的后端，基于ThinkPHP6+MySql实现，主要包括用户管理，菜单资源管理、角色管理、机构管理。

## 项目演示
[项目在线演示地址](www.bin.organic)


## 组织结构
```
www  WEB部署目录（或者子目录）
├─public                公共文件
│  ├─favicon.ico        图标
│  └─index.html         首页入口文件
│
├─src                   存放项目源码及需要引用的资源文件。
│  ├─api                接口管理
│  ├─assets          存放项目中需要用到的资源文件，css、js、images
│  ├─components         组件
│  ├─compositionApi     抽出逻辑的封装
│  ├─layout             Layout 布局
│  ├─plugins            插件引用
│  ├─router             路由
│  ├─store              状态管理
│  ├─utils              工具封装
│  ├─views              页面代码
│  │  ├─setting         系统配置功能页面
│  │  │  ├─admin        用户管理页面
│  │  │  ├─org          机构管理页面
│  │  │  ├─permission   菜单资源管理页面
│  │  │  └─role         角色管理页面
│  │  └─login           登录页面
│  ├─App.vue            使用标签<route-view></router-view>渲染整个工程的.vue组件
│  ├─main.ts            入口文件
│  └─shims-vue.d.ts     TS语法配置
│
├─.gitignore            git忽略文件
├─babel.config          babel配置文件
├─package.json          项目配置文件
├─tsconfig.json         配置TypeScript
├─README.md             README 文件
├─vue.config.js         配置文件
```
## 技术栈
### 后端
|  技术       | 说明     |    官网  | 
|  ---         |   ---  |     ---  |  
|   Mysql      |数据库	  | https://www.mysql.com/ |
|   ThinkPHP6  |框架	  | https://www.kancloud.cn/manual/thinkphp6_0/1037479  |
 
### 前端
|  技术       | 说明     |    官网  | 
|  ---         |   ---  |     ---  |  
|   Vue3      |前端框架	  | https://www.vue3js.cn/docs/zh/guide/introduction.html |
|   Vue-router |路由框架	  | https://router.vuejs.org/  |
|   Vuex       |全局状态管理框架	  | https://github.com/vuejs/vuex  |
|   Axios      |HTTP框架	  | http://www.axios-js.com/  |
|   Ant Design of Vue |	前端UI框架	  | https://2x.antdv.com/docs/vue/introduce-cn/  |
## 开发环境
|  工具   | 版本号 |   
|  ---    |   ---  |  
|   Mysql  |5.7	    | 
|   Nginx  |1.10	     | 
|   php	   |7.2     | 
|   node.js	|12.6.0	 | 
 
## 搭建步骤
- 配置node.js
-  ```   git clone    https://github.com/2018bin/vue3-admin.git  ```
- vue.config.js配置访问接口地址
- ```   npm install  ```
- ```   npm run dev  ```

