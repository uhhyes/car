<template>
	<div class="balance_do">
		<div class="num" :class="data.payorget=='－'?'pay':'get'">{{data.payorget}}120</div>
		<div class="way">{{data.way}}</div>
		<div class="time">
			<div class="day">{{day}}</div>
			<div class="hour">{{time_m}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"iBalance_do",
		props:{
			data:{
				type:Object,
				required:true
			}
		},
		data(){
			return{
				
			}
		},
		computed:{
			day(){
				var now=new Date();
				var old=new Date(this.data.time);
				
				//获取现在时间的年月日
				var now_year=now.getFullYear()
				var now_month=now.getMonth()+1
				var now_date=now.getDate()
				//组成以0点计时的时间
				var now_m=new Date(`${now_year}-${now_month}-${now_date}`)
				//获取毫秒数
				var now_time=now_m.getTime();
				
				//获取发布时间的年月日
				var old_year=old.getFullYear()
				var old_month=old.getMonth()+1
				var old_date=old.getDate()
				//组成以0点计时的时间
				var old_m=new Date(`${old_year}-${old_month}-${old_date}`)
				//获取毫秒数
				var old_time=old_m.getTime();
				
				//获取时间差的秒数
				var interval_second=(now_time-old_time)/1000;    
				//获取时间差的天数
				var interval_day=interval_second/60/60/24;
				
				//判断是否跨年
				this.year=now_year-old_year;
				if(this.year==1){
					return "去年"
				}
				if(this.year==2){
					return "前年"
				}
				if(this.year>2){
					return old_year+'年'
				}
				
				//不跨年的情况下
				if(interval_day==0){
					return "今天"
				}
				if(interval_day==1){
					return "昨天"
				}
				if(interval_day==2){
					return "前天"
				}
				if(interval_day>=3){
					return `${old_month}月${old_date}日`
				}
			},
			time_m(){
				var old=new Date(this.data.time)
				//获取发布时间的月日时分
				var old_month=old.getMonth()+1
				var old_date=old.getDate()
				var hour=old.getHours()
				var minutes=old.getMinutes()
				if(minutes>=0&&minutes<=9){
					minutes="0"+minutes;
				}
				if(this.year==0){
					return `${hour}:${minutes}`
				}else{
					return `${old_month}月${old_date}日`
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.pay{
		color:black;
	}
	.get{
		color:pink;
	}
	.balance_do{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .1rem 0;
		height: 1rem;
		border-bottom: 1px solid #ccc;
	}
	.balance_do .way{
		flex: 1;
	}
	.num{
		font-size: 36px;
		margin-right: .3rem;
		text-align: center;
	}
	.way{
		font-size: 28px;
	}
	.balance_do .time{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		color: #bbb;
	}
</style>