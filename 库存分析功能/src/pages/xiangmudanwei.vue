<template>
	<div class="boxwai">
	<div class="box">
		<div class="header">
			全量资源分析
		</div>
		<div class="toplist">
			<div class="tli" v-for="(item,index) in toplist"
			@click="changepage(index)" :style="{'background': (nowpage == index? '#fff':'')}">{{item.names}}</div>
		</div>
		<div class="bigcom">
			<bigcom1 v-if="this.nowpage==0"></bigcom1>
			<bigcom2 v-if="this.nowpage==1"></bigcom2>
			<bigcom3 v-if="this.nowpage==2"></bigcom3>
		</div>
	</div>
	</div>
</template>

<script>
	import bigcom1 from './xiangmudanwei/bigcom/bigcom1.vue'
	import bigcom2 from './xiangmudanwei/bigcom/bigcom2.vue'
	import bigcom3 from './xiangmudanwei/bigcom/bigcom3.vue'
	export default {
		components: {
			bigcom1,bigcom2,bigcom3
		},
		data() {
			return {
				toplist: [{
					names: '库存资源分析'
				}, {
					names: '在途资源分析'
				}, {
					names: '协议资源分析'
				}],
				nowpage:0
			}
		},
		methods:{
			changepage(i){
				this.nowpage = i
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.boxwai{padding: 14px;background-color: #e5e5e5;width: 100%;height:auto;
	box-sizing:border-box;overflow:scroll;}
	.box{padding: 12px;background: #fff;width: 100%;height:auto;
	box-sizing:border-box;color: #656565;}
	.header {
		height: 40px;
		width: 100%;
		background: #00B0F0;
		color: #fff;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.toplist {
		display: flex;
        font-size: 16px;
		color: #909399;
		.tli {
			height: 40px;
			padding: 0 50px;
			background: #f5f7fa;
			border-right: 1px solid #dcdfe6;
			border-bottom: 1px solid #dcdfe6;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
