<template>
  <div class="container">
    <HomeCategory />
    <!-- 轮播图 -->
    <HomeBanner />
    <!-- 新鲜好物 -->
    <HomeNew />
    <!-- 人气推荐 -->
    <HomeHot />
    <!-- 楼梯组件 -->
    <HomePord />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner'
import HomeCategory from './components/home-category'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
import HomePord from './components/home-product'
export default {
  name: 'xtx-home-page',
  components: {
    HomeBanner,
    HomeCategory,
    HomeNew,
    HomeHot,
    HomePord
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
