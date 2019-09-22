import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import component from './components/index.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(component)
// 配置url全局常项
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
