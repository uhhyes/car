<template>
	<div class="release">
		<iHeader title="发布动态">
			<div class="left" slot="left" @click="$router.back()">
				<i class="iconfont icon-fanhui"></i>
			</div>	
			<div class="right" slot="right" >
				发布
			</div>
		</iHeader>
		<iRelease />
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.release{
		position: absolute;
		top: 0;
		overflow: auto;
	}
	.left i{
		display: block;
		font-size: 40px;
		margin-top: .1rem;
	}
</style>