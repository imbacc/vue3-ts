import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import store from './common/store/index'
import router from './common/tools/cmake_router'
import tools from './common/tools/cmake_tools'
import action from './common/tools/http_action'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// 挂载5秒后，应用将被卸载
// setTimeout(() => app.unmount('#app'), 5000)

// 全局 property
// app.config.globalProperties.is_vuex = store
app.config.globalProperties.is_router = router
app.config.globalProperties.is_tools = tools
app.config.globalProperties.is_action = action
app.config.globalProperties.is_cdn = 'https://www.baidu.com/static/img/'

// 处理错误
// app.config.errorHandler = (err, vm, info) => {
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

// app.config.devtools = true
// 
// 全局注册组件
// app.component('component-a', {
	// mounted() {
	// 	console.log(this.foo) // 'bar'
	// }
// })

// 全局注册组件指令
// app.directive('focus', {
	// mounted() { 
	// 	el => el.focus()
	// }
//   mounted: el => el.focus()
// })
