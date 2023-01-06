import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import BlankView from "@/views/BlankView";
import FormsView from "@/views/FormsView";

import AlertsView from "@/views/AlertsView";
import DatatableView from "@/views/DatatableView";
import ChartsView from "@/views/ChartsView";
import store from "@/store/index.js";
import FormElementsView from "@/views/FormElementsView.vue";
import InteractiveDatatableView from "@/views/InteractiveDatatableView.vue";
import InteractiveDatatablePaginatedView from "@/views/InteractiveDatatablePaginatedView.vue";

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
    path: '/form-elements',
    name: 'form-elements',
    component: FormElementsView
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
    path: '/interactive-datatable',
    name: 'interactive-datatable',
    component: InteractiveDatatableView
  },
  {
    path: '/interactive-datatable-paginated/:page',
    name: 'interactive-datatable-paginated',
    component: InteractiveDatatablePaginatedView
  },
  {
    path: '/interactive-datatable-paginated',
    name: 'interactive-datatable-paginated',
    component: InteractiveDatatablePaginatedView
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
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.state.user.logged_in==0) next({ name: 'login' })
  else
    if (to.name == 'login' && store.state.user.logged_in==1) next({ name: 'home' })
    else
    next()
})
export default router
