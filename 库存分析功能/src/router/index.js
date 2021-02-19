import Vue from 'vue'
import Router from 'vue-router'
import Xiangmudanwei from '@/pages/xiangmudanwei'
import Churukumingxi from '@/pages/xiangmudanwei/bigcom/bigcom1_detail/churukumingxi.vue'
import Kucunmingxi from '@/pages/xiangmudanwei/bigcom/bigcom1_detail/kucunmingxi.vue'
import Zhouzhuanmingxi from '@/pages/xiangmudanwei/bigcom/bigcom1_detail/zhouzhuanmingxi.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'xiangmudanwei',
			component: Xiangmudanwei
		},
		{
			path: '/churukumingxi',
			name: 'Churukumingxi',
			component: Churukumingxi
		},
		{
			path: '/kucunmingxi',
			name: 'Kucunmingxi',
			component: Kucunmingxi
		},
		{
			path: '/zhouzhuanmingxi',
			name: 'Zhouzhuanmingxi',
			component: Zhouzhuanmingxi
		}
	]
})
