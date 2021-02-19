<template>
	<div>
		<div class="topblock">
			<div class="topcontent">
				<div class="tcl">
					<div class="tci">
						<div class="tcil">物料编码:</div>
						<div class="tcir">
							<el-input size="small" v-model="wlbm" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">物料描述:</div>
						<div class="tcir">
							<el-input size="small" v-model="wlms" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">物资大类描述:</div>
						<div class="tcir">
							<el-input size="small" v-model="wzdlms" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">物资中类描述:</div>
						<div class="tcir">
							<el-input size="small" v-model="wzzlms" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">物资小类描述:</div>
						<div class="tcir">
							<el-input size="small" v-model="wzxlms" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">工厂:</div>
						<div class="tcir">
							<el-input size="small" v-model="gc" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">库存地点:</div>
						<div class="tcir">
							<el-input size="small" v-model="kcdd" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="tci">
						<div class="tcil">储备用途:</div>
						<div class="tcir">
							<el-input size="small" v-model="cbyt" placeholder="请输入内容"></el-input>
						</div>
					</div>
				</div>
				<div class="tcr">
					<el-button type="primary">查询</el-button>
				</div>
			</div>
			
			
			<div class="table">
				<div class="th">
					<div class="thi" v-for="(item,index) in th1">{{item.title}}</div>
				</div>
				<div class="tba" v-if="maindata.length==0">无数据</div>
				<div class="tb" v-for="(item,index) in maindata" @click="checkthis(index)" :style="{'background': (tablec == index? '#8ed4ff':''),'color': (tablec == index? 'blue':'')}">
					<div class="tbi">
						{{index+1}}
					</div>
					<div class="tbi" v-if="tablec !== index">
						{{item.functionType}}
					</div>
					<div class="tbi" v-else>
						<el-select v-model="xiuvalue" placeholder="请选择" @change="xiuvaluechange">
							<el-option v-for="item in firsttable" :key="item.xiuvalue" :label="item.label" :value="item.label">
							</el-option>
						</el-select>
					</div>
					<div class="tbi" v-if="tablec !== index">
						{{item.functionName}}
					</div>
					<div class="tbi" v-else>
						<el-select v-model="xiuvalue2" placeholder="请选择">
							<el-option v-for="item in xiugetone" :key="item.label" :label="item.label" :value="item.label">
							</el-option>
						</el-select>
					</div>
					<div class="tbi" v-if="tablec !== index">
						<div class="radio" :style="{'background': (item.send == 1? 'steelblue':''),'color': (item.send == 1? '#fff':'')}"
						 @click="mainchangecheck(item.id,item.send)">
						</div>
					</div>
					<div class="tbi" v-else>
						<div class="radio" :style="{'background': (xiuradiosend == 1? 'steelblue':''),'color': (xiuradiosend == 1? '#fff':'')}"
						 @click.stop="xiuchangecheck(xiuid,'xiuradiosend')">
						</div>
					</div>
					<div class="tbi" v-if="tablec !== index">
						<div class="radio" :style="{'background': (item.push == 1? 'steelblue':''),'color': (item.push == 1? '#fff':'')}">
						</div>
					</div>
					<div class="tbi" v-else>
						<div class="radio" :style="{'background': (xiuradiopush == 1? 'steelblue':''),'color': (xiuradiopush == 1? '#fff':'')}"
						 @click.stop="xiuchangecheck(xiuid,'xiuradiopush')">
						</div>
					</div>
					<div class="tbi" v-if="tablec !== index">
						<div class="radio" :style="{'background': (item.review == 1? 'steelblue':''),'color': (item.review == 1? '#fff':'')}">
						</div>
					</div>
					<div class="tbi" v-else>
						<div class="radio" :style="{'background': (xiuradioreview == 1? 'steelblue':''),'color': (xiuradioreview == 1? '#fff':'')}"
						 @click.stop="xiuchangecheck(xiuid,'xiuradioreview')">
						</div>
					</div>
					<div class="tbi" v-if="tablec !== index">
						<div class="radio" :style="{'background': (item.feedback == 1? 'steelblue':''),'color': (item.feedback == 1? '#fff':'')}">
						</div>
					</div>
					<div class="tbi" v-else>
						<div class="radio" :style="{'background': (xiuradiofeedback == 1? 'steelblue':''),'color': (xiuradiofeedback == 1? '#fff':'')}"
						 @click.stop="xiuchangecheck(xiuid,'xiuradiofeedback')">
						</div>
					</div>
					<div class="tbi" v-if="tablec !== index">
						<div class="radio" :style="{'background': (item.startupSign == 1? 'steelblue':''),'color': (item.startupSign== 1? '#fff':'')}">
						</div>
					</div>
					<div class="tbi" v-else>
						<div class="radio" :style="{'background': (xiuradiostartupSign == 1? 'steelblue':''),'color': (xiuradiostartupSign == 1? '#fff':'')}"
						 @click.stop="xiuchangecheck(xiuid,'xiuradiostartupSign' )">
						</div>
					</div>
					<div class="tbi">
						<el-button type="primary" @click.stop="peizhiw">配置</el-button>
					</div>
					<div class="tbi">
						<el-button type="primary" @click.stop="peizhir">配置</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				wlbm: '',
				wlms: '',
				wzdlms: '',
				wzzlms: '',
				wzxlms: '',
				rkrq: '',
				rkts: '',
				gc: '',
				kcdd: '',
				cbyt: '',
				th1: [{
					title: '物料编码',
				}, {
					title: '物料描述'
				}, {
					title: '工厂'
				}, {
					title: '工厂描述'
				}, {
					title: '仓库'
				},{
					title: '仓库描述',
				}, {
					title: '仓库种类'
				}, {
					title: '非限制使用库存'
				}, {
					title: '计量单位'
				}, {
					title: '批次'
				},{
					title: '库存单价',
				}, {
					title: '库存总价'
				}, {
					title: '特殊库存标识'
				}, {
					title: '项目编码'
				}, {
					title: '项目描述'
				}, {
					title: '供应商编码'
				},{
					title: '供应商描述',
				}, {
					title: '资金用途'
				}, {
					title: '利库标识'
				}, {
					title: '物资大类编码'
				}, {
					title: '物资大类描述'
				},{
					title: '物资中类编码',
				}, {
					title: '物资中类描述'
				}, {
					title: '物资小类编码'
				}, {
					title: '物资小类描述'
				}, {
					title: '技术规范ID'
				}, {
					title: '采购订单号'
				}, {
					title: '采购订单行项目'
				}, {
					title: '原订单供应商'
				}, {
					title: '入库日期'
				}, {
					title: '入库天数'
				}],
				maindata: []
			}
		},
		methods: {
		}
	}
</script>

<style scoped="scoped" lang="less">
	.topblock {
		.topcontent {
			display: flex;

			.tcl {
				flex: 1;
				display: flex;
				flex-wrap: wrap;
                font-size: 13px;
				.tci {
					width: 280px;
					display: flex;
					align-items: center;
					justify-content: space-around;
					padding: 10px 0;

					.tcil {}

					.tcir {
						width: 150px;
					}
				}
			}

			.tcr {}

		}
		
		.table {
			overflow: scroll;
			height: 600px;
			margin: 0 10px;
		
			.th {
				width: 3500px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				// padding: 50px;
				background: #0068CC;
				color: #fff;
				font-size: 16px;
				font-weight: bold;
		
				.thi {
					flex: 1;
					border: 1px solid #ccc;
					text-align: center;
					height: 40px;
					line-height: 40px;
					border-right: 0;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}
		
				.thi:last-child {
					border-right: 1px solid #ccc;
				}
			}
		
			.tba {
				height: 200px;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20px;
			}
		
			.tb {
				display: flex;
				justify-content: space-around;
				align-items: center;
		
				.tbi {
					flex: 1;
					border: 1px solid #ccc;
					text-align: center;
					height: 50px;
					line-height: 40px;
					border-right: none;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
					border-top: none;
		
					.radio {
						width: 20px;
						height: 20px;
						background: #b2bcc1;
						border-radius: 50%;
					}
				}
		
				.tbi:last-child {
					border-right: 1px solid #ccc;
				}
			}
		}
	}

</style>
