<template>
	<div class="content">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'iContent'
	}
</script>

<style scoped="scoped">
	.content{
		flex: 1;
		overflow-y: scroll;
	}
</style>