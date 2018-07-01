<template>
	<div class="balance">
		<iHeader title="账户余额">
			<div class="left" slot="left" @click="$router.back()">
				<i class="iconfont icon-fanhui"></i>
			</div>	
			<div class="right" slot="right">
			</div>
		</iHeader>
		<div class="money">
			{{money}}<span>元</span>
		</div>
		<iContent>
			<div class="area">
				<iListBtn :data="data1" />
				<iListBtn :data="data2" />
			</div>
			<div class="area">
				<iBalance_do :data="balance_do_data1"/>
				<iBalance_do :data="balance_do_data2"/>
				<iBalance_do :data="balance_do_data1"/>
				<iBalance_do :data="balance_do_data2"/>
				<iBalance_do :data="balance_do_data1"/>
				<iBalance_do :data="balance_do_data2"/>
			</div>
		</iContent>
	</div>
</template>

<script>
	export default {
		name:"Balance",
		data(){
			return {
				money:"999999.00",
				data1:{
					icon:"chongzhi",
					item:"充值",
					isBtn:true,
					color:"rgb(248,13,140)",
					ifontSize: '46px',
					ffontSize:"30px",
					iborder:"none"
				},
				data2:{
					icon:"tixian",
					item:"提现",
					isBtn:true,
					color:"#000",
					ifontSize: '46px',
					ffontSize:"30px",
					iborder:"none",
					boxborder:"none"
				},
				balance_do_data1:{
					payorget:"－",
					way:"拼车",
					time:new Date(),
				},
				balance_do_data2:{
					payorget:"＋",
					way:"租车",
					time:new Date(),
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.balance{
		position: absolute;
		width:100%;
		display: flex;
		flex-direction: column;
	}
	.money{
		margin-top: -.05rem;
		padding-bottom: .4rem;
		width:100%;
		line-height: 1;
		text-align: center;
		font-size: 46px;
		color: white;
		background-color: hotpink;
	}
	.money span{
		font-size: 32px;
		padding-left: .1rem;
		color: rgba(255,255,255,.5);
	}
	.balance .area{
		padding: 0 .2rem;
		margin-bottom: .6rem;
		box-shadow: 0 2px 10px #ddd;
	}
</style>