<template>
  <!-- 头部导航栏组件 -->
  <XtxTopNav />
  <header>头部</header>
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import XtxTopNav from './components/topnav'
export default {
  name: 'xtx-layout',
  components: {
    XtxTopNav
  }
}
</script>

<style scoped lang='less'></style>
