<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <template v-if="$store.state.category.list.length > 0">
      <li v-for="item in list" :key="item.id">
        <a href="#">{{ item.name }}</a>
        <!-- hover 显示 start -->
        <div class="layer">
          <ul>
            <li v-for="child in item.children" :key="child.id">
              <a href="#">
                <img :src="child.picture" alt="" />
                <p>{{ child.name }}</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- hover 显示 end -->
      </li>
    </template>
    <template v-else>
      <li v-for="item in 9" :key="item">
        <XtxSkeleton :width="32" :height="22" bg="#ccc" />
      </li>
    </template>
  </ul>
</template>

<script>
import { useStore, mapState } from 'vuex'
export default {
  name: 'AppHeaderNav',
  computed: {
    ...mapState('category', ['list'])
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    > a.router-link-exact-active {
      color: @xtxColor;
      border-bottom: 1px solid @xtxColor;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // ++ 初始样式 不显示
    .layer {
      width: 1240px;
      background-color: #fff;
      position: absolute;
      left: -200px;
      top: 56px;
      height: 0;
      overflow: hidden;
      opacity: 0;
      box-shadow: 0 0 5px #ccc;
      transition: all 0.2s 0.1s;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 124px;
        li {
          width: 110px;
          text-align: center;
          img {
            width: 60px;
            height: 60px;
          }
          p {
            padding-top: 10px;
          }
          &:hover {
            p {
              color: @xtxColor;
            }
          }
        }
      }
    }
    // hover之后显示出来
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .layer {
        height: 120px;
        opacity: 1;
      }
    }
    // ++ end
  }
}
</style>
