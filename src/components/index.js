import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import axios from 'axios'
export default {
  install (Vue) {
    axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.prototype.$axios = axios
  }
}
