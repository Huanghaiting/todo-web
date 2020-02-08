import Vue from 'vue'
import App from './app.vue'
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  el: document.querySelector('#app'),
  render: h => h(App)
})