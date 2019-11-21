<template>
  <div id="app">
   <m-header></m-header>
   <t-nav></t-nav>
   <router-view></router-view>
  </div>
</template>

<script>
// 头部
import MHeader from './components/m-header/m-header'
//导航
import TNav from './components/tab/Tab'
export default {
  components: {
    MHeader,
    TNav,
  }
}
</script>

<style scope lang='stylus' rel='stylesheet/stylus'>

</style>
