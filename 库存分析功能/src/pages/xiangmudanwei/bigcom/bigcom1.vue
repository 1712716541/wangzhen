<template>
	<div>
		<div class="topblock">
			<div class="topcontent">
				<div class="tcl">
					<div class="tci" v-for="(item,index) in list">
						<div class="tcil">{{item.names}}:</div>
						<!-- input类型 -->
						<div class="tcir" v-if="item.types == 'input'">
							<el-input size="small" v-model="item.values" placeholder="请输入内容"></el-input>
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
							      v-model="item.values"
							      type="date"
							      placeholder="选择日期"
								  style="width: 130px;">
							    </el-date-picker>
							  </div>
						</div>
					</div>
				</div>
				<div class="tcr">
					<el-button type="primary" @click="search">查询</el-button>
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
			<div class="tablei">
				<tables3></tables3>
			</div>
			<div class="tablei">
				<tables4></tables4>
			</div>
		</div>
	</div>
</template>

<script>
	import tables1 from './bigcom1tables/tables1.vue'
	import tables2 from './bigcom1tables/tables2.vue'
	import tables3 from './bigcom1tables/tables3.vue'
	import tables4 from './bigcom1tables/tables4.vue'
	export default{
		components:{
			 tables1,
			 tables2,
			 tables3,
			 tables4
			},
		data(){
			return{
				list:[{
					names:'物料编码',values:'',types:'input'
				},{
					names:'物料描述',values:'',types:'input'
				},{
					names:'物资大类描述',values:'',types:'input'
				},{
					names:'物资中类描述',values:'',types:'input'
				},{
					names:'物资小类描述',values:'',types:'input'
				},{
					names:'入库日期',values:'',types:'datepicker'
				},{
					names:'入库天数',values:'',types:'datepicker'
				},{
					names:'工厂',values:'',types:'select1'
				},{
					names:'库存地点',values:'',types:'select2'
				},{
					names:'储备用途',values:'',types:'select3'
				}]
			}
		},
		methods:{
			search(){
				console.log('搜索')
				console.log(this.list[0].values)
				console.log(this.list[1].values)
				console.log(this.list[2].values)
				console.log(this.list[3].values)
				console.log(this.list[4].values)
				console.log(this.list[5].values)
				console.log(this.list[6].values)
				console.log(this.list[7].values)
				console.log(this.list[8].values)
				console.log(this.list[9].values)
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
</style>
