import Vue from 'vue'
import App from './app.vue'
const root = document.createElement('div')
document.body.appendChild(root)
const mount = Vue.prototype.$mount
new Vue({

  render: h => h(App)
}).$mount('#app')