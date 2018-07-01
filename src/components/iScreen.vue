<template>
  <div id="app">
  	<slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iScreen'
}
</script>

<style scoped="scoped">
	#app{
		position: absolute;
		top:0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
