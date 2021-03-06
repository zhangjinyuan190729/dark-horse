import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index'
import Main from './views/home/main'
import login from './views/login'
import Agreement from './views/agreement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: Main
      },
      {
        path: 'comment', // 按需加载
        component: () => import('./views/comment')
      },
      {
        path: 'material', // 按需加载
        component: () => import('./views/material')
      },
      {
        path: 'articles', // 按需加载
        component: () => import('./views/articles')
      }]

    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/agreement',
      component: Agreement
    }
    // {
    //   path: '/about',
    //   name: 'about'
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
