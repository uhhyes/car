<template>
	<div class="set">
		<iHeader title="更多设置">
			<div class="left" slot="left" @click="$router.back()">
				<i class="iconfont icon-fanhui"></i>
			</div>	
			<div class="right" slot="right">
			</div>
		</iHeader>
		<iContent>
			<iSet></iSet>
		</iContent>
	</div>
</template>

<script>
	export default{
		name:'Set'
	}
</script>

<style scoped="scoped">
	.set{
		position: absolute;
	}
</style>