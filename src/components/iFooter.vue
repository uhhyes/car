<template>
	<div>
		<footer>
			<router-link :to="item.to" v-for="(item,index) in tos" :key="index">
				<i class="iconfont" :class="['icon-'+item.name]"></i> 
				<div class="to">{{item.tip}}</div>
			</router-link>
		</footer>
	</div>
</template>

<script>
	import "@/assets/iconfont/iconfont.css"
	export default{
		name:"iFooter",
		props:{
			
		},
		data(){
			return {
				tos:[{
					to:"/home",
					tip:"首页",
					name:"shouye"
				},{
					to:"/news",
					tip:"资讯",
					name:"news"
				},{
					to:"/info",
					tip:"消息",
					name:"info"
				},{
					to:"/me",
					tip:"我",
					name:"me"
				}]
			}
		}
	}
</script>

<style>
	footer{
		border-top: 1px solid #666;
		width:10rem;
		height: auto;
		display: flex;
		justify-content: space-around;
	}
	a{
		text-decoration: none;
		text-align: center;
		display: inline-block;
		width:2.5rem;
		font-size: 24px;
		padding: 10px 0 6px;
		color: #789;
	}
	.router-link-exact-active {
		color:deeppink;
	}
	i.iconfont{
		font-size: 36px;
	}
</style>