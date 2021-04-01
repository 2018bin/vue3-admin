import { createApp } from 'vue'
import App from '@//App.vue'
import router from '@//router'
import store from '@/store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/plugins'

// import Vant from 'vant';
// import 'vant/lib/index.css';

// import binUI from 'bin-ui'
// import 'bin-ui/lib/index.css'

// import Vant from 'vant';
// import 'vant/lib/index.css';

const app = createApp(App).use(store).use(router).use(Antd)
// .use(Vant)
// .use(binUI)

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
    // 其组件目录的相对路径
    './components',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach((fileName) => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)
    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')
            // 获取和目录深度无关的文件名
        )
    )
    // 全局注册组件
    app.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
    )
})

app.mount('#app')
