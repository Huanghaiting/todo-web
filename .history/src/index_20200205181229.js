import Vue from 'vue'
import App from './app.vue'
const root = document.createElement('div')
document.body.appendChild(root)
window.onload = function () {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
}