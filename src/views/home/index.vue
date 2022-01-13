<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner'
import HomeCategory from './components/home-category'
export default {
  name: 'xtx-home-page',
  components: {
    HomeBanner,
    HomeCategory
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
