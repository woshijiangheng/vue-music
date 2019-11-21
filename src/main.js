import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
    //解决移动端点击两毫秒延迟
import fastclick from 'fastclick'
import '../src/common/stylus/index.styl'
fastclick.attach(document.body)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})