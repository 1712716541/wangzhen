<template>
	<div class="tables1">
		<div class="theade">
			<div class="thi">库存情况</div>
			<div class="thi" @click="godetail()">出入库明细</div>
		</div>
		<div class="tmain">
			<div class="list">
				<div class="listi" v-for="(item,index) in list" @click="checked(index)" 
				:style="{'background': (nowindex == index? '#fff':''),'borderBottom':(nowindex !== index? '1px solid #dcdfe6':'none')}">
					{{item.names}}
				</div>
			</div>

			<div class="canvas">
				<div id="echarts4"></div>
			</div>
		</div>
	</div>

</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				list: [{
					names: '物资类别'
				}],
				nowindex: 0,
				//存储加载完后的echars容器
				option1: {
					title: {
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['2011年', '2012年'],
						bottom:'20'
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '40',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
					},
					yAxis: {
						type: 'value',
						boundaryGap: [0, 0.01]
					},
					series: [{
							name: '2011年',
							type: 'bar',
							data: [18203, 23489, 29034, 104970, 131744, 630230]
						},
						{
							name: '2012年',
							type: 'bar',
							data: [19325, 23438, 31000, 121594, 134141, 681807]
						}
					]
				}
			}
		},
		mounted() {
			//文档节点加载完毕
			this.$nextTick(() => {
				this.useCharts(this.option1)
			})
		},
		methods: {
			//获取节点封装  都为同一个节点
			useCharts(inOption) {
				var chartDom = document.getElementById('echarts4');
				echarts.init(chartDom).setOption(inOption);
			},
			checked(i) {
				//根据选项切换节点
				this.nowindex = i
				if (this.nowindex == 0) {
					this.useCharts(this.option1)
				} else if (this.nowindex == 1) {
					this.useCharts(this.option2)
				} else if (this.nowindex == 2) {
					this.useCharts(this.option3)
				}
			},
			godetail(){
				//console.log(1)
				this.$router.push('/churukumingxi')
			}
		},
		watch: {
			nowindex(ol, nl) {
				console.log(ol)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.tables1 {
		display: flex;
		flex-direction: column;
		border: 1px solid #d7dbe3;
        box-shadow: 1px 2px 6px #d7dbe3;
		.theade {
			font-size: 14px;
			background: #f5f7fa;
			color: #909399;
			height: 35px;
			line-height: 35px;
			display: flex;

			.thi {
				border-right: 1px solid #dcdfe6;
				padding: 0 10px;
			}
		}

		.tmain {
			.list {
				display: flex;

				.listi {
					font-size: 14px;
					background: #f5f7fa;
					color: #909399;
					height: 30px;
					border-right: 1px solid #dcdfe6;
					border-bottom: 1px solid #dcdfe6;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 0 10px;
				}
			}

			.canvas {
				height: 200px;

				#echarts4 {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
