import Vue from 'vue'
import Router from 'vue-router'
import Screen from "@/page/Screen"
import Home from "@/page/Home"
import News from "@/page/News"
import Info from "@/page/Info"
import Me from "@/page/Me"
import Details from "@/page/Details"
import Release from "@/page/Release"
import Balance from "@/page/Balance"
import Set from "@/page/Set"

Vue.use(Router) 

export default new Router({
	routes: [{
		path: '/',
		redirect:"/home",
		name: 'Screen',
		component: Screen,
		children: [{
			path: "/home",
			name: "Home",
			component:Home
		}, {
			path: "/news",
			name: "News",
			component:News
		},{
			path: "/info",
			name: "Info",
			component:Info
		},{
			path: "/me",
			name: "Me",
			component:Me
		}]
	},{
		path:"/home/details",
		name:"details",
		component:Details
	},{
		path:'/home/release',
		name:"release",
		component:Release
	},{
		path:"/me/balance",
		name:"balance",
		component:Balance
	},{
		path:"/me/set",
		name:"set",
		component:Set
	}]
})

