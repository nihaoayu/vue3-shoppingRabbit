<template>
  <div class="home-category">
    <template v-if="list.length > 0">
      <ul class="menu">
        <!-- 一级 -->

        <li v-for="item in list" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
          <!-- 二级 -->
          <RouterLink v-for="sub in item.children" :key="sub.id" to="/">
            {{ sub.name }}
          </RouterLink>
          <!-- 弹层 -->
          <div class="layer">
            <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
            <ul>
              <li v-for="good in item.goods" :key="good.id">
                <RouterLink :to="`/detail/${good.id}`">
                  <img :src="good.picture" alt="" />
                  <div class="info">
                    <p class="name ellipsis-2">
                      {{ good.name }}
                    </p>
                    <p class="desc ellipsis">{{ good.desc }}</p>
                    <p class="price"><i>¥</i>{{ good.price }}</p>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </template>
    <!-- 没有数据时渲染骨架屏 -->
    <template v-else>
      <ul class="menu">
        <li v-for="item in 9" :key="item">
          <XtxSkeleton
            style="margin-right: 10px"
            :width="40"
            :height="22"
            bg="rgba(255,255,255,.2)"
          />
          <XtxSkeleton
            style="margin-right: 10px"
            :width="56"
            :height="22"
            bg="rgba(255,255,255,.2)"
          />
          <XtxSkeleton :width="56" :height="22" bg="rgba(255,255,255,.2)" />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeCategory',
  setup () {
    const store = useStore()
    const list = computed(() => {
      return store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          goods: item.goods,
          children: item.children.slice(0, 2)
        }
      })
    })
    return { list }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  // 左侧菜单
  .menu {
    > li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }

      // 弹层默认不显示
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &:nth-child(3n) {
              margin-right: 0;
            }
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }
              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;
                .name {
                  font-size: 16px;
                  color: #666;
                }
                .desc {
                  color: #999;
                }
                .price {
                  font-size: 22px;
                  color: @priceColor;
                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      // 显示弹层
      &:hover {
        background: @xtxColor;
        .layer {
          display: block;
        }
      }
      // end
    }
  }
}
</style>
