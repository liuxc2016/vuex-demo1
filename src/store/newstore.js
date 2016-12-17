import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    state: {
		count: 0,
		overCount: 5,
		ggg : '333',
		twoSideCount: 99
	},
	mutations: {
		// increment(state){
		// 	 state.count++
		// 	},
		
		// decrement(state){
		// 	state.count--
		// }

		increment: state => state.count++,
		decrement: state => state.count--,
		addTwoSideCount: (state, msg) => state.twoSideCount = msg 
	},
	actions: {
		actIncrement(context, val){
			context.commit('increment')
		}
	}
})