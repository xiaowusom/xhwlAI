// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import { Spin, Icon, Row, Col, Button, Modal } from 'iview'
// import $ from 'jquery'

import '../theme/iview.css'
Vue.component('Spin', Spin)
Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Button', Button)
Vue.component('Modal', Modal)

Vue.use(VueResource)
Vue.config.productionTip = false
// Vue.prototype.$ = $;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
