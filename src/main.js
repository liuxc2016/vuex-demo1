import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import store from './store/newstore'

// const store = new Vuex.Store({
// 	state: {
// 		count: 0
// 	},
// 	mutations: {
// 		increment(state){
// 			 state.count++
// 			},
// 		decrement(state){
// 			state.count--
// 		}
// 	}
// })


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

