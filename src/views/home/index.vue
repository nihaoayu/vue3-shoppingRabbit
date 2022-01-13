<template>
  <div class="container">
    <HomeCategory />
    <!-- 轮播图 -->
    <HomeBanner />
    <!-- 新鲜好物 -->
    <HomeNew />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner'
import HomeCategory from './components/home-category'
import HomeNew from './components/home-new'
export default {
  name: 'xtx-home-page',
  components: {
    HomeBanner,
    HomeCategory,
    HomeNew
  }
}
</script>

<style scoped lang='less'>
// 手动引入less样式
// @import "~@/styles/variables.less";
// .xtx-home-page {
//   color: @warnColor;
// }
</style>
