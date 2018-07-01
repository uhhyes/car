<template>
	<div class="thing" @click="$emit('tab')">
		<div class="user_info">
			<div class="head_portrait">
				<img :src="data.head_portrait">
			</div>
			<div class="name_time">
				<div class="name">{{data.name}}</div>
				<div class="time">
					<div class="day">{{day}}</div> 
					<div class="date">{{time}}</div>
				</div>
			</div>
		</div>
		<div class="text" >
			{{data.text}}
		</div>
		<div class="imgs" v-if="data.imgs">
			<div v-for="(item,index) in data.imgs"><img :src="item"></div>
		</div>
		<div class="doing">
			<div class="left">
				<div class="likes_num">{{data.likes}}</div>
				<div class="comment_num">{{data.comment}}</div>
			</div>
			<div class="right">
				<div @click.stop="likes" class="likes_do" :class="{active:data.isLike}"><i class=" iconfont icon-dianzan"></i></div>
				<div class="comment_do"><i class="iconfont icon-pinglun"></i></div>
				<div class="share_do"><i class="iconfont icon-zhuanfa"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'iThing',
		props:{
			data:{
				type:Object
			}
		},
		date(){
			return{
				years:0,
			}
		},
		methods:{
			likes(){
				if(this.data.isLike){
					this.data.likes--
					this.data.isLike=false
				}else{
					this.data.likes++
					this.data.isLike=true
				}
			}
		},
		computed:{
			day(){
				var now=new Date();
				var old=new Date(this.data.release_date);
				
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
			time(){
				var old=new Date(this.data.release_date)
				//获取发布时间的月日时分
				var old_month=old.getMonth()+1
				var old_date=old.getDate()
				var hour=old.getHours()
				var minutes=old.getMinutes()
				if(minutes>0&&minutes<=9){
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
	.thing{
		height:auto;
		box-sizing: border-box;
		padding: 0.4rem 0.2rem 0.2rem 0.3rem;
		box-shadow: 0 2px 6px #ddd;
	}
	.thing,
	.name_time{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.user_info,
	.imgs,
	.doing,
	.doing .left,
	.doing .right{
		display: flex;
		justify-content: space-between;
	}
	.head_portrait,
	.head_portrait img{
		display: block;
		width:0.8rem;
		height:0.8rem;
		border-radius: 50%;
		border:#789 solid 1px;
	}
	.head_portrait{
		margin-right: 0.4rem;
	}
	.name_time{
		width:9rem;
		text-align: left;
	}
	.name{
		font-size: 34px;
	}
	.time{
		display: flex;
		justify-content: flex-start;
		font-size: 22px;
		line-height: 1.6;
	}
	.time .date{
		text-indent: 0.1rem;
	}
	.text{
		font-size: 30px;
		line-height: 1rem;
		text-indent: 0.1rem;
	}
	.imgs{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.imgs>div{
		box-sizing: border-box;
		margin: 0 0.3rem 0.3rem 0;
		width: 2.6rem;
		height:2.6rem;
	}
	.doing{
		display: flex;
		align-items: center;
		padding: 0.4rem 0 0.2rem;
	}
	.doing .left{
		font-style:italic;
		font-size:30px;
		color: #777;
	}
	.doing .left .likes_num:after{
		content:"赞";
	}
	.doing .left .comment_num{
		margin-left: 0.1rem;
	}
	.doing .left .comment_num:after{
		content:"评论";
	}
	.doing .right>div{
		display: flex;
		justify-content: center;
		align-items: center;
		width:.8rem;
		height:.8rem;
		background-color: #ddd;
		border-radius: 50%;
		margin:0 0.3rem;
	}
	.doing .right div i{
		font-size: 36px;
		line-height: 36px;
		color: white;
	}
	.doing .right .active {
		background-color: white;
		border:1px solid #ddd
	}
	.doing .right .active i{
		color:deeppink;
	}
</style>