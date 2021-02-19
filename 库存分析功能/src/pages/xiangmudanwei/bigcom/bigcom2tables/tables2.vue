<template>
	<div class="tables1">
		<div class="theade">
			<div class="thi">在途项目单位</div>
		</div>
		<div class="tmain">
			<div class="canvas">
				<div id="echarts6"></div>
			</div>
		</div>
	</div>

</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				//存储加载完后的echars容器
				option1: {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // Use axis to trigger tooltip
							type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
						}
					},
					legend: { //角标的位置
						data: ['实体库', '虚拟库'], //角标数据名  和 series里的name对应写
						left: 'center', //可以right center  可以500
						bottom: '15'
					},
					grid: { //大图的位置调整
						left: '3%',
						right: '4%',
						bottom: '40',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['滨海', '城东', '城西', '城南', '东丽', '武清', '宝坻', '宁河', '蓟县', '静海', '物资公司'],
						//  axisTick:{
						// 	alignWithLabel:true
						// },
						//字体无间隔
						axisLabel: {
							interval: 0
						}
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '实体库',
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							barWidth: '20',
							data: [400, 212, 201, 154, 190, 330, 410, 566, 256, 330, 410]
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
				var chartDom = echarts.init(document.getElementById('echarts6'));
				chartDom.setOption(inOption);
				chartDom.on('click', function(params) {
					console.log(params.name);
				});
				chartDom.on('dblclick', function(params) {
					console.log(params.name,'双击');
					
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

				#echarts6 {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
