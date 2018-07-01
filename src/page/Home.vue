<template>
	<div class="home">
		<iHeader title="首页">
			<div class="left" slot="left">
			</div>	
			<div class="right" slot="right" @click="showMore">
				<i class="iconfont icon-gengduo">
					<div class="more" v-if="isShow">
						<div class="release_thing" @click="$router.push('/home/release')"><i class="iconfont icon-xiaoxi"></i>发布动态</div>
					</div>
				</i>
			</div>
		</iHeader>
		<iContent>
			<iBanner :imgs="imgdata"></iBanner>
			<iThing :data="data" @tab="tab(data)"/>
			<iThing :data="data" @tab="tab(data)"/>
		</iContent>
	</div>
</template>

<script>
	export default {
		name:"Home",
		data(){
			return{
				imgdata:['../static/img/0.jpg','../static/img/1.jpg','../static/img/2.jpg','../static/img/3.jpg'],
				data:{
					release_date:new Date(),
					head_portrait:"../../static/img/logo.png",
					name:"来自长安",
					text:"今天天气正好",
					imgs:["http://img5.imgtn.bdimg.com/it/u=2406903066,3043716999&fm=27&gp=0.jpg",
					"http://img2.imgtn.bdimg.com/it/u=3889351619,2518356235&fm=27&gp=0.jpg",
					"http://img0.imgtn.bdimg.com/it/u=2510380458,3692651824&fm=27&gp=0.jpg",
					"http://img1.imgtn.bdimg.com/it/u=401407245,3836434162&fm=27&gp=0.jpg"],
					likes:"99",
					isLike:false,
					comment:"100"
				},
				isShow:false
			}
		},
		computed:{
			date(){
				return new Date()
			}
		},
		methods:{
			showMore(){
				this.isShow=!this.isShow
			},
			tab(data){
				this.$router.push({name:"details",params:data})
			}
		}
	}
</script>

<style scoped="scoped">
	.home{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.right{
		position: relative;
	}
	.right .more{
		border-radius: 0 0 0 8px;
		display: flex;
		flex-direction: column;
		position: absolute;
		top:1.3rem;
		right: 0;
		color: #111;
		z-index: 1;
		width:3rem;
		font-size: 30px;
		line-height: 2.5;
		background-color: rgba(255,255,255,1);
	}
	.right .more i{
		margin-right: .2rem;
	}
</style>