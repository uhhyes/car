<template>
	<div>
		<v-touch tag="div" class="v-touch" v-on:swipeleft="next" v-on:swiperight="prev">
			<div class="box" @mouseleave="autoPlay" @mouseenter="stopPlay"">
				<transition-group tag="div"
					 :enter-active-class="enter"
		   			 :leave-active-class="leave" class="imgs">
					<div class="img" v-for="(item,index) in imgs" v-show="img_index==index" :key="index">
						<img :src="item"/>
					</div>
				</transition-group>
				<div class="lists">
					<div v-for="(item,index) in imgs" class="list" :class="{active:img_index==index}" :key="index"></div>
				</div>
			</div>
		</v-touch>
	</div>
</template>
<script>
	export default {
		name:"iBanner",
		props:{
			imgs:{
				type:Array,
				required:true
			}
		},
		data(){
			return {
				newimgs:[],
				img_index:0,
				leave:"animated bounceOutRight",
				enter:"animated bounceInLeft",
				time:null,
				newx:0
			}
		},
		methods:{
			prev(){
				this.enter="animated bounceInLeft"
				this.leave="animated bounceOutRight"
				this.img_index--
				if(this.img_index<0){
					this.img_index=this.imgs.length-1
				}
			},
			next(){
				this.enter="animated bounceInRight"
				this.leave="animated bounceOutLeft"
				this.img_index++
				if(this.img_index>=this.imgs.length){
					this.img_index=0
				}
			},
			autoPlay(){
				var that=this
				this.time=setInterval(function(){
					that.next()
				},6000)
			},
			stopPlay(){
				clearInterval(this.time)
			}
		},
		mounted(){
			this.autoPlay()
		}
	}
</script>

<style>
	.box{
		position: relative;
		width:100%;
		height: 3.5rem;
		overflow: hidden;
	}
	.imgs{
		height: 100%;
	}
	.img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height:100%;
	}
	img{
		width: 100%;
		height:100%;
	}
	.v-touch{
		position: static;
	}
	.lists{
		position: absolute;
		bottom: 0.2rem;
		width:100%;
		height: 0.3rem;
		display: flex;
		justify-content: center;
	}
	.list{
		width:0.2rem;
		height:0.2rem;
		background-color: rgba(255,255,255,.4);
		border: 1px solid #ccc;
		margin: 0 0.1rem;
		border-radius: 50%;
	}
	.active{
		background-color: white;
	}
</style>