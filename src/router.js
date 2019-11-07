import Vue from 'vue'
import Router from 'vue-router'

import Layout from './components/Layout.vue'
import Home from './components/Home.vue'
import News from './components/News.vue'
import About from './components/About.vue'

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path:'',
        component: Home
      },
      {
        path:'news',
        component: News
      },
      {
        path: 'about',
        component: About
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router