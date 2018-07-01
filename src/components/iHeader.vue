<template>
	<header>
		<slot name="left" class='left'></slot>
		<div class="title">{{title}}</div>
		<slot name="right" class="right"></slot>
	</header>
</template>

<script>
	export default {
		name:"iHeader",
		props:{
			title:{
				type:String,
				required:true
			}
		}
	}
</script>

<style scoped="scoped">
	header{
		height: 1.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: hotpink;
		font-size: 36px;
		width: 10rem;
		height: 1.3rem;
		line-height: 1.3rem;
		box-sizing: border-box;
		color:#fff;
		text-align: center;
	}
	.title{
		text-align: center;
		width:7.4rem;
	}
	.left,
	.right{
		width:1rem;
	}
</style>