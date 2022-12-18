import Vue from 'vue'
import App from './App.vue'
import XinyuUI from '../packages'
Vue.config.productionTip = false
Vue.use(XinyuUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
