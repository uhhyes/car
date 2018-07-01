<template>
	<div class="sub">
		<div class="item">{{data.item}}</div>
		<iSwitch :switch="open"/>
	</div>
</template>

<script>
	export default{
		name:"iSet_sub",
		props:{
			data:Object,
			open:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped="scoped">
	.sub{
		width:10rem;
		padding: 0 .2rem;
		font-size: 30px;
		height: 1.2rem;
		line-height: 1.2rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>