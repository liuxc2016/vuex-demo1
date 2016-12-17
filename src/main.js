import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(MintUI)

import store from './store/newstore'
import routes from "./config/routes.js" 

const router = new VueRouter({
	routes
})

//方案一
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')

app.$route.push("/v")

//方案二
// const app = new Vue({ store, router }).$mount('#app')


