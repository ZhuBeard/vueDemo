/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import layout from 'components/layout'
import flex from 'components/flex'
import vueTap from 'v-tap'
import 'css/font.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(MuseUI)
Vue.use(vueTap)
Vue.component('layout', layout)
Vue.component('flex', flex)

Vue.http.interceptors.push((request, next) => {
  next(response => {
  }, (error) => {
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
