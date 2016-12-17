import Vue from 'vue'
import Vuex from 'vuex'
import {Toast, Indicator } from 'mint-ui'
import axios from 'axios'


Vue.use(Vuex)

const SIG_LOGIN_ACTION = 'SIG_LOGIN_ACTION'
const SIG_SIGNOUT = 'SIG_SIGNOUT'

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    state: {
		count: 0,
		overCount: 5,
		ggg : '333',
		twoSideCount: 99,
		user:{
			id:0,
			name:'guest',
		}
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
		addTwoSideCount: (state, msg) => state.twoSideCount = msg ,
		SIG_LOGIN: (state, val) => {
			state.user.id = 1
			state.user.name = val.user.name
		},
		SIG_SIGNOUT: (state) =>{
			state.user.id = 0
			state.user.name = 'guest'
		}
	},
	actions: {
		actIncrement(context, val){
			context.commit('increment')
		},
		[SIG_LOGIN_ACTION](context, val){
			Indicator.open({
			  text: '登陆中...',
			  spinnerType: 'fading-circle'
			});
			return new Promise((resolve, reject) => {
				axios.get('http://localhost:8081/')
				  .then(function (response) {
				  	Indicator.close();
				    context.commit('SIG_LOGIN', val)
				    // Toast('登陆成功');
				    resolve('登陆成功');
				  })
				  .catch(function (error) {
				  	Indicator.close();
				    // Toast(" 登陆失败: " + error)
				    reject(" 登陆失败: " + error);
				  });
		    })


		}
	}
})