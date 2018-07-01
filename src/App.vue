<template>
  <div id="app">
  <transition name="tran" :enter-active-class="transitionIn" :leave-active-class="transitionOut" >
  	<router-view class="content"></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
				transitionIn:"router_silde SlideInRight",
				transitionOut:"router_silde SlideOutLeft"
  	}
  },
  watch:{
  	$route(to,from){
  		var to_len=to.path.split("/").length
  		var from_len=from.path.split("/").length
  		if(to_len>from_len){
  			this.transitionIn="router_silde slideInRight"
				this.transitionOut="router_silde slideOutLeft"
  		}else if(to_len<from_len){
  			this.transitionIn="router_silde slideInLeft"
				this.transitionOut="router_silde slideOutRight"
  		}
  	}
  }
}
</script>

<style scoped="scoped">
 html,body{
  	width:100%;
  	height:100%;
  	margin: 0;
 }
</style>
