import axios from 'axios'
import Bigjson from 'json-bigint'
import router from '../permission'
import { Message } from 'element-ui'

// 处理大数字bug
axios.defaults.transformResponse = [function (data) {
  return data ? Bigjson.parse(data) : {}
}]
// 请求拦截  参数 成功函数  失败函数

axios.interceptors.request.use(function (config) {
  // 成功后把token赛道每个请求的请求头里
  config.headers['Authorization'] = `Bearer ${window.localStorage.getItem('user-token')}`
  return config
}, function (error) {
  // 失败让错误抛出
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(function (config) {
  return config.data ? config.data : {}
}, function (error) {
  let status
  if (error.response) {
    status = error.response.status
  } else {
    status = ''
  }

  let message = '未知错误'
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '403 refresh_token未携带或已过期'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      message = 'token过期或未出'
      window.localStorage.clear() // 清空缓存
      router.push('/login') // this.$router.push()
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ message, type: 'warning' })
  return new Promise(() => {})
})
export default axios
