<template>	
	<div>
		<div class="set">
			<iSet_sub :data="data1"/>
			<iSet_sub :data="data2"/>
			<iSet_sub :data="data3" open/>
			<div class="clear">
				<iListBtn :data="data4"/>
			</div>
		</div>
		<div class='loginout'>退出登录</div>
	</div>
</template>

<script>
	export default{
		name:"iSet",
		data(){
			return{
				data1:{
					item:"新消息提醒"
				},
				data2:{
					item:"允许陌生人查看车辆"
				},
				data3:{
					item:"非WiFi下加载视频"
				},
				data4:{
					item:"清理缓存",
					isBtn:true,
					etc:"123.00元",
					ffontSize:"30px"
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.set{
		box-sizing: border-box;
		width:10rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 2px 10px #ddd;
	}
	.clear{
		width:10rem;
		box-sizing: border-box;
		padding-left: 0.2rem;
	}
	.loginout{
		width:7.6rem;
		line-height: 3.6;
		font-size: 32px;
		text-align: center;
		margin:5rem auto;
		color: white;
		border-radius: 6px;
		background-color: hotpink;
		box-shadow: 0 0 4px hotpink;
		border:none;
	}
</style>