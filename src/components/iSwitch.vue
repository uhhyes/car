<template>
	<div @click="isSwitch" class="f" :style="{backgroundColor:color}" :class="[{active:status},size]" :disabled="disabled">
		<div class="c" :class="{active:status}"></div>
	</div>
</template>

<script>
	export default {
		name:"iSwitch",
		props:{
			color:null,
			switch:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			size:{
				default:"middle"
			}
		},
		data(){
			return {
				status:this.switch	
			}
		},
		methods:{
			isSwitch(){
				this.disabled?"":this.status=!this.status
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.big(@width,@height){
		position: relative;
		width: @width;
		height: @height;
		border-radius: 30px;
		background-color: #ccc;
		transition: background-color .3s ease-in-out; 
		&:hover{
			cursor: pointer;
		}
	}
	.small(@width,@height,@left){
		position: absolute;
		left: @left;
		top: 2px;
		width: @width;
		height: @height;
		border-radius: 50%;
		background-color: white;
		transition: left .3s ease-in-out; 
	}
	.f.active{
		background-color: hotpink;
	}
	.middle{             /*中框*/
		.big(100px,50px)
	}
	.middle>div{
		.small(46px,46px,2px)
	}
	.middle>div.active{
		.small(46px,46px,52px)
	}
</style>