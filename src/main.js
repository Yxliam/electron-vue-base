import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'
import filters from './filters'

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false



// 全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})


// ctrl+shif+i 打开调试工具
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
