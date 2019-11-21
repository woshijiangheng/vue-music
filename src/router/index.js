import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '../App'
//引入头部导航组件
import rank from '../components/rank/Rank.vue'
import recommend from '../components/recommend/Recommend.vue'
import search from '../components/search/Search.vue'
import singer from '../components/singer/Singer.vue'
Vue.use(VueRouter)
const routes = [{ path: '/', redirect: '/recommend' }, { path: '/rank', component: rank }, { path: '/recommend', component: recommend }, { path: '/search', component: search }, { path: '/singer', component: singer }]
const router = new VueRouter({
    routes
})
export default router