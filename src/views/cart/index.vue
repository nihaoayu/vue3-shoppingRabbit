<template>
  <div class="xtx-cart-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>购物车</XtxBreadItem>
      </XtxBread>
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <XtxCheckBox v-model="isAll">全选</XtxCheckBox>
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="good in vaildList" :key="good.skuId">
              <td>
                <XtxCheckBox
                  :modelValue="good.selected"
                  @update:modelValue="singelCheck(good, $event)"
                />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"
                    ><img :src="good.picture" alt=""
                  /></RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ good.name }}
                    </p>
                    <!-- 选择规格组件 -->
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ good.nowPrice }}</p>
                <p>
                  比加入时降价
                  <span class="red"
                    >&yen;{{ (good.price - good.nowPrice).toFixed(2) }}</span
                  >
                </p>
              </td>
              <td class="tc">
                <XtxNumbox :isShowCount="false" v-model="good.count" />
              </td>
              <td class="tc">
                <p class="f16 red">
                  &yen;{{ (good.nowPrice * good.count).toFixed(2) }}
                </p>
              </td>
              <td class="tc">
                <p><a class="green" href="javascript:;">删除</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{ vaildList.length }} 件商品，已选择
          {{ vaildSelected.length }} 件，商品合计：
          <span class="red">¥{{ vaildAllSelected }}</span>
        </div>
        <div class="total">
          <XtxButton type="primary">下单结算</XtxButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, useStore } from 'vuex'
export default {
  name: 'XtxCartPage',
  computed: {
    ...mapGetters('cart', ['vaildList', 'vaildSelected', 'vaildAllSelected', 'isAll'])
  },
  setup () {
    const store = useStore()
    const singelCheck = (good, isCheck) => {
      store.dispatch('cart/singelCheckAction', { good, isCheck })
    }
    return { singelCheck }
  }
}
</script>
<style scoped lang="less">
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: @priceColor;
}
.green {
  color: @xtxColor;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>
