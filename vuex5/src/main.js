import Vue from 'vue'
import App from './App.vue'
import { store1 } from './store/store' //importowanie cetral store; 
//'store1 to nazwa zmiennej gdzie przechowujemy centralne dane

new Vue({
  store: store1, //używanie store
  el: '#app',
  render: h => h(App)
})
