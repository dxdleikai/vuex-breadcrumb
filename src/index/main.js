import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../style/element-variables.scss'
import ElementUI from 'element-ui'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import '../style/reset.scss'

Vue.config.productionTip = false

window.BASE_URL = process.env.BASE_URL

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
