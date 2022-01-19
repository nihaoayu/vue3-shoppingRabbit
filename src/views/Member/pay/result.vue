<template>
  <div class="xtx-pay-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem>支付结果</XtxBreadItem>
      </XtxBread>
      <!-- 支付结果 -->
      <div class="pay-result">
        <span
          class="iconfont icon-queren2 green"
          v-if="$route.query.payResult"
        ></span>
        <span class="iconfont icon-shanchu red" v-else></span>
        <p class="tit">
          {{ $route.query.payResult ? "支付成功" : "支付失败" }}
        </p>
        <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
        <p>支付方式：<span>支付宝</span></p>
        <p>
          支付金额：<span>¥{{ payResultInfo.payMoney }}</span>
        </p>
        <div class="btn">
          <XtxButton type="primary" style="margin-right: 20px"
            >查看订单</XtxButton
          >
          <XtxButton type="gray">进入首页</XtxButton>
        </div>
        <p class="alert">
          <span class="iconfont icon-tip"></span>
          温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { findOrder } from '@/api/order'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'XtxPayResultPage',
  setup () {
    const payResultInfo = ref({})
    const route = useRoute()
    async function loadInfo () {
      const res = await findOrder(route.query.orderId)
      payResultInfo.value = res
    }
    onMounted(() => {
      loadInfo()
    })
    return {
      payResultInfo
    }
  }
}
</script>
<style scoped lang="less">
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  > .iconfont {
    font-size: 100px;
  }
  .green {
    color: #1dc779;
  }
  .red {
    color: @priceColor;
  }
  .tit {
    font-size: 24px;
  }
  .tip {
    color: #999;
  }
  p {
    line-height: 40px;
    font-size: 16px;
  }
  .btn {
    margin-top: 50px;
  }
  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>
