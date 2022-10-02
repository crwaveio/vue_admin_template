import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/MainView.vue'
import LoginView from "@/views/LoginViews/LoginView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
