<template>
	<div class="tables1">
		<div class="theade">
			<div class="thi">库存情况</div>
			<div class="thi" @click="godetail">库存明细</div>
		</div>
		<div class="tmain">
			<div class="list">
				<div class="listi" v-for="(item,index) in list" @click="checked(index)" 
				:style="{'background': (nowindex == index? '#fff':''),'borderBottom':(nowindex !== index? '1px solid #dcdfe6':'none')}">
					{{item.names}}
				</div>
			</div>

			<div class="canvas">
				<div id="echarts2"></div>
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
					names: '项目单位'
				}, {
					names: '储备用途'
				}, {
					names: '寄存物资'
				}],
				nowindex: 0,
				//存储加载完后的echars容器
				option1: {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // Use axis to trigger tooltip
							type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
						}
					},
					legend: {    
						data: ['1年以内', '1-3年','3年以上'],  //角标数据名  和 series里的name对应写
						left:'center'   ,//可以right center  可以500
						bottom:'15'
					},
					grid: {   
						left: '3%',
						right: '4%',
						bottom: '40',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['滨海', '城东', '城西', '城南', '东丽', '武清', '宝坻', '宁河', '蓟县', '静海', '物资公司'],
					    axisLabel:{
							interval:0
						}
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '1年以内', 
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							barWidth:'20',
							data: [400, 212, 201, 154, 190, 330, 410, 566, 256, 330, 410]
						},
						{
							name: '1-3年',
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							data: [820, 832, 901, 934, 1290, 1330, 1320, 150, 212, 201, 154]
						},
						{
							name: '3年以上',
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							data: [820, 832, 901, 934, 1290, 1330, 1320, 150, 212, 201, 154]
						}
					]
				},
				option2:{
					tooltip: {
						trigger: 'axis',
						axisPointer: { // Use axis to trigger tooltip
							type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
						}
					},
					legend: {    
						data: ['1年以内', '1-3年','3年以上'],  //角标数据名  和 series里的name对应写
						left:'center'   ,//可以right center  可以500
						bottom:'15'
					},
					grid: {   
						left: '3%',
						right: '4%',
						bottom: '40',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['滨海', '城东', '城西', '城南', '东丽', '武清', '宝坻', '宁河', '蓟县', '静海', '物资公司'],
					    axisLabel:{
							interval:0
						}
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '1年以内', 
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							barWidth:'20',
							data: [400, 212, 201, 154, 190, 330, 410, 566, 256, 330, 410]
						},
						{
							name: '1-3年',
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							data: [820, 832, 901, 934, 1290, 1330, 1320, 150, 212, 201, 154]
						},
						{
							name: '3年以上',
							type: 'bar',
							stack: 'total',
							label: {
								show: true
							},
							emphasis: {
								focus: 'series'
							},
							data: [820, 832, 901, 934, 1290, 1330, 1320, 150, 212, 201, 154]
						}
					]
				},
				option3:{
					title: {
						text: '某站点用户访问来源',
						subtext: '纯属虚构',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '50%',
						data: [{
								value: 1048,
								name: '搜索引擎'
							},
							{
								value: 735,
								name: '直接访问'
							},
							{
								value: 580,
								name: '邮件营销'
							},
							{
								value: 484,
								name: '联盟广告'
							},
							{
								value: 300,
								name: '视频广告'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
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
				var chartDom = document.getElementById('echarts2');
				echarts.init(chartDom).setOption(inOption, true);
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
				this.$router.push('/kucunmingxi')
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

				#echarts2 {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
