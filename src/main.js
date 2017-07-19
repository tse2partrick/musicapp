import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import LazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import store from './store'

fastclick.attach(document.body)

Vue.use(LazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
