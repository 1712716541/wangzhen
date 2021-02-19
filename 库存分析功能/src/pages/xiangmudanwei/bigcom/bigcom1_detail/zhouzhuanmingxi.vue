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
		</div>

		<div class="tableall">
			<div class="tablei">
				<div class="tables1">
					<div class="theade">
						<div class="thi">物料用途周转情况分析</div>
					</div>
					<div class="tmain">

						<div class="canvas">
							<div id="echartsd1"></div>
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
			</div>
			<div class="tablei">
				<div class="tables2">
					<div class="theade">
						<div class="thi">库龄库存压降情况分析</div>
					</div>
					<div class="tmain">
						<div class="list">
							<div class="listi" v-for="(item,index) in list">
								{{item.names}}
							</div>
						</div>

						<div class="canvas">
							<div id="echartsd2"></div>
						</div>

						<div class="table">
							<div class="th">
								<div class="thi" v-for="(item,index) in th2">{{item.title}}</div>
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
			</div>
			<div class="tablei">
				<div class="tables3">
					<div class="theade">
						<div class="thi">库存使用频率分析</div>
					</div>
					<div class="tmain">
						<div class="list">
							<div class="listi" v-for="(item,index) in list">
								{{item.names}}
							</div>
						</div>

						<div class="canvas">
							<div id="echartsd3"></div>
						</div>

						<div class="table">
							<div class="th">
								<div class="thi" v-for="(item,index) in th3">{{item.title}}</div>
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
			</div>
			<div class="tablei">
				<div class="tables4">
					<div class="theade">
						<div class="thi">库存使用量分析</div>
					</div>
					<div class="tmain">
						<div class="list">
							<div class="listi" v-for="(item,index) in list">
								{{item.names}}
							</div>
						</div>

						<div class="canvas">
							<div id="echartsd4"></div>
						</div>

						<div class="table">
							<div class="th">
								<div class="thi" v-for="(item,index) in th4">{{item.title}}</div>
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
				option1: {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}]
				},
				option2: {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}]
				},
				option3: {
					title: {
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: { //角标的位置
						left: 'center', //可以right center  可以500
						bottom: '0'
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
				},
				option4: {
					title: {
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: { //角标的位置
						left: 'center', //可以right center  可以500
						bottom: '0'
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
				},
				th1: [{
					title: '物料用途',
				}, {
					title: '年初库存金额'
				}, {
					title: '当前库存金额'
				}, {
					title: '总发货金额'
				}, {
					title: '周转率'
				}],
				th2: [{
					title: '期初时点库龄',
				}, {
					title: '年初库存金额'
				}, {
					title: '金额'
				}, {
					title: '压降率'
				}],
				th3: [{
					title: '周转次数',
				}, {
					title: '物料数'
				}, {
					title: '小类数'
				}],
				th4: [{
					title: '使用量/库存量',
				}, {
					title: '物料数'
				}, {
					title: '小类数'
				}],
				maindata: []
			}
		},
		mounted() {
			//文档节点加载完毕
			this.$nextTick(() => {
				this.useCharts(this.option1, this.option2, this.option3, this.option4)
			})
		},
		methods: {
			useCharts(one, two, three, four) {
				var chartDom1 = echarts.init(document.getElementById('echartsd1'));
				var chartDom2 = echarts.init(document.getElementById('echartsd2'));
				var chartDom3 = echarts.init(document.getElementById('echartsd3'));
				var chartDom4 = echarts.init(document.getElementById('echartsd4'));
				
				chartDom1.setOption(one, true);
				chartDom1.resize();
				chartDom2.setOption(two, true);
				chartDom2.resize();
				chartDom3.setOption(three, true);
				chartDom3.resize();
				chartDom4.setOption(four, true);
				chartDom4.resize();
			}
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
	}

	.tableall {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.tablei {
			width: 48.5%;
			box-sizing: border-box;
			margin: 10px;

			.tables1 {
				display: flex;
				flex-direction: column;
				border: 1px solid #000;

				.theade {
					font-size: 14px;
					background: #f5f7fa;
					color: #909399;
					height: 35px;
					line-height: 35px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.tmain {
					.list {
						display: flex;

						.listi {
							height: 30px;
							background: #f5f7fa;
							border-right: 1px solid #dcdfe6;
							border-bottom: 1px solid #dcdfe6;
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0 10px;
							background: #D9D9D9;
						}
					}

					.canvas {
						height: 200px;

						#echartsd1 {
							width: 100%;
							height: 100%;
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
				}
			}

			.tables2 {
				display: flex;
				flex-direction: column;
				border: 1px solid #000;

				.theade {
					font-size: 14px;
					background: #f5f7fa;
					color: #909399;
					height: 35px;
					line-height: 35px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.tmain {
					.list {
						display: flex;

						.listi {
							height: 30px;
							background: #f5f7fa;
							border-right: 1px solid #dcdfe6;
							border-bottom: 1px solid #dcdfe6;
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0 10px;
							background: #D9D9D9;
						}
					}

					.canvas {
						height: 200px;

						#echartsd2 {
							width: 100%;
							height: 100%;
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
				}
			}

			.tables3 {
				display: flex;
				flex-direction: column;
				border: 1px solid #000;

				.theade {
					font-size: 14px;
					background: #f5f7fa;
					color: #909399;
					height: 35px;
					line-height: 35px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.tmain {
					display: flex;
					justify-content: space-around;
					.list {
						display: flex;

						.listi {
							height: 30px;
							background: #f5f7fa;
							border-right: 1px solid #dcdfe6;
							border-bottom: 1px solid #dcdfe6;
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0 10px;
							background: #D9D9D9;
						}
					}

					.canvas {
						width: 300px;
						height: 200px;

						#echartsd3 {
							width: 100%;
							height: 100%;
						}
					}

					.table {
						width: 300px;
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
				}
			}

			.tables4 {
				display: flex;
				flex-direction: column;
				border: 1px solid #000;

				.theade {
					font-size: 14px;
					background: #f5f7fa;
					color: #909399;
					height: 35px;
					line-height: 35px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.tmain {
					display: flex;
					justify-content: space-around;
					.list {
						display: flex;

						.listi {
							height: 30px;
							background: #f5f7fa;
							border-right: 1px solid #dcdfe6;
							border-bottom: 1px solid #dcdfe6;
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0 10px;
							background: #D9D9D9;
						}
					}

					.canvas {
						width: 300px;
						height: 200px;

						#echartsd4 {
							width: 100%;
							height: 100%;
						}
					}

					.table {
						width: 300px;
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
				}
			}

		}
	}
</style>
