import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import VueI18n from 'vue-i18n'
import store from "@/store/index";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(VueI18n)


//i18n codes

import { languages } from './i18n/index.js'
const messages = Object.assign(languages)
var i18n = new VueI18n({
    locale:store.state.panel.lang,
    fallbackLocale: 'tr',
    messages
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
    i18n,
    vuetify: new Vuetify(),
 render: h => h(App)
}).$mount('#app')
