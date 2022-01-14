<template>
  <div class="goods-image">
    <div
      class="large"
      v-if="!isOutside"
      :style="[
        {
          backgroundImage: `url(${good[imgIndex]})`,
          backgroundPosition: `${bg.x}px ${bg.y}px`,
        },
      ]"
    ></div>
    <div class="middle" ref="target">
      <img :src="good[imgIndex]" alt="" />
      <!-- 蒙层区 -->
      <div
        class="layer"
        :style="{ left: left + 'px', top: top + 'px' }"
        v-if="!isOutside"
      ></div>
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
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
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
    const target = ref(null)

    const { elementX, elementY, isOutside } = useMouseInElement(target)
    const left = ref(0)
    const top = ref(0)
    const bg = ref({ x: 0, y: 0 })
    watch([elementX, elementY], () => {
      if (elementX.value < 100) {
        left.value = 0
      } else if (elementX.value > 300) {
        left.value = 200
      } else {
        left.value = elementX.value - 100
      }
      if (elementY.value < 100) {
        top.value = 0
      } else if (elementY.value > 300) {
        top.value = 200
      } else {
        top.value = elementY.value - 100
      }
      bg.value.x = -left.value * 2
      bg.value.y = -top.value * 2
    })

    return { bg, top, left, imgIndex, isOutside, target, elementX, elementY }
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
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
