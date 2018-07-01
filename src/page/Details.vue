<template>
	<div class="details">
		<iHeader title="动态详情">
			<div class="left" slot="left" @click="$router.back()">
				<i class="iconfont icon-fanhui"></i>
			</div>
			<div class="right" slot="right"></div>
		</iHeader>
		<iContent>
			<iThing :data="data"/>
		</iContent>	
	</div>
</template>

<script>
	export default {
		name:"Details",
		data(){
			return {
				data:{}
			}
		},
		created(){
//			console.log(this.$route)
			const {params} =this.$route
			this.data=params
		}
	}
</script>

<style>
	.details{
		position: absolute;
		width:10rem;
		top: 0;
	}
</style>