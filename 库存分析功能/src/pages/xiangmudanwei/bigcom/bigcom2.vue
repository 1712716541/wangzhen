<template>
	<div>
		<div class="topblock">
			<div class="topcontent">
				<div class="tcl">
					<div class="tci" v-for="(item,index) in list">
						<div class="tcil">{{item.names}}:</div>
						<!-- input类型 -->
						<div class="tcir" v-if="item.types == 'input'">
							<el-input size="small" v-model="wlbm" placeholder="请输入内容"></el-input>
						</div>
						<!-- select类型 -->
						<div class="tcir" v-if="item.types == 'select1'">
							<el-select size="small" v-model="value" placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :key="item.values"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
						<div class="tcir" v-if="item.types == 'select2'">
							<el-select size="small" v-model="value" placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :key="item.values"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
						<div class="tcir" v-if="item.types == 'select3'">
							<el-select size="small" v-model="value" placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :key="item.values"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
						<!-- datapicker类型 -->
						<div class="tcir" v-if="item.types == 'datepicker'">
							<div class="block">
							    <el-date-picker 
								  size="small"
							      v-model="value1"
							      type="date"
							      placeholder="选择日期"
								  style="width: 130px;">
							    </el-date-picker>
							  </div>
						</div>
					</div>
				</div>
				<div class="tcr">
					<el-button type="primary">查询</el-button>
				</div>
			</div>
		</div>

		<div class="tableall">
			<div class="tablei">
				<tables1></tables1>
			</div>
			<div class="tablei">
				<tables2></tables2>
			</div>
		</div>
		
		<div class="table">
			<div class="th">
				<div class="thi" v-for="(item,index) in th">{{item.title}}</div>
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
</template>

<script>
	import tables1 from './bigcom2tables/tables1.vue'
	import tables2 from './bigcom2tables/tables2.vue'
	export default{
		components:{
			 tables1,
			 tables2
			},
		data(){
			return{
				list:[{
					names:'采购申请号',values:'',types:'input'
				},{
					names:'工厂描述',values:'',types:'select1'
				},{
					names:'物料编码',values:'',types:'input'
				},{
					names:'供应商描述',values:'',types:'input'
				},{
					names:'生效日期',values:'',types:'datepicker'
				},{
					names:'采购订单号',values:'',types:'input'
				},{
					names:'项目描述',values:'',types:'input'
				},{
					names:'物料描述',values:'',types:'input'
				},{
					names:'合同类型',values:'',types:'select2'
				},{
					names:'确定交货日期',values:'',types:'datepicker'
				}],
				th: [{
					title: '采购申请号',
				}, {
					title: '采购申请行项目'
				}, {
					title: '项目描述'
				}, {
					title: '工厂编码'
				}, {
					title: '工厂描述'
				}, {
					title: '物料编码'
				}, {
					title: '物料描述'
				}, {
					title: '计量单位'
				}, {
					title: '电子商务合同编号'
				}, {
					title: '经法合同编号'
				}, {
					title: '供应商描述'
				}, {
					title: '采购订单号'
				}, {
					title: '采购订单行项目'
				}, {
					title: '合同类型'
				}, {
					title: '生效日期'
				}, {
					title: '订单数量'
				}],
				maindata:[]
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.topblock {
		.topcontent {
			display: flex;

            .tcl {
            	width: 1300px;
            	display: flex;
            	flex-wrap: wrap;
				font-size: 13px;
            	.tci {
            		width: 260px;
            		display: flex;
            		align-items: center;
            		justify-content: space-around;
            		padding: 10px 0;
            
            		.tcil {
            			width: 100px;
            			text-align: right;
            			margin-right: 5px;
            		}
            
            		.tcir {
            			width: 130px;
            		}
            	}
            }
			

			.tcr {}

		}
	}

	.tableall {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.tablei {
			width: 48.5%;
			box-sizing: border-box;
			margin: 10px;
		}
	}
	
	
		.table {
			height: 250px;
			margin: 0 10px;
	
			.th {
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
</style>
