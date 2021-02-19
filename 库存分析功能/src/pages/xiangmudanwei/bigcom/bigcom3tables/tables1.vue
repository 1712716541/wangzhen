<template>
	<div class="tables1">
		<div class="theade">
			<div class="thi">在途时间</div>
		</div>
		<div class="tmain">
			<div class="canvas">
				<div id="echarts5"></div>
			</div>
		</div>
	</div>

</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				nowindex: 0,
				//存储加载完后的echars容器
				option1: {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							crossStyle: {
								color: '#999'
							}
						}
					},
					legend: {
						data: ['蒸发量','蒸发量2', '降水量', '平均温度'],
						left: 'center',
						bottom: '0'
					},
					xAxis: [{
						type: 'category',
						data: ['1月', '2月', '3月'],
						axisPointer: {
							type: 'shadow'
						}
					}],
					yAxis: [{
							type: 'value',
							// name: '水量',
							min: 0,
							max: 100000,
							interval: 20000
						},
						{
							type: 'value',
							// name: '温度',
							min: 0,
							max: 100,
							interval: 20,
							axisLabel: {
								formatter: '{value} %'
							}
						}
					],
					series: [{
							name: '蒸发量',
							type: 'bar',
							data: [ 58200,38200, 75000]
						},
						{
								name: '蒸发量2',
								type: 'bar',
								data: [ 48200,78200, 25000]
							},
						{
							name: '降水量',
							type: 'bar',
							data: [ 18200,88200, 65000]
						},
						{
							name: '平均温度',
							type: 'line',
							yAxisIndex: 1,
							data: [53, 20, 79]
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
				var chartDom = echarts.init(document.getElementById('echarts5'));
				chartDom.setOption(inOption);
				chartDom.on('click', function(params) {
					console.log(params.data.name);
				});
				chartDom.on('dblclick', function(params) {
					console.log(params.name, '双击');
				});
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

				#echarts5 {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
