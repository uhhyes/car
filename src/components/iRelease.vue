<template>
	<div class='release'>
		<textarea placeholder="说点什么" >
		
		</textarea>	
		<div class="camera">
			<i class="iconfont icon-xiangji"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name:"iRelease"
	}
</script>

<style scoped="scoped">
	.release{
		position: relative;
	}
	textarea{
		width:100%;
		box-sizing: border-box;
		font-size: 24px;
		padding: .3rem .4rem;
		height: 6.6rem;
		color: #333;
		resize: none;
		border: none;
		box-shadow: 0 4px 4px #eee;
	}
	.camera {
		display: flex;
		justify-content: center;
		align-items: center;
		width:2rem;
		height:2rem;
		background-color: #eee;
		position: absolute;
		bottom: .6rem;
		left:.4rem;
		border-radius: 8px;
	}
	.camera i{
		font-size: 60px;
		color: #999;
	}
</style>