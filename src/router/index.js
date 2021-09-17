import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    { path: '/products/:id', component: Products }
  ]
})
