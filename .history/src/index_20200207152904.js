import Vue from 'vue'
import App from './App.vue'
import './stylus/global.styl'
const root = document.createElement('div')
//dom操作加入某个位置
document.body.appendChild(root)

new Vue({

  render: h => h(App)
}).$mount(root)