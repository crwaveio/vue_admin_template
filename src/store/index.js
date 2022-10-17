import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import panel from './modules/panel'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user:user,
    panel:panel
  },
  plugins: [vuexLocal.plugin]

})

