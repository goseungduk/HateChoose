import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**
* application 구동 시 필요한 기본요소들 import
* store 안의 파일들은 custom 모듈? how use it?
@ author : goseungduk
*/

import BootstrapVue from 'bootstrap-vue'
import VueWait from 'vue-wait'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueWait)

/**
* Vue 전용 Bootstrap 모듈 import
@ author : goseungduk
*/

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/**
* 선언된 Vue 객체로 모든 어플리케이션이 구동됨.
@ author : goseungduk
@ version : 1.0.0
*/