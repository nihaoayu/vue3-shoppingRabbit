<template>
  <div class="goods-image">
    <div class="middle">
      <img :src="good[imgIndex]" alt="" />
    </div>
    <ul class="small">
      <li
        v-for="(img, i) in good"
        :key="i"
        :class="{ active: imgIndex === i }"
        @mouseenter="imgIndex = i"
      >
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'GoodsImage',
  props: {
    good: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const imgIndex = ref(0)
    return { imgIndex }
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
