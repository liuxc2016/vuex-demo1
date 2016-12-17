import App from '../App.vue'
import Login from "../components/login.vue"
import Signout from "../components/signout.vue"
import Home from "../components/home.vue"


export default [
	{
		path: '/v' ,
		component: App,
		children: [
			{
				path: "login",   //登陆页面
				component: Login

			},
			{
				path: "signout",  //退出登陆
				component: Signout
			},
			{
				path: "home",  //个人首页
				component: Home
			},
			{
				path: "",  //个人首页
				component: Home
			}
		]
	}

]
