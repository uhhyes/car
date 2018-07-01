<template>
	<div class="me">
		<iHeader title="个人中心">
			<div class="left" slot="left">
			</div>	
			<div class="right" slot="right">
			</div>
		</iHeader>
		
		<iContent>
			
			<div class="user">
				<div class="head_portrait">
					<img :src="user.img">
				</div>
				<div class="info">
					<div class="name">{{user.name}}</div>
					<div class="phone">{{user.phone}}</div>
				</div>
				<div class="more">
					<i class="iconfont icon-iconfonti"></i>
				</div>
			</div>
			
			<div class="content1">
				<iListBtn :data="data1" @click="$router.push('/me/balance')" />
				<iListBtn :data="data2" />
				<iListBtn :data="data3" />
				<iListBtn :data="data4" />
			</div>
			
			<div class="content2">
				<iListBtn :data="data5" />
				<iListBtn :data="data6" />
				<iListBtn :data="data7" />
				<iListBtn :data="data8" />
				<iListBtn :data="data9" @click="$router.push('/me/set')" />
			</div>
		</iContent>
	</div>
</template>

<script>
	export default {
		name:"Me",
		data(){
			return {
				user:{
					img:"http://img0.imgtn.bdimg.com/it/u=1796877684,2014718976&fm=27&gp=0.jpg",
					name:"来自长安",
					phone:"13000000000"
				},
				data1:{
					icon:"fl-renminbi",
					item:"账户余额",
					isBtn:true,
					etc:"123.00元",
				},
				data2:{
					icon:"qiche",
					item:"车辆信息",
					isBtn:true,
				},
				data3:{
					icon:"dingdan",
					item:"我的订单",
					isBtn:true,
				},
				data4:{
					icon:"fabu",
					item:"我的发布",
					isBtn:true,
					boxborder:"none"
				},
				data5:{
					icon:"yijianfankui",
					item:"意见反馈",
					isBtn:true,
				},
				data6:{
					icon:"guanyu",
					item:"关于车友汇",
					isBtn:true,
				},
				data7:{
					icon:"iconfontzhizuobiaozhun20",
					item:"分享车友汇",
					isBtn:true,
				},
				data8:{
					icon:"gengxin",
					item:"检测更新",
					isBtn:true,
				},
				data9:{
					icon:"shezhi",
					item:"更多设置",
					isBtn:true,
					boxborder:"none"
				},
			}
		}
	}
</script>

<style scoped="scoped">
	.me{
		flex: 1;
		overflow: auto;
	}
	.user{
		padding: .25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 2rem;
	}
	.user .head_portrait{
		margin-left: .2rem;
	}
	.user .head_portrait,
	.user img{
		display: block;
		width:1.6rem;
		height:1.6rem;
		border-radius: 50%;
		box-shadow: 0 0 4px #ccc;
	}
	.info{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-content: center;
		flex: 1;
		padding-left: .4rem;
	}
	.info .name{
		font-size:38px;
		color: hotpink;
	}
	.info .phone{
		font-size: 30px;
		color: #aaa;
		padding-top: .1rem;
	}
	.more{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width:3rem;
		text-align: right;
		color: #ccc;
		font-size: 50px;
	}
	.content1,
	.content2{
		margin-bottom: .6rem;
		box-shadow: 0 2px 10px #ddd;
		padding: 0 .2rem;
	}
</style>