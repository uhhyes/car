<template>
	<div class="listbtn" @click="$emit('click')">
		<div class="content" :style="{border:data.boxborder}">
			<div class="left">
				<div class="ibox" v-if="data.icon" :style="{border:data.iborder}">
					<i class="iconfont" :class="['icon-'+data.icon]" :style="{color:data.color,fontSize:data.ifontSize}"></i>
				</div>
				<div class="item" :style="{fontSize:data.ffontSize}">{{data.item}}</div>
			</div>
			<div class="right" v-if="data.isBtn">
				<div v-if="data.etc" class="etc">{{data.etc}}</div>
				<i class="iconfont icon-iconfonti"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"iListBtn",
		props:{
			data:Object
		}
	}
</script>

<style scoped="scoped">
	.listbtn{
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}
	.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:10rem;
		height:1.2rem;
		line-height: 1.2rem;
		font-size: 36px;
		border-bottom: 1px solid #ccc;
	}
	.content>div {
		height: 1.2rem;
	}
	.left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-align: left;
		flex: 1;
	}
	.left .ibox{
		width:.6rem;
		height:.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid #777;
		border-radius: 50%;
		color: #000;
		margin-right: .2rem;
	}
	.left .ibox .iconfont{
		line-height:.6rem;
		font-size: 36px;
	}
	.right{
		display: flex;
		justify-content: flex-end;
		width:3rem;
		text-align: right;
		color: #ccc;
		font-size: 50px;
	} 
	.right .etc{
		line-height: 1.22rem;
		font-size: 24px;
	}
</style>