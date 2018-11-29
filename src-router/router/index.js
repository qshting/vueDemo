import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import noFound from '@/components/404'

import nameDoc from '@/components/document/nameDoc'
import ageDoc from '@/components/document/ageDoc'
import sexDoc from '@/components/document/sexDoc'

Vue.use(Router);

export default new Router({
  mode:'history',
 // linkActiveClass:'is-active',
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/document',
      component: document,
      children:[
        {
          path: '',   //默认子路由
          name:'nameDoc',
          component: nameDoc
        },
        {
          path: 'ageDoc',
          name:'ageDoc',
          component: ageDoc
        },
        {
          path: 'sexDoc',
          name:'sexDoc',
          component: sexDoc
        },
      ]
    },
    {
      path: '*',
      component: noFound
      // redirect:'/home'  // 重定向, 找不到的时候,默认home页
    }
  ]
})
