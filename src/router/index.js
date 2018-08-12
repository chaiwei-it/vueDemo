import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/platform',
    component: Layout,
    redirect: '/platform/goods',
    name: 'Platform',
    meta: { title: '平台自营', icon: 'example' },
    children: [
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/goods/index'),
        meta: { title: '商品管理', icon: 'tree' }
      }
    ]
  },
  // {
  //   path: '/system',
  //   component: Layout,
  //   redirect: '/system/user',
  //   name: 'System',
  //   meta: { title: '系统管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'user',
  //       name: 'User',
  //       component: () => import('@/views/user/index'),
  //       meta: { title: '用户管理', icon: 'user' }
  //     },
  //     {
  //       path: 'agent',
  //       name: 'Agent',
  //       component: () => import('@/views/agent/index'),
  //       meta: { title: '代理管理', icon: 'tree' }
  //     },
  //     {
  //       path: 'putforward',
  //       name: 'Putforward',
  //       component: () => import('@/views/putforward/index'),
  //       meta: { title: '提现管理', icon: 'user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/platform',
  //   component: Layout,
  //   redirect: '/platform/goodsClass',
  //   name: 'Platform',
  //   meta: { title: '平台自营', icon: 'example' },
  //   children: [
  //     {
  //       path: 'goodsType',
  //       name: 'GoodsType',
  //       component: () => import('@/views/goodsType/index'),
  //       meta: { title: '商品类型管理', icon: 'user' }
  //     },
  //     {
  //       path: 'spec',
  //       name: 'Spec',
  //       component: () => import('@/views/spec/index'),
  //       meta: { title: '规格管理', icon: 'user' }
  //     },
  //     {
  //       path: 'specValue',
  //       name: 'SpecValue',
  //       component: () => import('@/views/spec/specValue'),
  //       hidden: true,
  //       meta: { title: '规格值管理' }
  //     },
  //     {
  //       path: 'goodsAdd',
  //       name: 'GoodsAdd',
  //       component: () => import('@/views/goods/add'),
  //       hidden: true,
  //       meta: { title: '添加商品', icon: 'tree' }
  //     },
  //     {
  //       path: 'goodsUpdate',
  //       name: 'GoodsUpdate',
  //       component: () => import('@/views/goods/update'),
  //       hidden: true,
  //       meta: { title: '修改商品', icon: 'tree' }
  //     },
  //     {
  //       path: 'goods',
  //       name: 'Goods',
  //       component: () => import('@/views/goods/index'),
  //       meta: { title: '商品管理', icon: 'tree' }
  //     },
  //     // {
  //     //   path: 'test',
  //     //   name: 'Test',
  //     //   component: () => import('@/views/test/index'),
  //     //   meta: { title: '测试管理', icon: 'tree' }
  //     // },
  //     {
  //       path: 'order',
  //       name: 'Order',
  //       component: () => import('@/views/order/index'),
  //       meta: { title: '订单管理', icon: 'tree' }
  //     },
  //     {
  //       path: 'orderDetails',
  //       name: 'OrderDetails',
  //       component: () => import('@/views/order/details'),
  //       hidden: true,
  //       meta: { title: '订单详情', icon: 'tree' }
  //     },
  //     {
  //       path: 'orderUpdate',
  //       name: 'OrderUpdate',
  //       component: () => import('@/views/order/update'),
  //       hidden: true,
  //       meta: { title: '订单修改', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/operate',
  //   component: Layout,
  //   redirect: '/operate/goodsClass',
  //   name: 'Operate',
  //   meta: { title: '运营管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'goodsClass',
  //       name: 'GoodsClass',
  //       component: () => import('@/views/goodsClass/index'),
  //       meta: { title: '商品分类管理', icon: 'user' }
  //     },
  //     {
  //       path: 'allOrder',
  //       name: 'AllOrder',
  //       component: () => import('@/views/order/index'),
  //       meta: { title: '订单管理', icon: 'tree' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

