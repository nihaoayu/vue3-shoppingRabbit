<template>
  <div class="home-banner">
    <XtxSlider :data="data" autoPlay />
  </div>
</template>

<script>
import { findBanner } from '@/api/home'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  setup () {
    const data = ref([])
    const getData = async () => {
      const res = await findBanner()
      data.value = res
    }
    getData()
    return { data }
  }
}
</script>

<style scoped lang='less'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>
