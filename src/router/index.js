import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import BlankView from "@/views/BlankView";
import FormsView from "@/views/FormsView";
import AlertsView from "@/views/AlertsView";
import DatatableView from "@/views/DatatableView";
import ChartsView from "@/views/ChartsView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/blank',
    name: 'blank',
    component: BlankView
  }
  ,
  {
    path: '/forms',
    name: 'forms',
    component: FormsView
  }
  ,
  {
    path: '/alerts',
    name: 'alerts',
    component: AlertsView
  }
  ,
  {
    path: '/datatable',
    name: 'datatable',
    component: DatatableView
  },
  {
    path: '/charts',
    name: 'charts',
    component: ChartsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
