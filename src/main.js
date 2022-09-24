import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuetify)
Vue.use(Vuelidate)



Vue.config.productionTip = false

new Vue({
  router,
  store,
    vuetify: new Vuetify(),
 render: h => h(App)
}).$mount('#app')
