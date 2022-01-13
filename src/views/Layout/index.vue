<template>
  <!-- 头部导航栏组件 -->
  <XtxTopNav />
  <Header />
  <!-- 吸顶组件 -->
  <HeaderSticky />
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <XtxFooter />
</template>

<script>
import XtxTopNav from './components/topnav'
import Header from './components/header'
import XtxFooter from './components/footer'
import HeaderSticky from './components/header-sticky'
export default {
  name: 'xtx-layout',
  components: {
    XtxTopNav,
    Header,
    XtxFooter,
    HeaderSticky
  }
}
</script>

<style scoped lang='less'></style>
