// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { TimeSelect } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import i18n from './locale'
Vue.config.productionTip = false
Vue.config.lang = 'en'
Vue.locale('zh', i18n.zh)
Vue.locale('en', i18n.en)
Vue.use(TimeSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
