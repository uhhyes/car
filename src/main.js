// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import components from "@/components"
import "@/assets/style/animate.css"
import "@/assets/style/normalize.css"
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import vueTouch from "vue-touch"
//Vue.use(vueTouch,{name:"v-touch"})
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(components)
var width=window.innerWidth
var height=window.innerHeight
var num=0;
if(width>height){
	num=height
}else{
	num=width
}
document.children[0].style.fontSize=num/10+"px"
window.addEventListener("resize",function(){
	document.children[0].style.fontSize=num/10+"px"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
