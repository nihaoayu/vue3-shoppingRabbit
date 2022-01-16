<template>
  <div class="xtx-goods-page" v-if="goodsList.categories">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread separator="/">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/">{{ goodsList.categories[1].name }}</XtxBreadItem>
        <XtxBreadItem to="/">{{ goodsList.categories[0].name }}</XtxBreadItem>
        <XtxBreadItem to="/">{{ goodsList.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <!-- 新增结构 -->

        <!-- 图片预览区 -->
        <div class="media">
          <GoodsImg :good="goodsList.mainPictures" />
          <GoodSales />
        </div>
        <!-- 商品信息区 -->
        <div class="spec">
          <GoodName />
          <!-- 新增 sku -->
          <GoodsSku :goods="goodsList" @change="getSku" />
          <!-- 数量 -->
          <XtxNumbox :max="goodsList.inventory" />
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <div class="goods-tabs">
            <!-- 详情图片列表 -->
            <img
              v-for="item in goodsList.details.pictures"
              :key="item"
              v-imglazy="item"
            />
          </div>
        </div>
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { findGoods } from '@/api/goods'
import { ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import GoodsImg from './components/goods-image'
import GoodSales from './components/goods-sales'
import GoodName from './components/goods-name'
export default {
  name: 'XtxGoodsPage',
  components: {
    GoodsImg,
    GoodSales,
    GoodName
  },
  setup () {
    const goodsList = ref([])
    provide('goods', goodsList)
    const route = useRoute()
    const getGoodsList = async () => {
      const res = await findGoods(route.params.id)
      console.log(res)
      goodsList.value = res
    }
    const getSku = (sku) => {
      if (sku.skuId) {
        goodsList.value.price = sku.price
        goodsList.value.oldPrice = sku.oldPrice
        goodsList.value.inventory = sku.inventory
      }
    }
    getGoodsList()
    return { goodsList, getSku }
  }
}
</script>

<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;

  // 新增样式
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
    background: #fff;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
  img {
    width: 100%;
  }
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
