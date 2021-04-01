/**
 * @author chuzhixin 1204505056@qq.com
 * @description vue.config.js全局配置
 */
module.exports = {
  devServer: {
    hot: true,
    port: 8080,
    open: false,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    // 注释掉的地方是前端配置代理访问后端的示例
    proxy: {
      '/admin-api': {
        target: `http://localhost:82/admin.php`,
        ws: true,
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/admin-api': '' //需要rewrite的,
        }
      },
    },

  },
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 修复HMR热更新
    config.resolve.symlinks(true)
  },

  css: {
  requireModuleExtension: true,
    sourceMap: true,
      loaderOptions: {
    less: {
      lessOptions: {
        javascriptEnabled: true,
          modifyVars: {
          'vab-color-blue': '#1890ff',
            'vab-margin': '20px',
              'vab-padding': '20px',
                'vab-header-height': '65px',
          },
      },
    },
  },
},

}
